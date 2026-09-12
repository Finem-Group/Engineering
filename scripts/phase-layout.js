'use strict';

// Lifecycle containers are derived from capability ownership, not a second router.
function groupByPhase(core, options, phases) {
  const phaseIds = phases ?? [...new Set(core.capabilities.map(cap => cap.phase))];
  if (new Set(phaseIds).size !== phaseIds.length || phaseIds.some(id => !/^[a-z][a-z0-9-]*$/.test(id) || id === 'core')) {
    throw new Error('Invalid or duplicate lifecycle phase');
  }
  for (const cap of core.capabilities) {
    if (!phaseIds.includes(cap.phase)) throw new Error(`Unknown phase ${cap.phase} for ${cap.id}`);
  }
  const prefix = core.name.replace(/-core$/, '');
  const groups = phaseIds.map(phase => {
    const capabilities = core.capabilities.filter(cap => cap.phase === phase);
    if (!capabilities.length) throw new Error(`Empty lifecycle phase: ${phase}`);
    const relevant = options.filter(option => option.capabilities.some(cap => cap.phase === phase));
    return {
      name: `${prefix}-${phase}`, kind: 'phase', phase,
      displayName: `Finem ${phase[0].toUpperCase()}${phase.slice(1)}`,
      description: `Engineering phase ${phase}: ${capabilities.map(cap => cap.title.toLowerCase()).join(', ')}. Uses the shared original skill library in ${core.name}.`,
      shortDescription: `Engineering ${phase} phase; original specialists through the shared core.`,
      dependencies: [core.name], capabilities,
      options: relevant.map(option => option.extension),
      sources: [], skillCount: 0,
    };
  });
  core.layout = 'phases';
  core.description = 'The single engineering coordinator and shared original skill library for every lifecycle phase.';
  core.shortDescription = 'One engineering workflow and shared original library for all phases.';
  core.phasePlugins = groups.map(group => ({ plugin: group.name, phase: group.phase, capabilities: group.capabilities.map(cap => cap.id) }));
  core.technologyOptions = options.map(option => ({
    plugin: option.name, kind: 'pack', extension: option.extension,
    description: option.description, dependencies: option.dependencies,
    conflicts: option.conflicts, exclusiveGroup: option.exclusiveGroup,
    capabilities: option.capabilities,
  }));
  return [core, ...groups];
}

function migrationMap(core) {
  return {
    schemaVersion: 1,
    from: 'technology-plugins', to: 'phase-plugins', core: core.name,
    extensions: Object.fromEntries(core.technologyOptions.map(option => [option.plugin, {
      extension: option.extension,
      phases: core.phasePlugins.filter(phase => option.capabilities.some(cap => cap.phase === phase.phase)).map(phase => phase.plugin),
    }])),
  };
}

module.exports = { groupByPhase, migrationMap };
