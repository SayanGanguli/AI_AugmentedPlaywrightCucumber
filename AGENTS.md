# AI Augmented Playwright Cucumber

## Project Purpose

This repository contains an AI-augmented end-to-end automation framework using:

* Playwright
* TypeScript
* Cucumber
* MCP
* GitHub Copilot
* Jenkins

The framework uses specialized AI agents to support the complete automation lifecycle.

---

# Agent Architecture

```text
                 ┌─────────────┐
                 │   PLANNER   │
                 └──────┬──────┘
                        ↓
                 ┌─────────────┐
                 │  GENERATOR  │
                 └──────┬──────┘
                        ↓
                 ┌─────────────┐
                 │ IMPLEMENTER │
                 └──────┬──────┘
                        ↓
                 ┌─────────────┐
                 │   HEALER    │
                 └──────┬──────┘
                        ↓
                 ┌─────────────┐
                 │   REPORTER  │
                 └─────────────┘
```

---

# Repository Rules

## Test Planning

All generated test plans must be stored under:

```text
src/test-plan/
```

Plans must be organized by logical application capability.

Example:

```text
src/test-plan/login.md
src/test-plan/registration.md
src/test-plan/dashboard.md
```

Do not create one monolithic test-plan file.

---

# Planner Rules

The Planner must:

* Explore the supplied application using available browser/MCP capabilities.
* Inspect the complete reachable application flow.
* Identify all meaningful application capabilities.
* Identify positive, negative and validation scenarios.
* Identify cross-module workflows.
* Review existing test plans.
* Avoid duplicate scenarios.
* Avoid invented functionality.
* Document exploration limitations.
* Ensure every discovered capability has corresponding test coverage.

Detailed Planner instructions are located at:

```text
prompts/planner-prompts/planner.md
```

Agent definition:

```text
agents/PLANNER.md
```

---

# Generator Rules

The GENERATOR converts approved test plans into Cucumber feature/scenario definitions.

The Generator must:

* Read the relevant test plan.
* Preserve the intended scenario behavior.
* Follow the project's Cucumber conventions.
* Avoid inventing scenarios.
* Avoid duplicating existing scenarios.
* Use appropriate tags.
* Keep feature files readable and business-oriented.

---

# Implementer Rules

The IMPLEMENTER converts generated Cucumber scenarios into executable Playwright + TypeScript automation.

The Implementer must:

* Follow existing project architecture.
* Reuse Page Objects.
* Reuse fixtures/utilities.
* Prefer accessible and stable locators.
* Avoid unnecessary hard waits.
* Follow TypeScript strictness.
* Avoid duplicating framework functionality.
* Keep implementation maintainable.

---

# Healer Rules

The HEALER investigates failed automation.

The Healer must:

1. Identify the failure.
2. Determine the root cause.
3. Inspect the current application behavior.
4. Verify whether the issue is caused by:

   * Locator
   * Timing
   * Application behavior
   * Test data
   * Environment
   * Framework implementation
5. Make the smallest safe correction.
6. Never hide real application failures by weakening assertions.

---

# Reporter Rules

The REPORTER analyzes execution results.

The Reporter should provide:

* Execution summary
* Passed scenarios
* Failed scenarios
* Skipped scenarios
* Failure causes
* Relevant screenshots/traces/reports
* Regression observations

Reports must distinguish test failures from infrastructure/environment failures.

---

# General Automation Rules

* Use TypeScript.
* Use Playwright for browser automation.
* Use Cucumber as the test runner.
* Follow existing project structure.
* Prefer reusable Page Objects.
* Prefer stable accessible locators.
* Avoid `page.waitForTimeout()` unless explicitly justified.
* Do not hard-code credentials.
* Do not expose secrets in test plans, source code or reports.
* Keep tests deterministic.
* Keep independent scenarios independent.
* Avoid unnecessary duplication.

---

# File Creation Rule

Agents are expected to create/update files in the repository when the task requires file generation.

Do not provide a file only in chat when the workflow requires a repository artifact.

---

# Agent Handoff

```text
PLANNER
  ↓
src/test-plan/*.md
  ↓
GENERATOR
  ↓
Cucumber feature files
  ↓
IMPLEMENTER
  ↓
Playwright + TypeScript implementation
  ↓
HEALER
  ↓
Stable automation
  ↓
REPORTER
  ↓
Execution/report analysis
```

---

# Source of Truth

Each stage must consume the artifacts produced by the previous stage.

The Planner is the source of truth for intended test coverage.

The Generator must not silently add or remove business scenarios.

The Implementer must not silently change scenario behavior.

The Healer must not silently weaken validation to make tests pass.

The Reporter must accurately reflect execution results.
