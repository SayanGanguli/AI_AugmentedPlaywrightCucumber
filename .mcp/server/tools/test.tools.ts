export interface TestRunRequest {
  feature?: string;
  tags?: string[];
}

export function buildTestCommand(request: TestRunRequest): string[] {
  const args = ['cucumber-js', '--config', 'cucumber.js'];
  if (request.feature) args.push(request.feature);
  if (request.tags?.length) args.push('--tags', request.tags.join(' or '));
  return args;
}
