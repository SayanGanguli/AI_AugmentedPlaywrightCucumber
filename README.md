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

## Commands

- `npm run test:cucumber` runs feature files through Cucumber.
- `npm run test:playwright` runs Playwright tests.
- `npm run typecheck` validates TypeScript without emitting files.
- `npm run mcp` starts the local MCP server over stdio.
- `npm run generate` and `npm run heal` run the agent workflow entry points.

See [docs/architecture.md](docs/architecture.md), [docs/agents.md](docs/agents.md), and [docs/mcp.md](docs/mcp.md) for the framework design.