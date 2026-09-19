# Implementer Prompt: OrangeHRM Login POM

Implement the approved OrangeHRM login scenarios using the existing Playwright + Cucumber framework.

- Keep shared Playwright actions in `src/pages/basePage.ts`.
- Implement `src/pages/loginPage.ts` as a `BasePage` subclass.
- Define login locators through `src/util/LocatorFactory.ts`.
- Keep step definitions thin and delegate page behavior to `LoginPage`.
- Preserve existing feature wording and avoid hard-coded secrets beyond the scenario data already specified.
- Validate with TypeScript and the login Cucumber scenarios.
