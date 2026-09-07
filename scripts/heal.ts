import { healFailure } from '../agents/self-healing/healer.agent.js';

const [previous, ...candidates] = process.argv.slice(2);
console.log(healFailure(previous ?? '', candidates) ?? 'No replacement locator found');
