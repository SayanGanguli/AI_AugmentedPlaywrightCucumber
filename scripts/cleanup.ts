import { rm } from 'node:fs/promises';

async function cleanup(): Promise<void> {
	await Promise.all(['reports/cucumber/cucumber.json', 'test-results'].map((path) => rm(path, { force: true, recursive: true })));
	console.log('Test artifacts cleaned.');
}

void cleanup();
