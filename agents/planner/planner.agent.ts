export interface TestPlan {
  objective: string;
  scenarios: string[];
}

export function createPlan(objective: string): TestPlan {
  return { objective, scenarios: [] };
}
