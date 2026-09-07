import { orchestrate } from '../agents/orchestrator/agent.orchestrator.js';

console.log(orchestrate(process.argv.slice(2).join(' ') || 'Generated test coverage'));
