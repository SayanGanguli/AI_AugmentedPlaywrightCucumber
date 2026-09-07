import type { TestPlan } from '../planner/planner.agent.js';

export function generateFeature(plan: TestPlan): string {
  return `Feature: ${plan.objective}\n`;
}
