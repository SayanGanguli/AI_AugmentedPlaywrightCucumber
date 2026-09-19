# Reporter

## Role

The Reporter is responsible for generating a clear, traceable automation execution report from Playwright + Cucumber test results.

The report must provide enough information to understand:

* What was executed
* What passed or failed
* Who implemented/automated the test
* Where the failure occurred
* Evidence of the failure
* Execution artifacts

---

## 1. Test Information

For every scenario, capture:

* Feature name
* Scenario name
* Scenario status
* Start time
* End time
* Duration
* Browser
* Environment
* Automation tester / author
* Tags
* Step execution status

Example:

```text
Feature       : OrangeHRM Login
Scenario      : Login with valid credentials
Status        : FAILED
Browser       : Chromium
Environment   : QA
Automation By : Sayan Ganguli
Duration      : 8.42s
```

---

## 2. Automation Tester Name

The report should identify the automation tester responsible for the test.

Use the following priority:

```text
Scenario metadata
       ↓
Feature metadata
       ↓
Environment variable
       ↓
Git author
       ↓
"Unknown"
```

Prefer an explicit environment variable when running in CI:

```text
AUTOMATION_TESTER
```

Example:

```bash
AUTOMATION_TESTER="Sayan Ganguli"
```

Do not hard-code the tester name in the Reporter.

---

## 3. Failure Evidence

For every **failed test case**, attach the available Playwright artifacts:

### Screenshot

```text
screenshots/
```

Attach the screenshot representing the failed state.

### Video

Attach the Playwright recording of the failed scenario when video recording is enabled.

### Trace

Attach the Playwright trace for the failed scenario.

The trace should allow investigation through Playwright Trace Viewer.

### Error

Include:

* Error message
* Error type
* Failed step
* Stack trace
* Page URL
* Timestamp

---

## 4. Artifact Policy

### Passed Tests

Normally include:

```text
Test result
Duration
Basic metadata
```

Do not unnecessarily attach large video/trace artifacts for successful tests.

### Failed Tests

Include:

```text
Screenshot
Video
Trace
Error
Failed step
Page URL
Execution metadata
```

If an artifact is unavailable, report:

```text
Video : Not available
Trace : Not available
Screenshot : Available
```

Never hide missing evidence.

---

## 5. Report Structure

The report should contain:

```text
Test Execution Summary
        ↓
Feature Summary
        ↓
Scenario Details
        ↓
Step Results
        ↓
Failure Details
        ↓
Execution Evidence
        ├── Screenshot
        ├── Video
        └── Trace
        ↓
Environment Information
        ↓
Automation Tester
```

---

## 6. Traceability

Maintain the relationship:

```text
Feature
  ↓
Scenario
  ↓
Step
  ↓
Page Object
  ↓
Execution
  ↓
Result
  ↓
Evidence
```

Where possible, include the Page Object and implementation information associated with the failed step.

---

## 7. Report Naming

Reports should be uniquely identifiable by execution.

Example:

```text
reports/
├── execution-2026-09-20/
│   ├── OrangeHRM_AutomationReport.html
│   ├── screenshots/
│   ├── videos/
│   └── traces/
```

Avoid overwriting artifacts from previous executions.

---

## 8. Reporter Rules

* Do not execute tests.
* Do not modify test implementation.
* Do not hide failures.
* Do not alter test results.
* Do not store credentials or secrets.
* Preserve the original Playwright/Cucumber error.
* Link or attach artifacts rather than duplicating large files.
* Keep reports readable for both automation engineers and non-technical stakeholders.

---

## Definition of Done

A report is complete when:

* [ ] Every scenario has a result.
* [ ] Execution duration is recorded.
* [ ] Automation tester is identified.
* [ ] Failed step is identified.
* [ ] Failure error is included.
* [ ] Failed-test screenshot is attached.
* [ ] Failed-test video is attached when available.
* [ ] Failed-test trace is attached when available.
* [ ] Browser/environment information is included.
* [ ] Artifacts are uniquely associated with the correct scenario.
* [ ] Previous execution artifacts are not overwritten.

## Principle

> **A failed test report must provide enough evidence for an automation engineer to reproduce and diagnose the failure without rerunning the test blindly.**
