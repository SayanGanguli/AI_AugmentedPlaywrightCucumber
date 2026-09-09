# Agents

The governed agent hierarchy is defined by `AGENTS.md` and implemented as prompt assets under `.mcp/agents/`:

- root `AGENTS.md`: parent contract for architecture, permissions, conventions, and validation.
- `planner/`: reads a Markdown requirement and produces a structured plan without editing files.
- `implementer/`: applies an approved plan to framework code and validates it.
- `generator/`: creates Cucumber features and reports missing step dependencies.
- `healer/`: diagnoses failures by category and applies evidence-based recovery.

Use `npm run plan -- requirements/<name>.md` to create `plan-output/<name>.json`.
