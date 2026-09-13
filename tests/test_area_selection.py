"""Public area selection and preservation contracts for the compact marketplace."""
import json
import hashlib
from pathlib import Path
import subprocess
import unittest

from test_marketplace import ROOT, read_json, long_path


from test_areas import AREAS


class AreaSelectionTests(unittest.TestCase):
    def select(self, selected, extensions=(), installed=AREAS):
        core = ROOT / 'plugins/finem-core'
        command = ['node', str(core / 'scripts/resolve-packs.js'), '--core', str(core)]
        for area in installed:
            command += ['--area', str(ROOT / 'plugins' / ('finem-' + area))]
        command += ['--select', ','.join('finem-' + area for area in selected)]
        if extensions:
            command += ['--extensions', ','.join(extensions)]
        return subprocess.run(command, capture_output=True, text=True, encoding='utf-8')

    def success(self, selected, extensions=(), installed=AREAS):
        result = self.select(selected, extensions, installed)
        self.assertEqual(result.returncode, 0, result.stderr)
        return json.loads(result.stdout)

    def test_each_capability_has_one_area_owner(self):
        actual = {p['name'] for p in read_json(ROOT / '.agents/plugins/marketplace.json')['plugins']}
        self.assertEqual(actual, {'finem-core', *('finem-' + area for area in AREAS)})
        caps = []
        for area in AREAS:
            metadata = read_json(ROOT / 'plugins' / ('finem-' + area) / 'capabilities.json')
            self.assertEqual(metadata['kind'], 'area')
            self.assertEqual(metadata['area'], area)
            self.assertEqual(metadata['dependencies'], [])
            self.assertTrue(all(cap['phase'] in {'context', 'design', 'build', 'verify', 'deliver', 'operate', 'evolve'} for cap in metadata['capabilities']))
            caps += [cap['id'] for cap in metadata['capabilities']]
        self.assertEqual(len(caps), 43)
        self.assertEqual(len(set(caps)), 43)

    def test_core_retains_complete_canonical_library(self):
        locks = [read_json(ROOT / 'plugins/finem-core/upstream.lock.json')]
        sources = [source for lock in locks for source in lock['sources']]
        self.assertEqual(len(sources), 50)
        self.assertEqual(len({s['id'] for s in sources}), 50)
        self.assertEqual(sum(len(s['files']) for s in sources), 2651)
        self.assertEqual(sum(len(s['skills']) for s in sources), 180)

    def test_library_preserves_frozen_05_sources_hashes_modes_and_skill_ids(self):
        sources = read_json(ROOT / 'plugins/finem-core/upstream.lock.json')['sources']
        fields = ['id', 'repository', 'revision', 'license', 'dependencies', 'skills', 'files']
        canonical = [{key: source[key] for key in fields} for source in sorted(sources, key=lambda s: s['id'])]
        digest = hashlib.sha256(json.dumps(canonical, sort_keys=True, separators=(',', ':')).encode()).hexdigest()
        baseline = read_json(ROOT / 'tests/fixtures/library-0.5.json')
        self.assertEqual(digest, baseline['sha256'])

    def test_installed_areas_and_frameworks_are_inactive_without_selection(self):
        result = self.success([])
        self.assertEqual(result['active'], ['finem-core'])
        self.assertEqual(result['capabilities'], [])
        self.assertEqual(result['extensions'], [])

    def test_frontend_loads_prerequisites_and_only_selected_framework(self):
        result = self.success(['frontend-mobile'], ['nuxt'])
        self.assertEqual(result['active'], ['finem-architecture', 'finem-core', 'finem-frontend-mobile', 'finem-product-planning'])
        self.assertEqual(result['extensions'], ['nuxt', 'vue'])
        frontend = next(c for c in result['capabilities'] if c['id'] == 'frontend')
        self.assertIn('antfu:nuxt', {e['skill'] for e in frontend['entrypoints']})
        self.assertFalse(any(e['skill'].startswith(('svelte:', 'vercel:')) for e in frontend['entrypoints']))
        self.assertFalse(any(c['id'] == 'observability' for c in result['capabilities']))
        for cap in result['capabilities']:
            for entry in cap['entrypoints']:
                self.assertTrue(long_path(Path(entry['path'])).is_file(), entry)

    def test_missing_area_prerequisites_are_actionable(self):
        result = self.select(['frontend-mobile'], ['nuxt'], installed=['frontend-mobile'])
        self.assertNotEqual(result.returncode, 0)
        self.assertIn('finem-architecture', result.stderr)
        self.assertEqual(result.stdout, '')

    def test_framework_conflicts_still_fail_before_returning_guidance(self):
        for options in [['vue', 'svelte'], ['vue', 'react-ui'], ['expo', 'xylex-ui-polish']]:
            result = self.select(['frontend-mobile'], options)
            self.assertNotEqual(result.returncode, 0)
            self.assertEqual(result.stdout, '')

    def test_legacy_option_ids_migrate_without_becoming_native_plugins(self):
        current = self.success(AREAS, ['nuxt', 'xylex-ui-polish'])
        legacy = self.success(AREAS, ['finem-nuxt', 'finem-xylex-ui-polish'])
        self.assertEqual(current, legacy)
        migration = read_json(ROOT / 'docs/plugin-migration.json')
        self.assertEqual(len(migration['extensions']), 56)
        self.assertIn('finem-frontend-mobile', migration['extensions']['finem-nuxt']['areas'])

    def test_all_56_options_remain_individually_usable_and_scoped(self):
        core = read_json(ROOT / 'plugins/finem-core/capabilities.json')
        options = core['technologyOptions']
        self.assertEqual(len(options), 56)
        reached = set()
        for option in options:
            with self.subTest(extension=option['extension']):
                result = self.success(AREAS, [option['extension']])
                self.assertIn(option['extension'], result['extensions'])
                self.assertEqual(len(result['capabilities']), 43)
                reached.update(e['skill'] for c in result['capabilities'] for e in c['entrypoints'])
        self.assertEqual(len(reached), 180)
        scoped = self.success(['product-planning'], ['vue'], installed=['product-planning'])
        self.assertFalse(any(e['skill'].startswith('vue:') for c in scoped['capabilities'] for e in c['entrypoints']))

    def test_selection_order_does_not_change_additions_or_replacements(self):
        first = self.success(AREAS, ['nuxt', 'web-animation', 'xylex-ui-polish'])
        second = self.success(list(reversed(AREAS)), ['xylex-ui-polish', 'web-animation', 'nuxt'], installed=list(reversed(AREAS)))
        self.assertEqual(first, second)

    def test_stale_duplicate_or_drifted_area_plugins_are_rejected(self):
        program = r'''
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = process.argv[1];
const read = name => ({...JSON.parse(fs.readFileSync(path.join(root,name,'capabilities.json'),'utf8')),root:path.join(root,name)});
const core = read('finem-core');
const area = read('finem-product-planning');
const {resolveAreas} = require(path.join(core.root,'scripts/resolve-packs.js'));
assert.throws(() => resolveAreas(core,[{...area,version:'0.5.0'}],['finem-product-planning']), /version mismatch/);
assert.throws(() => resolveAreas(core,[area,area],[]), /duplicate area/);
assert.throws(() => resolveAreas(core,[{...area,capabilities:[]}],[]), /capability mismatch/);
assert.throws(() => resolveAreas(core,[area],['finem-product-planning'],['unknown']), /not available/);
assert.throws(() => resolveAreas({...core,schemaVersion:2},[area],[]), /update the core/);
'''
        result = subprocess.run(['node', '-e', program, str(ROOT / 'plugins')], capture_output=True, text=True)
        self.assertEqual(result.returncode, 0, result.stderr)


if __name__ == '__main__':
    unittest.main()
