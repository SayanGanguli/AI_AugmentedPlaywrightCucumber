import { createPlan, generateFeature } from './agent-workflows.js';

const requirement = process.argv.slice(2).join(' ') || 'Generated test coverage';
console.log(generateFeature(createPlan(requirement)));
