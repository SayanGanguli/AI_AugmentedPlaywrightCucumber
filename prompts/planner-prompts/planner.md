# PLANNER AGENT

## Application

URL & Credentials: check .env or .env.example file

## Objective

Explore the application completely using Playwright/MCP and create a comprehensive E2E test plan

## Instructions

* First Create Markdown file under 'prompts/planner-prompts/planner.md' and save the planner prompt as it is provided, then proceeds.

1. Open the application and explore all reachable functionality.
2. Inspect every major menu, page, link, button, form and user workflow.
3. Identify all functional modules and end-to-end business journeys.
4. Cover positive, negative and validation scenarios where applicable.
5. Cover authentication, dashboard, employee management, user management, leave, recruitment, performance, time, reports, search, navigation and other available modules.
6. Do not stop after login or the first discovered workflow.
7. Do not invent functionality. Document anything that cannot be verified.
8. Check `src/test-plan/` before creating plans and avoid duplicates.
9. Create separate Markdown files for each logical functionality/module.

## Test Plan Format

Each file must contain:

* Objective
* Preconditions
* Test Data
* Scenarios
* Steps
* Expected Results
* Coverage/Notes
* Known Limitations

## Completion Rule

Before finishing, verify that all meaningful reachable functionality has been explored and every discovered functionality is represented in `src/test-plan/`.

Create the actual Markdown files in the repository. Do not provide the plans only in chat.