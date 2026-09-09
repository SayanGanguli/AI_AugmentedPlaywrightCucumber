# Test Plan: OrangeHRM Login Negative Scenarios

## Objective

Verify that OrangeHRM correctly handles invalid login attempts.

## Preconditions

- OrangeHRM application is accessible.
- Login page is available.

## Test Scenarios

### TC-LOGIN-002: Invalid Username

Steps:
1. Navigate to the login page.
2. Enter an invalid username.
3. Enter a valid password.
4. Click Login.

Expected Result:
- Login should fail.
- Appropriate error message should be displayed.

### TC-LOGIN-003: Invalid Password

Steps:
1. Navigate to the login page.
2. Enter a valid username.
3. Enter an invalid password.
4. Click Login.

Expected Result:
- Login should fail.
- Appropriate error message should be displayed.

### TC-LOGIN-004: Empty Credentials

Steps:
1. Navigate to the login page.
2. Leave username empty.
3. Leave password empty.
4. Click Login.

Expected Result:
- Login should not proceed.
- Required-field validation should be displayed.
