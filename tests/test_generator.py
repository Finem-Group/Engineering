"""Small catalog fixtures exercise the generator without the external L11 repo."""
import hashlib
import json
from pathlib import Path
import subprocess
import tempfile
import unittest

import yaml

from test_marketplace import ROOT


class GeneratorTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        self.catalog = self.root / 'input'
        self.output = self.root / 'output'
        self.sources = [
            self.source('vercel', ['web-guidelines'], {'skills/review/SKILL.md': b'---\nname: review\ndescription: Review UI\n---\nOriginal UI guidance.\n'}, [{'id': 'vercel:review', 'path': 'skills/review/SKILL.md'}]),
            self.source('web-guidelines', ['support'], {'command.md': b'Original offline guidelines.\r\n'}, []),
            self.source('support', [], {'LICENSE': b'MIT fixture\n'}, []),
        ]
        self.stack = {
            'version': '0.4.0',
            'capabilities': [{'id': 'frontend', 'title': 'Frontend', 'phase': 'build', 'coverage': 'composed', 'upstream': ['vercel:review']}],
            'extensions': [{'id': 'migration-prisma-mongodb', 'description': 'Explicit MongoDB assessment: preserve # hashes and "quotes"', 'mappings': [{'capability': 'frontend', 'skills': ['vercel:review']}]}],
        }

    def source(self, name, dependencies, files, skills):
        records = []
        for relative, content in files.items():
            target = self.catalog / 'vendor' / name / relative
            target.parent.mkdir(parents=True, exist_ok=True)
            target.write_bytes(content)
            records.append({'path': relative, 'sha256': hashlib.sha256(content).hexdigest(), 'mode': 420})
        return {'id': name, 'repository': 'https://example.org/' + name, 'revision': 'a' * 40, 'license': 'MIT', 'verifiedAt': '2026-09-11', 'dependencies': dependencies, 'skills': skills, 'files': records}

    def generate(self):
        directory = self.catalog / 'catalog'
        directory.mkdir(exist_ok=True)
        for name, value in [('stack.json', self.stack), ('upstream-sources.json', {'sources': self.sources}), ('upstream.lock.json', {'sources': self.sources})]:
            (directory / name).write_text(json.dumps(value), encoding='utf-8')
        return subprocess.run(['node', str(ROOT / 'build-marketplace.js'), '--catalog', str(self.catalog), '--out', str(self.output)], capture_output=True, text=True, encoding='utf-8')

    def test_generated_headers_preserve_colons_quotes_and_hashes(self):
        result = self.generate()
        self.assertEqual(result.returncode, 0, result.stderr)
        for file in (self.output / 'plugins').glob('*/skills/*/SKILL.md'):
            header = yaml.safe_load(file.read_text(encoding='utf-8').split('---', 2)[1])
            self.assertIsInstance(header['description'], str)
        metadata = json.loads((self.output / 'plugins/finem-core/capabilities.json').read_text())
        self.assertIn('assessment: preserve # hashes and "quotes"', metadata['technologyOptions'][0]['description'])

    def test_transitive_support_sources_ship_once_with_core(self):
        result = self.generate()
        self.assertEqual(result.returncode, 0, result.stderr)
        for name in ['finem-core']:
            plugin = self.output / 'plugins' / name
            self.assertEqual((plugin / 'upstream/web-guidelines/command.md').read_bytes(), b'Original offline guidelines.\r\n')
            self.assertEqual((plugin / 'upstream/support/LICENSE').read_bytes(), b'MIT fixture\n')
            sources = json.loads((plugin / 'upstream.lock.json').read_text())['sources']
            self.assertEqual({s['id'] for s in sources}, {'vercel', 'web-guidelines', 'support'})
        phase = self.output / 'plugins/finem-frontend-mobile'
        self.assertFalse((phase / 'upstream').exists())
        metadata = json.loads((phase / 'capabilities.json').read_text())
        self.assertEqual(metadata['capabilities'][0]['entrypoints'][0]['plugin'], 'finem-core')
        self.assertTrue((self.output / 'docs/area-plugins.md').is_file())

    def test_invalid_phase_ownership_fails_before_overwriting_plugins(self):
        self.stack['phases'] = ['design']
        marker = self.output / 'plugins/existing/keep.txt'
        marker.parent.mkdir(parents=True)
        marker.write_text('keep me')
        result = self.generate()
        self.assertNotEqual(result.returncode, 0)
        self.assertIn('Unknown phase build', result.stderr)
        self.assertEqual(marker.read_text(), 'keep me')

    def test_unknown_support_dependency_fails_before_overwriting_plugins(self):
        self.sources[1]['dependencies'] = ['missing']
        marker = self.output / 'plugins/existing/keep.txt'
        marker.parent.mkdir(parents=True)
        marker.write_text('keep me')
        result = self.generate()
        self.assertNotEqual(result.returncode, 0)
        self.assertIn('missing', result.stderr)
        self.assertEqual(marker.read_text(), 'keep me')

    def test_support_dependency_cycle_fails_before_writes(self):
        self.sources[2]['dependencies'] = ['vercel']
        result = self.generate()
        self.assertNotEqual(result.returncode, 0)
        self.assertIn('cycle', result.stderr.lower())
        self.assertFalse((self.output / 'plugins').exists())


if __name__ == '__main__':
    unittest.main()
