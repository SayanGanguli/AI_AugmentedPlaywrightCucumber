export function healLocator(previous: string, candidates: string[]): string | undefined {
  return candidates.find((candidate) => candidate !== previous);
}
