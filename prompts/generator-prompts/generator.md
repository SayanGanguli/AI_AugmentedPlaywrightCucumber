# GENERATOR AGENT

## Prompt File
First create this file and save this Generator prompt exactly as provided:

```
prompts/generator-prompts/generator.md
```
After saving the prompt, proceed with the generation task.

## Objective
Read and interpret Planner test plans from:

```
src/test-plan/
```
Convert them into valid Cucumber Gherkin feature files and matching TypeScript Playwright step definitions.

## Instructions

1. Read all relevant Planner test-plan files.
2. Convert every planned scenario into a corresponding Gherkin scenario.
3. Do not skip, invent, or silently modify planned functionality.
4. Create feature files using the project's existing feature directory.
5. For **each feature file, create exactly one corresponding step-definition file**.
6. Never combine step definitions from multiple feature files into one feature-specific step-definition file.
7. Example:

```
login.feature
login.steps.ts

registration.feature
registration.steps.ts

dashboard.feature
dashboard.steps.ts
```

1. Use clear `Given`, `When`, `Then`, `And`, and `But` steps.
2. Put genuinely common preconditions/actions in `Background` when they apply to all scenarios within the same feature.
3. Do not create unnecessary Background sections.
4. Add proper Cucumber tags at Feature and/or Scenario level.
5. Use meaningful tags for module, scenario type and priority where applicable.
6. Follow existing project tag conventions if available.
7. No first-person wording is allowed in feature files.
8. Replace first-person wording such as `I`, `we`, `my`, or `our` with `user`, `customer`, `employee`, `admin`, or another appropriate actor.
9. Feature files must describe business behavior, not implementation details.
10. Reuse existing Page Objects, fixtures and utilities where applicable.
11. Use Playwright selectors inside the corresponding TypeScript step-definition file.
12. Avoid duplicate step definitions within the same feature.
13. Avoid unnecessary hard waits.
14. Follow the project's existing TypeScript and Cucumber conventions.
15. Persist all generated artifacts in their designated repository directories.

## Feature Structure
Use this pattern:

```
@module @feature
Feature: Login

  Background:
    Given the user is on the login page

  @positive @smoke @high
  Scenario: Login with valid credentials
    When the user enters valid credentials
    And the user clicks the login button
    Then the user should be successfully logged in

  @negative @high
  Scenario: Login with invalid credentials
    When the user enters invalid credentials
    And the user clicks the login button
    Then an invalid credentials message should be displayed
```

## Step Definition Structure
Each feature must have its own step-definition file.

Example:

```
features/
├── login.feature
├── registration.feature
└── dashboard.feature

step-definitions/
├── login.steps.ts
├── registration.steps.ts
└── dashboard.steps.ts
```
`login.steps.ts` must contain the steps required by `login.feature`.

`registration.steps.ts` must contain the steps required by `registration.feature`.

`dashboard.steps.ts` must contain the steps required by `dashboard.feature`.

Do not create a single `common.steps.ts` containing steps from all features.

## Background Rule
Use `Background` only for steps that are genuinely common to every scenario within the same feature.

Do not move scenario-specific actions into Background.

## Tagging Rules
Every feature/scenario must have meaningful tags.

Examples:

```
@orangehrm @login
Feature: Login

  @smoke @positive @high
  Scenario: Login with valid credentials
```
Use existing project conventions when available.

Do not add random or meaningless tags.

## Language Rules
Feature files must use neutral third-person/business language.

Incorrect:

```
When I enter the username
And I click Login
Then I should see the dashboard
```
Correct:

```
When the user enters the username
And the user clicks Login
Then the user should see the dashboard
```
Do not use first-person wording anywhere in generated `.feature` files.

## Traceability
Maintain this relationship:

```
Planner Test Plan
      ↓
Feature File
      ↓
Feature-specific Step Definition
```
Example:

```
src/test-plan/login.md
        ↓
src/features/login.feature
        ↓
src/step-definitions/login.steps.ts
```

## Validation
Before completing the task, verify:

- Every relevant test plan was processed.
- Every planned scenario has a corresponding Gherkin scenario.
- Every feature has appropriate tags.
- No first-person wording exists in feature files.
- Background is used only for genuinely common feature steps.
- Every feature has exactly one corresponding step-definition file.
- Step definitions are not mixed between unrelated features.
- Every Gherkin step has a matching TypeScript implementation.
- No duplicate step definitions were introduced.
- Existing framework conventions are followed.
- All generated files are saved to the repository.
Do not provide generated artifacts only in chat. Create the actual files in the repository.