"""Validate shipped artifacts; upstream bodies are data, never executed."""
import hashlib
import json
import os
from pathlib import Path
import unittest

import yaml


ROOT = Path(__file__).resolve().parents[1]


def long_path(path):
    resolved = str(path.resolve())
    return Path('\\\\?\\' + resolved) if os.name == 'nt' and not resolved.startswith('\\\\?\\') else Path(resolved)


def read_json(path):
    return json.loads(long_path(path).read_text(encoding='utf-8'))


class MarketplaceTests(unittest.TestCase):
    def test_native_skill_headers_are_loadable_yaml(self):
        for skill in (ROOT / 'plugins').glob('*/skills/*/SKILL.md'):
            with self.subTest(skill=skill.relative_to(ROOT)):
                text = skill.read_text(encoding='utf-8')
                self.assertTrue(text.startswith('---\n'))
                header = yaml.safe_load(text.split('---', 2)[1])
                self.assertEqual(header['name'], skill.parent.name)
                self.assertIsInstance(header['description'], str)
                self.assertTrue(header['description'].strip())

    def test_both_hosts_reference_the_same_complete_plugins(self):
        claude = read_json(ROOT / '.claude-plugin/marketplace.json')
        codex = read_json(ROOT / '.agents/plugins/marketplace.json')
        expected = {p.name for p in (ROOT / 'plugins').iterdir() if p.is_dir()}
        for marketplace in [claude, codex]:
            names = [p['name'] for p in marketplace['plugins']]
            self.assertEqual(len(names), len(set(names)))
            self.assertEqual(set(names), expected)
            for entry in marketplace['plugins']:
                source = entry['source']
                relative = source if isinstance(source, str) else source['path']
                self.assertEqual(relative, './plugins/' + entry['name'])
        for name in expected:
            plugin = ROOT / 'plugins' / name
            capabilities = read_json(plugin / 'capabilities.json')
            for host in ['claude', 'codex']:
                manifest = read_json(plugin / f'.{host}-plugin/plugin.json')
                self.assertEqual(manifest['name'], name)
                self.assertEqual(manifest['version'], capabilities['version'])
                self.assertEqual(manifest['skills'].rstrip('/'), './skills')
            manifest = read_json(plugin / '.claude-plugin/plugin.json')
            self.assertEqual(manifest.get('dependencies', []), capabilities['dependencies'])
            for dep in capabilities['dependencies']:
                self.assertIn(dep, expected)
            for cap in capabilities['capabilities']:
                for entry in cap['entrypoints']:
                    self.assertTrue(long_path(plugin / entry['path']).is_file(), (name, entry))

    def test_original_bytes_and_support_dependencies_are_complete(self):
        for plugin in (ROOT / 'plugins').iterdir():
            lock = read_json(plugin / 'upstream.lock.json')
            sources = {s['id']: s for s in lock['sources']}
            for source in sources.values():
                for dependency in source.get('dependencies', []):
                    self.assertIn(dependency, sources, f'{plugin.name}: {source["id"]} requires {dependency}')
                for entry in source['files']:
                    with self.subTest(plugin=plugin.name, source=source['id'], path=entry['path']):
                        file = long_path(plugin / 'upstream' / source['id'] / entry['path'])
                        self.assertEqual(hashlib.sha256(file.read_bytes()).hexdigest(), entry['sha256'])
                        if os.name != 'nt':
                            self.assertEqual(file.stat().st_mode & 0o111, entry['mode'] & 0o111)

    def test_core_offline_guidelines_resolve_to_locked_original(self):
        root = ROOT / 'plugins/finem-core'
        sources = {s['id']: s for s in read_json(root / 'upstream.lock.json')['sources']}
        self.assertIn('web-guidelines', sources)
        entry = next(f for f in sources['web-guidelines']['files'] if f['path'] == 'command.md')
        self.assertEqual(hashlib.sha256((root / 'upstream/web-guidelines/command.md').read_bytes()).hexdigest(), entry['sha256'])


if __name__ == '__main__':
    unittest.main()
