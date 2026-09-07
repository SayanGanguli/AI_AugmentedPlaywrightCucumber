import { healLocator } from './locator-healer.js';

export function healFailure(selector: string, candidates: string[]): string | undefined {
  return healLocator(selector, candidates);
}
