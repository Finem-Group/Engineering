"""Reject incomplete direction and ambiguous ownership before emitting plugins."""
import subprocess
import unittest

from test_marketplace import ROOT


class AreaLayoutTests(unittest.TestCase):
    def test_bad_direction_and_ownership_are_rejected_before_generation(self):
        program = r'''
const assert = require('node:assert/strict');
const {groupByArea} = require(process.argv[1]);
const core = {name:'finem-core',capabilities:[{id:'frontend',phase:'build'}]};
const area = {id:'frontend-mobile',title:'Frontend & Mobile',purpose:'Implement interfaces',deliverables:['Working interface'],capabilities:['frontend']};
const check = definitions => groupByArea(structuredClone(core),[],definitions,['build']);
assert.throws(() => check([{...area,deliverables:'not an array'}]), /Incomplete engineering direction/);
assert.throws(() => check([{...area,deliverables:['']}]), /Incomplete engineering direction/);
assert.throws(() => check([area,{...area,id:'other'}]), /Duplicate capability owner/);
assert.throws(() => check([{...area,capabilities:['missing']}]), /No engineering area owns capability/);
assert.throws(() => check([{...area,id:'build'}]), /Invalid or duplicate engineering area/);
'''
        result = subprocess.run(['node', '-e', program, str(ROOT / 'scripts/area-layout.js')], capture_output=True, text=True)
        self.assertEqual(result.returncode, 0, result.stderr)
