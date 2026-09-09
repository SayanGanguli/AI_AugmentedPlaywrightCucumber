import { diagnoseFailure } from './agent-workflows.js';

const [previous, ...candidates] = process.argv.slice(2);
console.log(JSON.stringify(diagnoseFailure([previous ?? '', ...candidates].join(' ')), null, 2));
