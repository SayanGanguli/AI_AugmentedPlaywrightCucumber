# Time Management

## Objective
Verify employee selection, timesheet viewing, pending timesheet actions, and time-entry validation.

## Preconditions
- Authenticated user with Time access.
- Existing employees and timesheets are available.

## Test Data
- Existing employee name and pending timesheet period.
- Valid time entries, missing project/activity, invalid hours, and duplicate entries.

## Scenarios
1. Time opens Timesheets and its available topbar workflows.
2. Select an employee by hint and view the employee timesheet.
3. Submit valid time entries and verify totals and saved state.
4. Reject missing/invalid hours, missing activity, and invalid date values.
5. View pending-action timesheets and open a period.
6. Approve, reject, or return a timesheet where permitted.
7. Verify My Timesheet and dashboard Timesheets/My Timesheet shortcuts reach the correct pages.

## Steps
1. Open Time and inspect the employee selector and pending table.
2. Select known and unknown employee values.
3. Open a period, exercise valid and invalid entries, and verify totals/status.

## Expected Results
- Employee hints resolve valid employees and reject unknown values.
- Hours and required fields are validated before save.
- Timesheet totals and workflow status are consistent after action.

## Coverage/Notes
The verified entry page showed Employee Name, View, and three pending timesheets.

## Known Limitations
Time topbar child labels and actual entry/approval form behavior were not fully opened during discovery.
