# Agent Governance

This file is the parent contract for the four agents in `.mcp/agents/`.

## Agents

- `planner`: reads a Markdown requirement and returns a structured implementation plan. It is read-only and must not generate final test code.
- `implementer`: applies an approved plan to framework source and validates the change.
- `generator`: creates Cucumber feature files and Gherkin scenarios from approved test intent.
- `healer`: diagnoses failures, applies the smallest evidence-based fix, and reruns validation.

## Repository architecture

- `requirements/`: Markdown test-plan inputs.
- `features/`: Cucumber feature files.
- `src/`: hooks, step definitions, pages, components, fixtures, APIs, and utilities.
- `config/`: framework and environment configuration.
- `scripts/`: deterministic CLI workflows used by agents.
- `reports/`: Cucumber, Playwright, and AI analysis artifacts.
- `.mcp/agents/`: agent instructions and prompts only.

## Common rules

- Use strict TypeScript and existing project conventions.
- Keep browser mechanics in page objects and utilities; keep steps domain-focused.
- Never commit credentials, tokens, or environment secrets.
- Prefer the smallest change that satisfies the approved requirement.
- Do not weaken assertions or hide failures with arbitrary waits.
- Report assumptions, changed files, validation commands, and unresolved risks.

## File permissions

- Planner: read-only analysis.
- Implementer: may modify `src/`, `config/`, and named support files in an approved plan.
- Generator: may modify `features/` and explicitly named generated test artifacts.
- Healer: may modify only the smallest failing implementation or test surface.
- Protected unless explicitly requested: `package-lock.json`, `LICENSE`, environment secrets, and unrelated files.

## Validation

Run the narrowest relevant check first. TypeScript changes require `npm run typecheck`; test changes require the affected Cucumber feature or tag. Cucumber runs must retain configured screenshot, video, trace, JSON, and HTML diagnostics.
