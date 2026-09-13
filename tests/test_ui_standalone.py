import hashlib
import json
import unittest
from test_marketplace import ROOT


class StandaloneUITests(unittest.TestCase):
    def test_ui_is_complete_without_core_install(self):
        ui = ROOT / 'plugins/finem-ui-ux'
        expected = {'agentation', 'anti-ui-slop', 'extract-design-system',
                    'polish-ui-components', 'transitions-dev', 'transitions-polish',
                    'ui-design', 'ui-radar', 'ui-slop-score', 'finem-ui-ux'}
        self.assertEqual({p.name for p in (ui / 'skills').iterdir()}, expected)
        manifest = json.loads((ui / '.claude-plugin/plugin.json').read_text())
        self.assertEqual(manifest.get('dependencies', []), [])
        self.assertIn('Without Core', (ui / 'skills/finem-ui-ux/SKILL.md').read_text())

    def test_standalone_originals_match_pinned_git_files(self):
        ui = ROOT / 'plugins/finem-ui-ux'
        lock = json.loads((ui / 'ui-source.lock.json').read_text())
        self.assertRegex(lock['revision'], r'^[a-f0-9]{40}$')
        self.assertIn('licenses/XYLEX-LICENSE.txt', [f['path'] for f in lock['files']])
        for record in lock['files']:
            self.assertEqual(hashlib.sha256((ui / record['path']).read_bytes()).hexdigest(), record['sha256'])
