export interface TestScenario {
  id: string;
  title: string;
  steps: string[];
  expectedResults: string[];
}

export interface TestPlan {
  objective: string;
  application?: string;
  preconditions: string[];
  scenarios: TestScenario[];
  testData: string[];
  outOfScope: string[];
  filesToModify: string[];
  implementationSteps: string[];
  validationCommands: string[];
  risks: string[];
}

function section(markdown: string, heading: string): string {
  const lines = markdown.split(/\r?\n/);
  const start = lines.findIndex((line) => new RegExp(`^##\\s+${heading}\\s*$`, 'i').test(line.trim()));
  if (start < 0) return '';
  const end = lines.slice(start + 1).findIndex((line) => /^##\s+/.test(line.trim()));
  return lines.slice(start + 1, end < 0 ? undefined : start + 1 + end).join('\n').trim();
}

function bullets(value: string): string[] {
  return value.split(/\r?\n/).map((line) => line.replace(/^\s*[-*]\s+/, '').trim()).filter(Boolean);
}

function scenarios(markdown: string): TestScenario[] {
  const lines = markdown.split(/\r?\n/);
  const result: TestScenario[] = [];
  for (let index = 0; index < lines.length; index += 1) {
    const heading = lines[index].match(/^###\s+([^:\r\n]+):?\s*(.*?)\s*$/);
    if (!heading) continue;
    const body: string[] = [];
    for (let bodyIndex = index + 1; bodyIndex < lines.length && !/^###\s+|^##\s+/.test(lines[bodyIndex]); bodyIndex += 1) body.push(lines[bodyIndex]);
    const expectedMarker = body.findIndex((line) => /^Expected Result:\s*$/i.test(line.trim()));
    const steps = body.slice(0, expectedMarker < 0 ? undefined : expectedMarker).filter((line) => /^\d+\.\s+/.test(line.trim())).map((line) => line.replace(/^\d+\.\s+/, '').trim());
    result.push({ id: heading[1].trim(), title: heading[2].trim() || heading[1].trim(), steps, expectedResults: bullets(body.slice(expectedMarker + 1).join('\n')) });
    index += body.length;
  }
  return result;
}

export function createPlan(requirement: string): TestPlan {
  return {
    objective: section(requirement, 'Objective') || requirement.split(/\r?\n/)[0].replace(/^#\s*/, '').trim(),
    application: section(requirement, 'Application') || undefined,
    preconditions: bullets(section(requirement, 'Preconditions')),
    scenarios: scenarios(requirement),
    testData: bullets(section(requirement, 'Test Data')),
    outOfScope: bullets(section(requirement, 'Out of Scope')),
    filesToModify: ['features/', 'src/step-definitions/', 'src/pages/'],
    implementationSteps: ['Review existing pages, hooks, and step definitions.', 'Implement or extend the smallest owning test surfaces.', 'Generate or update the feature file using the approved scenarios.', 'Run the affected feature and TypeScript validation.'],
    validationCommands: ['npm run typecheck', 'npm run test:cucumber'],
    risks: ['Environment availability and credentials must be supplied outside source control.', 'Generated steps must match existing step definitions or be implemented before execution.']
  };
}

export function generateFeature(plan: TestPlan): string {
  const scenarios = plan.scenarios.map((scenario) => {
    const steps = scenario.steps.map((step, index) => `${index === 0 ? 'Given' : index === scenario.steps.length - 1 ? 'Then' : 'When'} ${step}`).join('\n');
    return `\n  @${scenario.id.toLowerCase()}\n  Scenario: ${scenario.title}\n${steps}`;
  }).join('\n');
  return `Feature: ${plan.objective}\n${scenarios}\n`;
}

export function diagnoseFailure(error: string): { category: string; evidence: string; recommendation: string } {
  const value = error.toLowerCase();
  if (/locator|selector|strict mode|element.*not found/.test(value)) return { category: 'locator', evidence: error, recommendation: 'Inspect the failing locator and current DOM evidence; update the owning page object.' };
  if (/timeout|timed out|waiting/.test(value)) return { category: 'timing', evidence: error, recommendation: 'Verify reachability and wait on a meaningful state, not an arbitrary delay.' };
  if (/assert|expected|received/.test(value)) return { category: 'assertion', evidence: error, recommendation: 'Check the expected behavior and assertion target before changing the test.' };
  if (/connection|econn|net::|baseurl|unavailable/.test(value)) return { category: 'environment', evidence: error, recommendation: 'Verify BASE_URL, service availability, and environment configuration.' };
  if (/credential|password|data/.test(value)) return { category: 'data', evidence: error, recommendation: 'Verify test data and secret injection without committing credentials.' };
  return { category: 'unknown', evidence: error, recommendation: 'Inspect the full failure artifacts before applying a change.' };
}
