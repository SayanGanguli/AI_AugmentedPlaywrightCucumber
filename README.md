# AI-Augmented Playwright Cucumber

An extensible TypeScript test automation framework combining Playwright, Cucumber, MCP tools, and AI agent workflows.

## Quick start

```bash
npm install
npx playwright install
npm run typecheck
npm run test:cucumber
```

Set `BASE_URL` in `.env` or use the environment files under `config/environments/`.

## Agent workflow

Agent governance lives in the root `AGENTS.md`; prompts live under `.mcp/agents/`. The Planner reads Markdown test plans from `requirements/` and writes structured output to `plan-output/`:

```bash
npm run plan -- requirements/orangehrm-login.md
```

The four governed agents are Planner, Implementer, Generator, and Healer. Their responsibilities and file permissions are defined by `AGENTS.md` and each agent's local `AGENTS.md`.

Failed Cucumber scenarios retain a screenshot, video, and Playwright trace under `reports/cucumber/`. Every run also produces `reports/cucumber/index.html` and `reports/cucumber/cucumber.json`.

## Commands

- `npm run test:cucumber` runs feature files through Cucumber.
- `npm run test:playwright` runs Playwright tests.
- `npm run typecheck` validates TypeScript without emitting files.
- `npm run generate` and `npm run heal` run the agent workflow entry points.

See [docs/architecture.md](docs/architecture.md), [docs/agents.md](docs/agents.md), and [docs/mcp.md](docs/mcp.md) for the framework design.