'use strict';

// Keep the existing Core resolver contract intact; publish a separate local map.
function attachStandalone(plugins, resolveSources) {
  const options = new Map(plugins[0].technologyOptions.map(option => [option.plugin, option]));
  for (const area of plugins.filter(plugin => plugin.kind === 'area')) {
    const selected = new Map();
    function include(id) {
      const option = options.get(id);
      if (!option) throw new Error(`Unknown standalone option: ${id}`);
      if (selected.has(id)) return;
      selected.set(id, option);
      for (const dependency of option.dependencies) {
        if (dependency !== plugins[0].name) include(dependency);
      }
    }
    for (const id of area.options) include(`finem-${id}`);
    const local = cap => ({ ...cap, entrypoints: cap.entrypoints.map(entry => ({ ...entry, plugin: area.name })) });
    area.standalone = {
      schemaVersion: 1, plugin: area.name,
      capabilities: area.capabilities.map(local),
      options: [...selected.values()].map(option => ({
        ...option, dependencies: option.dependencies.filter(id => id !== plugins[0].name),
        capabilities: option.capabilities.map(local),
      })),
    };
    const entries = [...area.standalone.capabilities, ...area.standalone.options.flatMap(option => option.capabilities)].flatMap(cap => cap.entrypoints);
    area.sources = resolveSources([...new Set(entries.map(entry => entry.source))]);
    area.skillCount = new Set(entries.map(entry => entry.skill)).size;
    area.dependencies = [];
  }
  return plugins;
}

module.exports = { attachStandalone };
