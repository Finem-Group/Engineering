'use strict';

// Disciplines own capabilities; lifecycle phase metadata and source mappings stay intact.
function groupByArea(core, options, definitions, phases) {
  const phaseIds = phases ?? [...new Set(core.capabilities.map(cap => cap.phase))];
  if (new Set(phaseIds).size !== phaseIds.length || phaseIds.some(id => !/^[a-z][a-z0-9-]*$/.test(id) || id === 'core')) {
    throw new Error('Invalid or duplicate lifecycle phase');
  }
  const owners = new Map();
  const ids = new Set();
  const nonemptyText = value => typeof value === 'string' && value.trim().length > 0;
  const textList = value => Array.isArray(value) && value.length > 0 && value.every(nonemptyText);
  for (const area of definitions) {
    if (!/^[a-z][a-z0-9-]*$/.test(area.id) || area.id === 'core' || ids.has(area.id) || phaseIds.includes(area.id)) {
      throw new Error(`Invalid or duplicate engineering area: ${area.id}`);
    }
    ids.add(area.id);
    if (!nonemptyText(area.title) || !nonemptyText(area.purpose) || !textList(area.deliverables) || !textList(area.capabilities)) {
      throw new Error(`Incomplete engineering direction: ${area.id}`);
    }
    for (const id of area.capabilities) {
      if (owners.has(id)) throw new Error(`Duplicate capability owner: ${id}`);
      owners.set(id, area.id);
    }
  }
  for (const cap of core.capabilities) {
    if (!phaseIds.includes(cap.phase)) throw new Error(`Unknown phase ${cap.phase} for ${cap.id}`);
    if (!owners.has(cap.id)) throw new Error(`No engineering area owns capability: ${cap.id}`);
  }
  const prefix = core.name.replace(/-core$/, '');
  const groups = definitions.flatMap(area => {
    const capabilities = core.capabilities.filter(cap => owners.get(cap.id) === area.id);
    if (!capabilities.length) return []; // Small catalogs generate only applicable areas.
    const scope = new Set(capabilities.map(cap => cap.id));
    return [{
      name: `${prefix}-${area.id}`, kind: 'area', area: area.id,
      displayName: area.displayName || area.title, title: area.title,
      description: area.purpose, purpose: area.purpose, deliverables: area.deliverables,
      shortDescription: area.shortDescription || `${area.title} agent skills.`,
      dependencies: area.id === 'ui-ux' ? [] : [core.name], capabilities,
      options: options.filter(option => option.capabilities.some(cap => scope.has(cap.id))).map(option => option.extension),
      sources: [], skillCount: 0,
    }];
  });
  core.layout = 'areas';
  core.description = 'The single engineering coordinator and shared original skill library for product, architecture, UI/UX, implementation, infrastructure, security and operations.';
  core.displayName = 'Engineering Core';
  core.shortDescription = 'The shared Finem engineering workflow.';
  core.areaPlugins = groups.map(group => ({ plugin: group.name, area: group.area, title: group.title, capabilities: group.capabilities.map(cap => cap.id) }));
  core.legacyPhases = phaseIds.map(phase => ({ plugin: `${prefix}-${phase}`, capabilities: core.capabilities.filter(cap => cap.phase === phase).map(cap => cap.id) }));
  core.technologyOptions = options.map(option => ({
    plugin: option.name, kind: 'pack', extension: option.extension,
    description: option.description, dependencies: option.dependencies,
    conflicts: option.conflicts, exclusiveGroup: option.exclusiveGroup,
    capabilities: option.capabilities,
  }));
  return [core, ...groups];
}

function migrationMap(core) {
  const affected = ids => core.areaPlugins.filter(area => area.capabilities.some(id => ids.includes(id))).map(area => area.plugin);
  return {
    schemaVersion: 2, from: ['technology-plugins', 'phase-plugins'], to: 'engineering-areas', core: core.name,
    extensions: Object.fromEntries(core.technologyOptions.map(option => [option.plugin, {
      extension: option.extension, areas: affected(option.capabilities.map(cap => cap.id)),
    }])),
    legacyPhases: Object.fromEntries(core.legacyPhases.map(phase => [phase.plugin, {
      capabilities: phase.capabilities, areas: affected(phase.capabilities),
    }])),
  };
}

module.exports = { groupByArea, migrationMap };
