import { readFile } from 'node:fs/promises';

export async function readTextFile(path: string): Promise<string> {
  return readFile(path, 'utf8');
}
