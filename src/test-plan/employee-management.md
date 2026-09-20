# Employee Management

## Objective
Verify PIM employee search, employee CRUD, employee records, configuration, and reports entry points.

## Preconditions
- Authenticated administrator or PIM-capable user.
- Existing employee records are available.

## Test Data
- Existing employee name, ID, supervisor, job title, employment status, and sub unit.
- Valid unique employee data and invalid/blank required values.

## Scenarios
1. PIM opens Employee Information with employee-name, ID, status, include, supervisor, job-title, and sub-unit filters.
2. Search employees with exact, partial, nonmatching, and combined criteria.
3. Reset filters and verify the default list returns.
4. Sort employee columns and navigate pagination.
5. Add an employee, validate required fields and duplicate ID, save, and verify the list/detail record.
6. Edit an employee and verify persisted changes.
7. Delete an employee, confirm and cancel the confirmation paths.
8. Open an employee row and verify personal detail tabs and attachments.
9. Open visible Configuration, Employee List, Add Employee, and Reports navigation.

## Steps
1. Navigate to PIM and record the initial result count.
2. Apply each filter and reset it.
3. Execute isolated add, edit, and delete flows with disposable data.
4. Open a known employee and verify detail navigation.

## Expected Results
- Filters, sorting, pagination, and record counts are accurate.
- Invalid employee submissions are rejected with field-level validation.
- Successful changes are reflected in both list and detail views.
- Deletion requires confirmation and cancelled deletion leaves data unchanged.

## Coverage/Notes
Employee List displayed 106 records and the verified filter/table controls.

## Known Limitations
Detailed employee add/edit forms and PIM Reports were not submitted during discovery; verify every field and report destination before automation.
