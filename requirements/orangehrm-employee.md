# Test Plan: OrangeHRM Employee Management

## Objective

Verify that an authenticated user can manage employee records.

## Preconditions

- OrangeHRM is accessible.
- User can log in successfully.
- User has permission to access Employee Management.

## Test Scenarios

### TC-EMP-001: Navigate to Employee List

Steps:
1. Login successfully.
2. Open the PIM module.
3. Open Employee List.

Expected Result:
- Employee List page should be displayed.

### TC-EMP-002: Search Employee

Steps:
1. Open Employee List.
2. Enter an employee name.
3. Click Search.

Expected Result:
- Matching employee records should be displayed.

### TC-EMP-003: Add Employee

Steps:
1. Open PIM.
2. Select Add Employee.
3. Enter employee first name.
4. Enter employee last name.
5. Save the employee.

Expected Result:
- Employee should be created successfully.
- Employee details should be displayed.

### TC-EMP-004: Validate Required Employee Fields

Steps:
1. Open Add Employee.
2. Leave required fields empty.
3. Click Save.

Expected Result:
- Validation messages should be displayed.
- Employee should not be created.
