# Claims

## Objective
Verify claim submission, employee claim search, assignment, details, status workflow, and validation.

## Preconditions
- Authenticated user with Claim access.
- Claim event and currency values are configured.

## Test Data
- Valid employee, event, description, currency, date, and amount.
- Blank required fields, invalid amount/date, and nonmatching search criteria.

## Scenarios
1. Claim exposes Configuration, Submit Claim, My Claims, Employee Claims, and Assign Claim navigation.
2. Submit a valid claim and verify reference, amount, currency, date, and initial status.
3. Reject blank event/amount, invalid amount, invalid date range, and invalid employee values.
4. Search employee claims by employee, reference ID, event, status, dates, and include option.
5. Reset claim filters and verify the full result set returns.
6. Open claim details and verify description, currency, amount, status, and available actions.
7. Assign or approve/reject a claim where the current role permits it.
8. Verify status and list results after each permitted action.

## Steps
1. Open Employee Claims and record table columns/count.
2. Exercise filters and reset independently.
3. Open Submit Claim and run positive/negative form cases.
4. Open a record, inspect details, and perform permitted workflow actions.

## Expected Results
- Claim fields enforce required and numeric/date rules.
- Successful claims receive a reference and correct workflow status.
- Search/reset, details, and status updates remain consistent.

## Coverage/Notes
Employee Claims showed 14 records, filters, Assign Claim, and View Details actions.

## Known Limitations
Exact approval permissions and Configuration forms were not fully exercised during discovery.
