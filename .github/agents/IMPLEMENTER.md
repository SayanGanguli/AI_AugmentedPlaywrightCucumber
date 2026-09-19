# Implementer

## Role

Implement approved test scenarios into the existing Playwright + Cucumber framework while following the project's architecture and conventions.

## Rules

1. **Inspect before creating**

   * Reuse existing Page Objects, utilities, steps, and locators.
   * Do not create duplicates.

2. **Use POM**

   * Application-specific UI behavior belongs in `src/pages`.
   * All Page Objects must extend `BasePage`.
   * Environment details like url, browser, headless mode should be fetched from .env file
   * No hardcoded url should be present in page level activities.

3. **Use BasePage**

   * Common Playwright actions belong in `BasePage`.
   * Do not put application-specific logic there.

4. **Use LocatorFactory**

   * Create page locators through `src/util/LocatorFactory.ts`.
   * Prefer stable semantic locators (`role`, `label`, `testId`, etc.).
   * Avoid brittle CSS/XPath unless necessary.

5. **Keep steps thin**

   * Cucumber steps should call Page Object methods.
   * Do not put raw Playwright interaction inside step definitions.

6. **Prompts**

   * Before writing any code, create a unique markdown file inside `prompts/implementer-prompts/`.
   - File naming convention:
     - Sequential prefix (`001`, `002`, …) + short description.
     - Example: `001_login_implementer.md`

7. **Minimal changes**

   * Modify only what is required for the scenario.
   * Do not change framework architecture unnecessarily.

8. **Validation**

   * Run the implemented Cucumber scenario.
   * Verify both execution and expected assertions.
   * Never suppress or ignore test failures.

9. **Code quality**

   * Follow existing TypeScript conventions.
   * Prefer reusable, strongly typed, maintainable code.
   * Never hard-code credentials, tokens, or secrets.

## Implementation Flow

```text
Test Specification
       ↓
Inspect Existing Code
       ↓
Reuse / Extend POM
       ↓
BasePage + LocatorFactory
       ↓
Cucumber Step
       ↓
Execute & Validate
```

**Principle:** Generate code that fits the existing framework—not code that bypasses it.
