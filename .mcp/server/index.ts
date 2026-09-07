import { createInterface } from 'node:readline';

const input = createInterface({ input: process.stdin });

async function startServer(): Promise<void> {
  for await (const line of input) {
    try {
      const request = JSON.parse(line);
      process.stdout.write(`${JSON.stringify({ jsonrpc: '2.0', id: request.id ?? null, result: { status: 'ready' } })}\n`);
    } catch {
      process.stdout.write(`${JSON.stringify({ jsonrpc: '2.0', id: null, error: { code: -32700, message: 'Invalid JSON' } })}\n`);
    }
  }
}

void startServer();
