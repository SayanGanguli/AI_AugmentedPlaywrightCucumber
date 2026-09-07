import { createPlan } from '../planner/planner.agent.js';
import { generateFeature } from '../generator/generator.agent.js';

export function orchestrate(objective: string): string {
  return generateFeature(createPlan(objective));
}
