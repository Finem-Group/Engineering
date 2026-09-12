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

function main(args) {
  let coreRoot;
  const packRoots = [];
  let selected = [];
  for (let i = 0; i < args.length; i += 2) {
    const [option, value] = args.slice(i, i + 2);
    if (value === undefined || value.startsWith('--')) throw new Error(`Missing value for ${option}`);
    if (option === '--core' && coreRoot === undefined) coreRoot = value;
    else if (option === '--pack') packRoots.push(value);
    else if (option === '--select') selected = value.split(',').map(name => name.trim()).filter(Boolean);
    else throw new Error(`Unknown or repeated option: ${option}`);
  }
  if (!coreRoot) throw new Error('Usage: resolve-packs.js --core PATH [--pack PATH ...] [--select NAME,NAME]');
  const result = resolveSelection(readPlugin(coreRoot), packRoots.map(readPlugin), selected);
  process.stdout.write(JSON.stringify(result, null, 2) + '\n');
}

if (require.main === module) {
  try { main(process.argv.slice(2)); }
  catch (error) { process.stderr.write(error.message + '\n'); process.exitCode = 1; }
}

module.exports = { resolveSelection };
