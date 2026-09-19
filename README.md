# AI-Augmented Playwright Cucumber

An extensible TypeScript automation framework that combines Playwright, Cucumber, AI-assisted workflows, and page object modeling to test web applications end-to-end.

## Overview

This suite is designed for realistic browser automation and behavior-driven testing. It includes:

- Playwright browser automation
- Cucumber BDD scenarios in Gherkin
- Page Object Model (POM) structure for reusable page logic
- Custom Cucumber world to share browser state across steps
- Hooks for browser lifecycle setup and cleanup
- Reporting output for failed and successful test executions
- Environment-based configuration for credentials and application URLs

## Prerequisites

Before running the suite, ensure the following are installed:

- Node.js 18+
- npm
- Playwright browsers

## Quick start

```bash
npm install
npx playwright install
cp .env.example .env
npm run typecheck
npm run test:cucumber
```

> Contributors must copy `.env.example` to `.env` before running tests. The suite expects environment variables such as `BASE_URL`, `USERNAME`, and `PASSWORD` to be defined.

## Environment configuration

The automation suite reads runtime configuration from environment variables. Create a local `.env` file before executing any test scenarios.

Example:

```env
BASE_URL=https://opensource-demo.orangehrmlive.com
USERNAME=Admin
PASSWORD=admin123
```

The page layer uses `BASE_URL` to construct the login URL, and the step definitions consume the same environment values for credential-based test flows.

## Project structure

```text
.
├── AGENTS.md
├── cucumber.js
├── FRAMEWORK.md
├── LICENSE
├── package.json
├── README.md
├── tsconfig.json
├── .env.example
├── features/
│   └── 001_orangehrm-login.feature
├── prompts/
│   ├── generator-prompts/
│   ├── implementer-prompts/
│   ├── planner-prompts/
│   └── reporter-prompts/
├── reports/
│   └── cucumber/
├── screenshots/
├── specs/
├── src/
│   ├── pages/
│   │   ├── BasePage.ts
│   │   └── LoginPage.ts
│   ├── step-def/
│   │   └── 001_orangehrm-login.steps.ts
│   ├── supports/
│   │   ├── custom-world.ts
│   │   └── hooks.ts
│   └── utils/
│       └── LocatorFactory.ts
└── test-plan/
    └── orangehrm-login.md
```

## Automation components

### Features and scenarios

The behavior tests live in the `features/` directory as Gherkin `.feature` files. Each scenario describes user behavior in plain English and maps to reusable step definitions.

### Step definitions

Step logic is stored under `src/step-def/`. This layer defines the Cucumber `Given`, `When`, and `Then` steps used by the feature files and invokes page object methods.

### Page objects

The `src/pages/` directory contains page classes such as `LoginPage.ts` and `BasePage.ts`. These provide encapsulated methods for common interactions such as navigation, typing, clicking, validation, and assertions.

### Support layer

The support layer under `src/supports/` includes:

- `hooks.ts` for browser bootstrapping and teardown
- `custom-world.ts` for shared browser and page state across steps

### Utilities

The utilities folder contains reusable abstractions like `LocatorFactory.ts`, which centralizes locator generation and keeps selectors consistent across tests.

### Reporting

The suite generates HTML and JSON reports under `reports/cucumber/` for execution summaries and failure analysis. Screenshots and artifacts are retained for debugging failed scenarios.

## Commands

```bash
npm run test:cucumber   # run the BDD suite with Cucumber
npm run test:playwright  # run Playwright tests (if present)
npm run typecheck       # validate TypeScript compilation without emitting JS
npm run generate        # agent workflow for generation tasks
npm run heal            # agent workflow to heal or fix failures
```

## Agent workflow

The repository includes a governed AI workflow based on the Planner-Generator-Healer model described in `AGENTS.md`.

The workflow is intended to:

- design test strategies from requirements
- generate Gherkin and step definitions
- implement page objects and test logic
- debug failing executions and patch broken automation flows

## Contribution guidelines

Before contributing or running tests locally:

1. Copy `.env.example` to `.env`
2. Update the values for your environment if needed
3. Ensure Playwright browsers are installed
4. Run the typecheck and the relevant test command

Example:

```bash
cp .env.example .env
npm run typecheck
npm run test:cucumber
```

## Notes

This automation suite is intended to be extensible. New feature files, step definitions, and page objects can be added in a consistent structure without changing the framework conventions.

See the project documentation and agent governance files for deeper workflow and framework details.