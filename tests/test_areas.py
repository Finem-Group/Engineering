"""User-facing engineering disciplines have distinct ownership and task direction."""
import json
import subprocess
import unittest

from test_marketplace import ROOT, read_json


AREAS = ['product-planning', 'architecture', 'ui-ux', 'frontend-mobile', 'backend-data',
         'infrastructure-devops', 'security-privacy', 'testing-quality',
         'observability-reliability', 'maintenance-documentation']


class AreaTests(unittest.TestCase):
    def select(self, selected, extensions=(), installed=AREAS, flag='--area'):
        core = ROOT / 'plugins/finem-core'
        command = ['node', str(core / 'scripts/resolve-packs.js'), '--core', str(core)]
        for area in installed:
            command += [flag, str(ROOT / 'plugins' / ('finem-' + area))]
        command += ['--select', ','.join('finem-' + area for area in selected)]
        if extensions:
            command += ['--extensions', ','.join(extensions)]
        return subprocess.run(command, capture_output=True, text=True, encoding='utf-8')

    def success(self, *args, **kwargs):
        result = self.select(*args, **kwargs)
        self.assertEqual(result.returncode, 0, result.stderr)
        return json.loads(result.stdout)

    def test_marketplace_names_express_engineering_expertise(self):
        entries = read_json(ROOT / '.agents/plugins/marketplace.json')['plugins']
        self.assertEqual({p['name'] for p in entries}, {'finem-core', *('finem-' + a for a in AREAS)})
        titles = {}
        for area in AREAS:
            root = ROOT / 'plugins' / ('finem-' + area)
            titles[area] = read_json(root / '.codex-plugin/plugin.json')['interface']['displayName']
        self.assertEqual(titles['ui-ux'], 'UI Plugins')
        self.assertEqual(titles['infrastructure-devops'], 'Infrastructure')
        self.assertEqual(titles['security-privacy'], 'Security')

    def test_ui_infrastructure_and_security_have_their_own_capabilities(self):
        expected = {
            'ui-ux': {'ux', 'design-system', 'accessibility'},
            'security-privacy': {'auth', 'secrets-iam', 'security', 'privacy-compliance'},
            'infrastructure-devops': {'infrastructure', 'networking', 'configuration-environments', 'ci', 'release', 'deployment', 'rollback', 'cost-finops'},
        }
        for area, capabilities in expected.items():
            metadata = read_json(ROOT / 'plugins' / ('finem-' + area) / 'capabilities.json')
            self.assertEqual({c['id'] for c in metadata['capabilities']}, capabilities)
            self.assertTrue(metadata['purpose'])
            self.assertTrue(metadata['deliverables'])

    def test_frontend_selects_only_frontend_and_exact_prerequisites(self):
        result = self.success(['frontend-mobile'], ['nuxt'])
        self.assertEqual({c['id'] for c in result['capabilities']}, {'frontend', 'api-contracts', 'requirements', 'product-discovery'})
        self.assertEqual(result['active'], ['finem-architecture', 'finem-core', 'finem-frontend-mobile', 'finem-product-planning'])
        self.assertEqual(result['extensions'], ['nuxt', 'vue'])

    def test_ui_work_does_not_activate_infrastructure_or_security(self):
        result = self.success(['ui-ux'], ['xylex-ui-polish'])
        self.assertEqual(result['active'], ['finem-core', 'finem-product-planning', 'finem-ui-ux'])
        self.assertTrue(any(e['skill'] == 'xylex:extract-design-system' for c in result['capabilities'] for e in c['entrypoints']))
        self.assertFalse(any(c['id'] in {'frontend', 'infrastructure', 'security'} for c in result['capabilities']))

    def test_legacy_phase_selection_retains_its_exact_capability_scope(self):
        result = self.success(['build'], ['nuxt'], flag='--phase')
        core = read_json(ROOT / 'plugins/finem-core/capabilities.json')
        original_build = {c['id'] for c in core['capabilities'] if c['phase'] == 'build'}
        selected = {c['id'] for c in result['capabilities']}
        self.assertTrue(original_build <= selected)
        self.assertFalse(selected & {'release', 'cost-finops', 'privacy-compliance', 'security'})
        migration = read_json(ROOT / 'docs/plugin-migration.json')
        self.assertEqual(len(migration['legacyPhases']), 7)
        self.assertIn('finem-infrastructure-devops', migration['legacyPhases']['finem-build']['areas'])


if __name__ == '__main__':
    unittest.main()
