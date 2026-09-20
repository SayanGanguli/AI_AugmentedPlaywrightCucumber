# Dashboard

## Objective
Verify dashboard widgets, quick navigation, pending actions, and employee distribution information.

## Preconditions
- Authenticated session using a role with dashboard access.

## Test Data
- Existing dashboard data.
- Valid employee, leave, and timesheet records from the environment.

## Scenarios
1. Dashboard loads with Time at Work, My Actions, Quick Launch, Buzz Latest Posts, Employees on Leave Today, and distribution widgets.
2. Quick Launch opens Assign Leave, Leave List, Timesheets, Apply Leave, My Leave, and My Timesheet.
3. Pending Self Review and Candidate to Interview actions open their related workflows.
4. Time at Work reflects the current work-time state and exposes its action control.
5. Employee distribution by sub unit and location renders available categories and responds to selection.
6. Dashboard navigation and browser back/forward preserve the authenticated session.

## Steps
1. Sign in and inspect each widget.
2. Activate each Quick Launch control independently and verify destination and back navigation.
3. Open pending actions and distribution categories where records exist.

## Expected Results
- All verified widgets render without overlap or error.
- Each shortcut opens the corresponding module and does not lose session state.
- Empty widgets show an explicit empty state rather than stale data.

## Coverage/Notes
Dashboard route verified at `/dashboard/index`; six Quick Launch actions were visible.

## Known Limitations
Chart drill-down details and Time at Work start/stop behavior were not executed during discovery.
