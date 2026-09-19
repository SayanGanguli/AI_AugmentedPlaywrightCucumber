# AI-Augmented Playwright + Cucumber
# Framework Commands & Dependency Reference

> Draft version
>
> This document is a practical command reference for setting up,
> developing, validating, debugging, and maintaining the framework.

---

# 1. Technology Stack

This framework uses:

- Node.js
- npm
- TypeScript
- Playwright
- Cucumber
- Playwright MCP
- GitHub Copilot Custom Agents
- ESLint
- Prettier
- dotenv
- Cucumber HTML reporting

Architecture:

    GitHub Copilot
          |
          v
    Custom Agents
          |
          v
    Playwright MCP
          |
          v
       Browser
          |
          v
      Cucumber
          |
          v
    Step Definitions
          |
          v
     Page Objects
          |
          v
      Playwright

---

# 2. Prerequisites

Check Node.js:

    node --version

Check npm:

    npm --version

Check Git:

    git --version

Recommended:

- Node.js LTS
- npm
- Git
- VS Code
- GitHub Copilot
- GitHub Copilot Chat/Agents support

---

# 3. Initialize a New Project

Create a directory:

    mkdir AI_AugmentedPlaywrightCucumber

Move into it:

    cd AI_AugmentedPlaywrightCucumber

Initialize npm:

    npm init -y

---

# 4. Core Dependencies

## 4.1 Cucumber

Install Cucumber:

    npm install -D @cucumber/cucumber

Purpose:

- Gherkin feature files
- BDD scenarios
- Step definitions
- Hooks
- Cucumber execution

---

## 4.2 Playwright

Install Playwright:

    npm install -D playwright

Purpose:

- Browser automation
- Chromium
- Firefox
- WebKit
- Page interaction
- Locators
- Screenshots
- Tracing

Install browsers:

    npx playwright install

Install Chromium only:

    npx playwright install chromium

Install Firefox only:

    npx playwright install firefox

Install WebKit only:

    npx playwright install webkit

Install all browser dependencies on Linux:

    npx playwright install --with-deps

---

# 5. TypeScript Dependencies

Install TypeScript:

    npm install -D typescript

Install Node.js type definitions:

    npm install -D @types/node

TypeScript execution:

    npm install -D ts-node

Alternative TS runtime:

    npm install -D tsx

Recommended:

    npm install -D typescript @types/node tsx

---

# 6. Environment Variables

Install dotenv:

    npm install dotenv

Example:

    .env

Example contents:

    BASE_URL=https://example.com
    USERNAME=test-user
    PASSWORD=test-password

IMPORTANT:

Never commit real credentials.

Add:

    .env

to:

    .gitignore

---

# 7. Reporting Dependencies

## Cucumber HTML Reporter

    npm install -D cucumber-html-reporter

## Multiple Cucumber HTML Reporter

    npm install -D multiple-cucumber-html-reporter

These can be used to generate execution reports.

---

# 8. Code Quality Dependencies

## ESLint

    npm install -D eslint

## TypeScript ESLint

    npm install -D typescript-eslint

## Prettier

    npm install -D prettier

## ESLint/Prettier compatibility

    npm install -D eslint-config-prettier

## Cross-platform environment variables

    npm install -D cross-env

Recommended command:

    npm install -D eslint typescript-eslint prettier eslint-config-prettier cross-env

---

# 9. Complete Dependency Installation

For a fresh project, the complete installation can be done using:

    npm install dotenv

and:

    npm install -D \
      @cucumber/cucumber \
      @types/node \
      cross-env \
      cucumber-html-reporter \
      eslint \
      eslint-config-prettier \
      multiple-cucumber-html-reporter \
      playwright \
      prettier \
      ts-node \
      tsx \
      typescript \
      typescript-eslint

On Windows PowerShell, use:

    npm install -D @cucumber/cucumber @types/node cross-env cucumber-html-reporter eslint eslint-config-prettier multiple-cucumber-html-reporter playwright prettier ts-node tsx typescript typescript-eslint

---

# 10. Playwright MCP

Playwright MCP provides browser interaction capabilities for AI agents.

Do not import MCP into Cucumber step definitions.

Conceptually:

    GitHub Copilot
          |
          v
    Playwright MCP
          |
          v
       Browser

Initialize Playwright agent configuration:

    npx playwright init-agents --loop=vscode

After running this command, inspect the generated files.

Expected area:

    .github/
        agents/

and:

    .vscode/
        mcp.json

Do not blindly overwrite existing custom agent instructions.

Review generated files before committing them.

---

# 11. TypeScript Configuration

Create:

    tsconfig.json

Example validation command:

    npx tsc --noEmit

This performs TypeScript checking without generating JavaScript files.

This is one of the most important commands in the framework.

---

# 12. TypeScript Commands

Compile TypeScript:

    npx tsc

Type-check only:

    npx tsc --noEmit

Watch mode:

    npx tsc --watch

Type-check the complete project:

    npx tsc --noEmit

Recommended CI command:

    npx tsc --noEmit

---

# 13. Cucumber Commands

Run all Cucumber tests:

    npx cucumber-js

Run a specific feature:

    npx cucumber-js features/login.feature

Run using a configuration file:

    npx cucumber-js --config cucumber.js

Run specific tags:

    npx cucumber-js --tags "@smoke"

Run multiple tags:

    npx cucumber-js --tags "@smoke and @login"

Run scenarios matching a tag:

    npx cucumber-js --tags "@regression"

Run a specific scenario by name:

    npx cucumber-js --name "Successful login"

List available Cucumber options:

    npx cucumber-js --help

---

# 14. Cucumber Debugging

Enable verbose Playwright API logging:

    cross-env DEBUG=pw:api cucumber-js

Run with Node inspector:

    node --inspect-brk ./node_modules/@cucumber/cucumber/bin/cucumber-js

---

# 15. Playwright Commands

Check Playwright version:

    npx playwright --version

Install browsers:

    npx playwright install

Show Playwright help:

    npx playwright --help

Open Playwright code generator:

    npx playwright codegen https://example.com

Open Chromium:

    npx playwright codegen --browser chromium https://example.com

---

# 16. Playwright Browser Debugging

Useful environment variable:

    DEBUG=pw:api

Example:

    cross-env DEBUG=pw:api cucumber-js

This can show Playwright API activity during execution.

---

# 17. Screenshots

Screenshots should normally be handled from Cucumber hooks.

Example concept:

    After(async function (scenario) {
        if (scenario.result?.status !== "PASSED") {
            // capture screenshot
        }
    });

Recommended behavior:

    PASSED
       |
       +--> optional screenshot

    FAILED
       |
       +--> screenshot
       +--> error
       +--> trace
       +--> report

---

# 18. Playwright Tracing

Tracing is useful for debugging failures.

Typical workflow:

    start tracing
         |
         v
       test
         |
         v
    stop tracing
         |
         v
    trace.zip

Open a trace:

    npx playwright show-trace trace.zip

---

# 19. ESLint Commands

Run ESLint:

    npx eslint .

Check TypeScript files:

    npx eslint "**/*.{ts,tsx}"

Automatically fix where possible:

    npx eslint . --fix

Recommended CI command:

    npx eslint .

---

# 20. Prettier Commands

Check formatting:

    npx prettier --check .

Format the project:

    npx prettier --write .

Format TypeScript:

    npx prettier --write "**/*.{ts,tsx}"

Format Markdown:

    npx prettier --write "**/*.md"

Recommended CI command:

    npx prettier --check .

---

# 21. npm Dependency Commands

Install dependencies:

    npm install

Clean install:

    npm ci

Check outdated dependencies:

    npm outdated

Check security vulnerabilities:

    npm audit

Attempt automatic audit fixes:

    npm audit fix

Remove unnecessary packages:

    npm prune

Deduplicate dependencies:

    npm dedupe

Show installed dependency tree:

    npm ls

Show top-level dependencies:

    npm ls --depth=0

---

# 22. package-lock.json

Always commit:

    package-lock.json

For CI/CD use:

    npm ci

instead of:

    npm install

This provides a reproducible dependency installation based on the lock file.

---

# 23. Recommended package.json Scripts

Recommended starting point:

    "scripts": {
      "test": "cucumber-js",
      "test:smoke": "cucumber-js --tags \"@smoke\"",
      "test:regression": "cucumber-js --tags \"@regression\"",
      "test:headed": "cross-env HEADLESS=false cucumber-js",
      "test:debug": "cross-env DEBUG=pw:api cucumber-js",
      "typecheck": "tsc --noEmit",
      "lint": "eslint .",
      "lint:fix": "eslint . --fix",
      "format": "prettier --write .",
      "format:check": "prettier --check .",
      "validate": "npm run typecheck && npm run lint && npm run format:check",
      "report": "multiple-cucumber-html-reporter"
    }

---

# 24. One Command for Framework Validation

Before committing code:

    npm run validate

The validation pipeline should perform:

    TypeScript
        |
        v
    tsc --noEmit
        |
        v
    ESLint
        |
        v
    Prettier
        |
        v
      PASS

---

# 25. Recommended Pre-Commit Validation

Run:

    npm run typecheck

then:

    npm run lint

then:

    npm run format:check

then:

    npm test

Or simply:

    npm run validate && npm test

---

# 26. Git Commands

Check repository status:

    git status

Create a branch:

    git checkout -b feature/login-tests

Stage changes:

    git add .

Commit:

    git commit -m "Add login automation"

Push:

    git push

Show commit history:

    git log --oneline

Show differences:

    git diff

---

# 27. Recommended Project Structure

    AI_AugmentedPlaywrightCucumber/
    |
    +-- .github/
    |   |
    |   +-- agents/
    |   |   +-- planner.agent.md
    |   |   +-- implementer.agent.md
    |   |   +-- generator.agent.md
    |   |   +-- healer.agent.md
    |   |
    |   +-- copilot-instructions.md
    |
    +-- .vscode/
    |   +-- mcp.json
    |
    +-- features/
    |   +-- login.feature
    |
    +-- steps/
    |   +-- login.steps.ts
    |
    +-- pages/
    |   +-- LoginPage.ts
    |
    +-- support/
    |   +-- hooks.ts
    |   +-- world.ts
    |
    +-- fixtures/
    |
    +-- specs/
    |   +-- login-test-plan.md
    |
    +-- reports/
    |
    +-- screenshots/
    |
    +-- traces/
    |
    +-- cucumber.js
    +-- tsconfig.json
    +-- package.json
    +-- package-lock.json
    +-- .env
    +-- .gitignore
    +-- README.md

---

# 28. Four-Agent Workflow

The framework contains four primary agents.

## Planner

Responsible for:

- Understanding requirements
- Exploring the application
- Using Playwright MCP
- Creating test plans
- Identifying scenarios

Output:

    specs/<feature>-test-plan.md

Should NOT:

- Write step definitions
- Modify Page Objects
- Modify production application code

---

## Implementer

Responsible for:

- Reading the Planner output
- Creating Gherkin features
- Creating step definitions
- Creating Page Objects
- Following framework conventions

Output:

    features/
    steps/
    pages/

---

## Generator

Responsible for:

- Browser-grounded implementation
- Finding actual UI elements
- Validating selectors
- Verifying navigation
- Verifying assertions
- Using Playwright MCP

The Generator should not invent selectors when the browser can be inspected.

---

## Healer

Responsible for:

- Investigating failures
- Inspecting screenshots
- Inspecting traces
- Inspecting error messages
- Inspecting current application state
- Repairing legitimate automation issues
- Re-running tests

The Healer must NOT simply change assertions to make a test pass.

---

# 29. Agent Workflow

    Requirement
         |
         v
      PLANNER
         |
         v
    Test Plan
         |
         v
    IMPLEMENTER
         |
         v
    Feature + Steps + POM
         |
         v
     GENERATOR
         |
         v
    Browser Validation
         |
         v
      Cucumber
         |
       +---+
       |
    PASS -----------------> DONE
       |
      FAIL
       |
       v
     HEALER
       |
       v
    Repair
       |
       v
    Re-run
       |
       +----> PASS
       |
       +----> FAIL / Escalate

---

# 30. Important Framework Rules

## Rule 1

Do not use arbitrary waits:

    page.waitForTimeout(...)

Prefer:

    page.getByRole(...)
    page.getByText(...)
    page.getByLabel(...)
    page.locator(...)

combined with Playwright's built-in waiting behavior.

---

## Rule 2

Do not put selectors in feature files.

Bad:

    When I click "#login-button"

Good:

    When I click the Login button

The Page Object should own the locator.

---

## Rule 3

Do not store credentials in source code.

Use:

    .env

and environment variables.

---

## Rule 4

Do not commit:

    .env
    screenshots/
    traces/
    generated reports

unless explicitly required.

---

## Rule 5

Do not allow the Healer to hide real application defects.

A failed assertion may indicate a real product defect.

---

# 31. Useful Daily Commands

Install/update dependencies:

    npm install

Type-check:

    npm run typecheck

Lint:

    npm run lint

Format:

    npm run format

Run smoke tests:

    npm run test:smoke

Run regression:

    npm run test:regression

Run everything:

    npm test

Validate code:

    npm run validate

---

# 32. Useful CI Pipeline

Recommended CI sequence:

    npm ci

    npx playwright install --with-deps

    npm run typecheck

    npm run lint

    npm run format:check

    npm test

    npm run report

Pipeline:

    Install
       |
       v
    Browser Setup
       |
       v
    Type Check
       |
       v
    Lint
       |
       v
    Format Check
       |
       v
    Cucumber
       |
       v
    Reports
       |
       v
    Artifacts

---

# 33. Troubleshooting

## TypeScript errors

Run:

    npx tsc --noEmit

---

## Cucumber step undefined

Run:

    npx cucumber-js

Check:

- Step definition path
- `cucumber.js`
- TypeScript loader
- Step wording
- Feature file

---

## Browser not installed

Run:

    npx playwright install

---

## Playwright debugging

Run:

    cross-env DEBUG=pw:api cucumber-js

---

## Dependency problems

Try:

    npm ci

If necessary:

    rm -rf node_modules package-lock.json

Then:

    npm install

On Windows PowerShell:

    Remove-Item -Recurse -Force node_modules
    Remove-Item package-lock.json

Then:

    npm install

---

# 34. Dependency Update Workflow

Before updating dependencies:

    git status

Check outdated packages:

    npm outdated

Update a specific package:

    npm install -D playwright@latest

Check:

    npm ls playwright

Run:

    npx playwright install

Then validate:

    npm run validate

Then:

    npm test

---

# 35. Framework Health Check

Run the following commands:

    node --version

    npm --version

    npx playwright --version

    npx tsc --noEmit

    npx eslint .

    npx prettier --check .

    npm test

If all required commands pass, the framework is in a healthy baseline state.

---

# 36. Quick Reference

| Purpose | Command |
|---|---|
| Install dependencies | `npm install` |
| Clean install | `npm ci` |
| Install Playwright browsers | `npx playwright install` |
| Type-check | `npx tsc --noEmit` |
| Compile TypeScript | `npx tsc` |
| Run Cucumber | `npx cucumber-js` |
| Run smoke tests | `npm run test:smoke` |
| Run ESLint | `npx eslint .` |
| Fix ESLint | `npx eslint . --fix` |
| Check formatting | `npx prettier --check .` |
| Format code | `npx prettier --write .` |
| Playwright version | `npx playwright --version` |
| Playwright API debug | `DEBUG=pw:api` |
| Show trace | `npx playwright show-trace trace.zip` |
| Outdated packages | `npm outdated` |
| Security audit | `npm audit` |
| Dependency tree | `npm ls` |
| Validate framework | `npm run validate` |
| Initialize agents | `npx playwright init-agents --loop=vscode` |

---

# 37. Current Recommended Installation

For this project, the initial setup should be:

    npm install dotenv

    npm install -D @cucumber/cucumber \
      @types/node \
      cross-env \
      cucumber-html-reporter \
      eslint \
      eslint-config-prettier \
      multiple-cucumber-html-reporter \
      playwright \
      prettier \
      ts-node \
      tsx \
      typescript \
      typescript-eslint

Then:

    npx playwright install

Then:

    npx playwright init-agents --loop=vscode

Then validate:

    npx tsc --noEmit

    npx eslint .

    npx prettier --check .

    npx cucumber-js

---

# 38. Important Note

This document is a working draft.

Before freezing the framework:

1. Confirm Node.js version.
2. Confirm Playwright version.
3. Confirm Cucumber configuration.
4. Confirm TypeScript module configuration.
5. Confirm Playwright MCP configuration.
6. Confirm GitHub Copilot agent configuration.
7. Confirm Cucumber/Playwright browser lifecycle.
8. Confirm reporting strategy.
9. Confirm CI environment.
10. Confirm supported browsers.

The framework should be validated with one complete end-to-end scenario before adding large numbers of AI-generated tests.

---

# End
