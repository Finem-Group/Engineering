import unittest
from test_marketplace import ROOT, read_json


class StandaloneAreaTests(unittest.TestCase):
    def test_every_area_ships_local_baseline_and_option_skills(self):
        for root in (ROOT / 'plugins').iterdir():
            if root.name == 'finem-core':
                continue
            with self.subTest(plugin=root.name):
                self.assertEqual(read_json(root / '.claude-plugin/plugin.json').get('dependencies', []), [])
                manifest = read_json(root / 'standalone.json')
                self.assertEqual(manifest['plugin'], root.name)
                self.assertTrue(manifest['capabilities'])
                for cap in manifest['capabilities'] + [c for option in manifest['options'] for c in option['capabilities']]:
                    for entry in cap['entrypoints']:
                        self.assertEqual(entry['plugin'], root.name)
                        self.assertTrue((root / entry['path']).is_file(), entry)
                entry = (root / 'skills' / root.name / 'SKILL.md').read_text()
                self.assertIn('standalone.json', entry)
                self.assertNotIn('report that dependency before proceeding', entry)
