# Leave Management

## Objective
Verify leave application, personal leave history, leave-list filtering, assignment, approval actions, and validation.

## Preconditions
- Authenticated user with leave permissions.
- At least one leave type and employee are available.

## Test Data
- Valid future leave date range, leave type, and comment.
- Missing dates, invalid range, insufficient balance, duplicate/overlapping dates, and nonmatching filters.

## Scenarios
1. Leave module exposes Apply, My Leave, Leave List, and Assign Leave navigation.
2. Apply leave with valid dates and type; verify pending/submitted status and balance impact.
3. Reject blank, reversed, overlapping, or over-balance leave requests with validation.
4. View My Leave and filter by status/date/type where available.
5. Search Leave List by employee, date, leave type, status, and inclusion options.
6. Reset leave filters and verify default records return.
7. Assign leave to an employee and verify the assigned request.
8. Approve, reject, cancel, or comment on a pending request where the action is available.

## Steps
1. Open each Leave topbar item from an authenticated session.
2. Run positive and negative application data as independent scenarios.
3. Search and reset the Leave List, then open a record and perform permitted action.

## Expected Results
- Required dates and leave type are enforced.
- Valid requests receive the correct workflow status and visible details.
- Invalid requests do not change balances or create records.
- Filters and reset produce accurate list results.

## Coverage/Notes
Leave List showed a pending approval record and Apply/My Leave/Leave List/Assign Leave navigation.

## Known Limitations
Exact approval permissions and leave-balance rules depend on seeded data and were not fully exercised.
