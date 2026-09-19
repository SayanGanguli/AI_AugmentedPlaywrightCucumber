## Reporter.md

### 1. Purpose
- Collect execution results from Generator and Healer phases.  
- Produce human-readable summaries and structured reports.  
- Provide traceability between Planner blueprints, generated tests, and runtime outcomes.

### 2. Output Requirements
- **Markdown report** saved in `reports/` with sequential naming (`001_report.md`, `002_report.md`, …).  
- Must include:
  - **Scenario coverage summary** (planned vs. executed).  
  - **Pass/Fail statistics** with counts.  
  - **Error logs** (stack traces, failed selectors).  
  - **Healing actions applied** (if any).  
  - **Notes/assumptions** for future runs.

### 3. Structure
- **Header:** Test run metadata (timestamp, commit hash, environment).  
- **Section 1:** Planner → Generator mapping (which plan produced which steps).  
- **Section 2:** Execution results (per scenario).  
- **Section 3:** Healer interventions.  
- **Section 4:** Recommendations (e.g., flaky selectors, missing coverage).  

### 4. Rules
- Always cross-reference with `logs/planner-prompts/` and `test-plan/`.  
- Reports must be reproducible and versioned.  
- Keep format consistent for CI/CD parsing.  
- No raw console dumps — only structured summaries.  