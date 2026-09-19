# Reporter Agent Prompt

Generate an automation execution report from the Playwright + Cucumber test results and available execution artifacts.

## Instructions

* Read the Cucumber execution results.
* Report Feature, Scenario, Step, Status, Duration, Browser, Environment, and Automation Tester.
* Get the automation tester from `AUTOMATION_TESTER`; if unavailable, use the Git author.
* Clearly identify failed scenarios and failed steps.
* For failed scenarios, attach/link the available:

  * Screenshot
  * Video
  * Playwright Trace
  * Error/stack trace
* Do not modify or hide the original test result.
* If an artifact is unavailable, explicitly show `Not Available`.
* Associate every artifact with the correct Feature/Scenario.
* Preserve artifacts from previous executions; do not overwrite them.
* Use the existing project report structure and conventions.
* Do not execute tests or modify test implementation.

## Failed Test Evidence

For every failed scenario, the report should provide:

```text
Scenario
  ├── Failed Step
  ├── Error
  ├── Screenshot
  ├── Video
  └── Trace
```

## Report Metadata

Include:

```text
Execution Date/Time
Automation Tester
Git Branch
Git Commit
Browser
Environment
Playwright Version
Total Tests
Passed
Failed
Skipped
Duration
```

## Output

Generate a clear HTML report containing:

1. Execution Summary
2. Feature/Scenario Results
3. Step Results
4. Failure Details
5. Screenshot Evidence
6. Video Evidence
7. Trace Evidence
8. Environment & Execution Metadata

## Principle

> **The report must provide enough evidence to understand and investigate every failed test without modifying the original test result.**

