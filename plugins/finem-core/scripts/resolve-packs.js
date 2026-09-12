#!/usr/bin/env node
'use strict';

// Metadata validation for the single Finem coordinator. No installation or writes.
const fs = require('node:fs');
const path = require('node:path');

function readPlugin(root) {
  root = path.resolve(root);
  const metadata = JSON.parse(fs.readFileSync(path.join(root, 'capabilities.json'), 'utf8'));
  if (typeof metadata.plugin !== 'string' || !Array.isArray(metadata.capabilities) || !Array.isArray(metadata.dependencies)) {
    throw new Error(`Invalid plugin metadata at ${root}`);
  }
  return { ...metadata, root };
}

function resolveSelection(core, packs, selected) {
  if (core.kind !== 'core') throw new Error('--core must point to the coordinator plugin');
  const available = new Map([[core.plugin, core]]);
  for (const pack of packs) {
    if (pack.kind !== 'pack' || available.has(pack.plugin)) throw new Error(`Invalid or duplicate pack: ${pack.plugin}`);
    available.set(pack.plugin, pack);
  }
  const active = new Set();
  const visiting = new Set();
  function visit(name) {
    if (visiting.has(name)) throw new Error(`Plugin dependency cycle: ${name}`);
    if (active.has(name)) return;
    const plugin = available.get(name);
    if (!plugin) throw new Error(`Required plugin is not available: ${name}`);
    visiting.add(name);
    for (const dependency of plugin.dependencies) visit(dependency);
    visiting.delete(name);
    active.add(name);
  }
  visit(core.plugin);
  for (const name of selected) visit(name);
  const names = [...active].sort();
  const groups = new Map();
  for (const name of names) {
    const plugin = available.get(name);
    for (const conflict of plugin.conflicts ?? []) {
      if (active.has(conflict)) throw new Error(`Active pack conflict: ${name} and ${conflict}`);
    }
    if (plugin.exclusiveGroup) {
      const previous = groups.get(plugin.exclusiveGroup);
      if (previous) throw new Error(`Exclusive group ${plugin.exclusiveGroup}: ${previous} and ${name}`);
      groups.set(plugin.exclusiveGroup, name);
    }
  }
  const originals = (plugin, cap) => cap.entrypoints.map(entry => ({
    ...entry, plugin: plugin.plugin, path: path.resolve(plugin.root, entry.path),
  }));
  const capabilities = new Map(core.capabilities.map(cap => [cap.id, { ...cap, entrypoints: originals(core, cap) }]));
  const replacements = new Map();
  const selectedPacks = names.filter(name => name !== core.plugin).map(name => available.get(name));
  // All replacements precede all additions, independent of installation order.
  for (const replace of [true, false]) {
    for (const plugin of selectedPacks) {
      for (const cap of plugin.capabilities) {
        if (Boolean(cap.replace) !== replace) continue;
        const target = capabilities.get(cap.id);
        if (!target) throw new Error(`Unknown capability ${cap.id} in ${plugin.plugin}`);
        if (replace) {
          if (replacements.has(cap.id)) throw new Error(`Ambiguous replacement for ${cap.id}: ${replacements.get(cap.id)} and ${plugin.plugin}`);
          replacements.set(cap.id, plugin.plugin);
          target.entrypoints = originals(plugin, cap);
        } else {
          const existing = new Set(target.entrypoints.map(entry => entry.skill));
          for (const entry of originals(plugin, cap)) {
            if (!existing.has(entry.skill)) target.entrypoints.push(entry);
            existing.add(entry.skill);
          }
        }
      }
    }
  }
  return { active: names, capabilities: [...capabilities.values()] };
}

function resolveAreas(core, areas, selected, extensions = []) {
  if (core.kind !== 'core' || core.schemaVersion !== 3 || core.layout !== 'areas') {
    throw new Error('Area selection requires the 0.7+ core; update the core and area plugins together');
  }
  const expected = new Map(core.areaPlugins.map(area => [area.plugin, area]));
  const available = new Map();
  for (const area of areas) {
    const definition = expected.get(area.plugin);
    if (area.kind !== 'area' || !definition || available.has(area.plugin)) {
      throw new Error(`Invalid or duplicate area plugin: ${area.plugin}`);
    }
    if (area.version !== core.version || area.schemaVersion !== core.schemaVersion) {
      throw new Error(`Plugin version mismatch: ${area.plugin}; update it together with ${core.plugin}`);
    }
    if (area.area !== definition.area || JSON.stringify(area.capabilities) !== JSON.stringify(core.capabilities.filter(cap => definition.capabilities.includes(cap.id)))) {
      throw new Error(`Area capability mismatch: ${area.plugin}`);
    }
    available.set(area.plugin, area);
  }
  const byCapability = new Map(core.capabilities.map(cap => [cap.id, cap]));
  const owner = new Map(core.areaPlugins.flatMap(area => area.capabilities.map(id => [id, area.plugin])));
  const active = new Set([core.plugin]);
  const included = new Set();
  const visiting = new Set();
  function include(id) {
    if (visiting.has(id)) throw new Error(`Capability dependency cycle: ${id}`);
    if (included.has(id)) return;
    const cap = byCapability.get(id);
    if (!cap) throw new Error(`Unknown capability dependency: ${id}`);
    const plugin = owner.get(id);
    if (!available.has(plugin)) throw new Error(`Required area plugin is not available: ${plugin} (for ${id})`);
    visiting.add(id);
    for (const dependency of cap.requires ?? []) include(dependency);
    visiting.delete(id);
    included.add(id);
    active.add(plugin);
  }
  for (const name of [...new Set(selected)].sort()) {
    if (name === core.plugin) continue;
    const legacy = (core.legacyPhases ?? []).find(phase => phase.plugin === name);
    if (legacy) {
      for (const id of legacy.capabilities) include(id);
      continue;
    }
    const area = available.get(name);
    if (!area) throw new Error(`Selected area plugin is not available: ${name}`);
    for (const cap of area.capabilities) include(cap.id);
  }
  const prefix = core.plugin.replace(/core$/, '');
  const normalize = name => name.startsWith(prefix) ? name : prefix + name;
  const scopedCore = { ...core, capabilities: core.capabilities.filter(cap => included.has(cap.id)) };
  const options = core.technologyOptions.map(option => ({
    ...option, root: core.root,
    capabilities: option.capabilities.filter(cap => included.has(cap.id)),
  }));
  const resolved = resolveSelection(scopedCore, options, extensions.map(normalize));
  // Paths always belong to the shared library, even when an option supplied them.
  for (const cap of resolved.capabilities) {
    for (const entry of cap.entrypoints) {
      if (entry.plugin !== core.plugin) entry.extension = entry.plugin.slice(prefix.length);
      entry.plugin = core.plugin;
    }
  }
  return {
    active: [...active].sort(),
    extensions: resolved.active.filter(name => name !== core.plugin).map(name => name.slice(prefix.length)),
    capabilities: resolved.capabilities,
  };
}

function main(args) {
  let coreRoot;
  const packRoots = [];
  let selected = [];
  let extensions = [];
  const seen = new Set();
  for (let i = 0; i < args.length; i += 2) {
    const [option, value] = args.slice(i, i + 2);
    if (value === undefined || value.startsWith('--')) throw new Error(`Missing value for ${option}`);
    if (seen.has(option) && !['--area', '--phase'].includes(option)) throw new Error(`Repeated option: ${option}`);
    seen.add(option);
    if (option === '--core' && coreRoot === undefined) coreRoot = value;
    else if (['--area', '--phase'].includes(option)) packRoots.push(value);
    else if (option === '--select') selected = value.split(',').map(name => name.trim()).filter(Boolean);
    else if (option === '--extensions') extensions = value.split(',').map(name => name.trim()).filter(Boolean);
    else throw new Error(`Unknown or repeated option: ${option}`);
  }
  if (!coreRoot) throw new Error('Usage: resolve-packs.js --core PATH [--area PATH ...] [--select finem-AREA,...] [--extensions ID,...]');
  const result = resolveAreas(readPlugin(coreRoot), packRoots.map(readPlugin), selected, extensions);
  process.stdout.write(JSON.stringify(result, null, 2) + '\n');
}

if (require.main === module) {
  try { main(process.argv.slice(2)); }
  catch (error) { process.stderr.write(error.message + '\n'); process.exitCode = 1; }
}

module.exports = { resolveSelection, resolveAreas };
