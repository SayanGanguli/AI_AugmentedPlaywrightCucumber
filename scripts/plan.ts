import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { basename, dirname, resolve } from 'node:path';
import { createPlan } from './agent-workflows.js';

async function main(): Promise<void> {
  const input = process.argv[2];
  if (!input) throw new Error('Usage: npm run plan -- requirements/<test-plan>.md');

  const inputPath = resolve(input);
  const requirement = await readFile(inputPath, 'utf8');
  const plan = createPlan(requirement);
  const outputPath = resolve('plan-output', `${basename(inputPath, '.md')}.json`);

  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, `${JSON.stringify(plan, null, 2)}\n`, 'utf8');
  console.log(`Plan written to ${outputPath}`);
}

void main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
