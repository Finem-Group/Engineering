"""Exercise per-project selection with the real shipped pack metadata."""
import json
import subprocess
import unittest

from test_marketplace import ROOT


class SelectionTests(unittest.TestCase):
    def select(self, installed, selected):
        command = ['node', str(ROOT / 'plugins/finem-core/scripts/resolve-packs.js'), '--core', str(ROOT / 'plugins/finem-core')]
        for name in installed:
            command.extend(['--pack', str(ROOT / 'plugins' / name)])
        command.extend(['--select', ','.join(selected)])
        return subprocess.run(command, capture_output=True, text=True, encoding='utf-8')

    def success(self, installed, selected):
        result = self.select(installed, selected)
        self.assertEqual(result.returncode, 0, result.stderr)
        return json.loads(result.stdout)

    def test_installed_svelte_does_not_activate_in_selected_vue_project(self):
        result = self.success(['finem-vue', 'finem-svelte'], ['finem-vue'])
        self.assertEqual(result['active'], ['finem-core', 'finem-vue'])
        frontend = next(c for c in result['capabilities'] if c['id'] == 'frontend')
        self.assertTrue(frontend['entrypoints'])
        self.assertEqual({e['plugin'] for e in frontend['entrypoints']}, {'finem-vue'})

    def test_no_selection_keeps_other_installed_frameworks_inactive(self):
        result = self.success(['finem-vue', 'finem-svelte'], [])
        self.assertEqual(result['active'], ['finem-core'])

    def test_nuxt_resolves_installed_vue_dependency_and_keeps_additions(self):
        result = self.success(['finem-nuxt', 'finem-vue', 'finem-svelte'], ['finem-nuxt'])
        self.assertEqual(result['active'], ['finem-core', 'finem-nuxt', 'finem-vue'])
        frontend = next(c for c in result['capabilities'] if c['id'] == 'frontend')
        self.assertEqual({e['plugin'] for e in frontend['entrypoints']}, {'finem-nuxt', 'finem-vue'})
        for entry in frontend['entrypoints']:
            from pathlib import Path
            self.assertTrue(Path(entry['path']).is_file(), entry)

    def test_exclusive_frameworks_cannot_both_be_active(self):
        result = self.select(['finem-vue', 'finem-svelte'], ['finem-vue', 'finem-svelte'])
        self.assertNotEqual(result.returncode, 0)
        self.assertIn('web-framework', result.stderr)
        self.assertEqual(result.stdout, '')

    def test_explicit_conflicting_packs_cannot_both_be_active(self):
        result = self.select(['finem-vue', 'finem-react-ui'], ['finem-vue', 'finem-react-ui'])
        self.assertNotEqual(result.returncode, 0)
        self.assertIn('conflict', result.stderr.lower())

    def test_missing_dependency_is_reported_without_installing_it(self):
        result = self.select(['finem-nuxt'], ['finem-nuxt'])
        self.assertNotEqual(result.returncode, 0)
        self.assertIn('finem-vue', result.stderr)

    def test_unknown_selected_pack_is_rejected(self):
        result = self.select([], ['finem-does-not-exist'])
        self.assertNotEqual(result.returncode, 0)
        self.assertIn('finem-does-not-exist', result.stderr)

    def test_install_and_selection_order_do_not_change_resolved_map(self):
        packs = ['finem-vue', 'finem-nuxt', 'finem-web-animation']
        first = self.success(packs, ['finem-nuxt', 'finem-web-animation'])
        second = self.success(list(reversed(packs)), ['finem-web-animation', 'finem-nuxt'])
        self.assertEqual(first, second)

    def test_every_pack_can_activate_with_its_available_dependencies(self):
        installed = sorted(p.name for p in (ROOT / 'plugins').iterdir() if p.name != 'finem-core')
        for name in installed:
            with self.subTest(pack=name):
                result = self.success(installed, [name])
                self.assertIn(name, result['active'])
                self.assertIn('finem-core', result['active'])

    def test_cycles_and_ambiguous_replacements_are_rejected(self):
        # Construct independent metadata for invalid combinations not shipped by the catalog.
        program = r'''
const assert = require('node:assert/strict');
const {resolveSelection} = require(process.argv[1]);
const core = {plugin:'core', kind:'core', root:'.', dependencies:[], capabilities:[{id:'frontend', entrypoints:[]}]};
const a = {plugin:'a', kind:'pack', root:'.', dependencies:['core'], capabilities:[{id:'frontend',replace:true,entrypoints:[]}]};
const b = {...a,plugin:'b'};
assert.throws(() => resolveSelection(core,[a,b],['a','b']), /Ambiguous replacement for frontend/);
assert.throws(() => resolveSelection(core,[{...a,dependencies:['b']},{...b,dependencies:['a']}],['a']), /dependency cycle/);
assert.throws(() => resolveSelection(core,[a,a],['a']), /duplicate pack/);
'''
        result = subprocess.run(['node', '-e', program, str(ROOT / 'plugins/finem-core/scripts/resolve-packs.js')], capture_output=True, text=True)
        self.assertEqual(result.returncode, 0, result.stderr)


if __name__ == '__main__':
    unittest.main()
