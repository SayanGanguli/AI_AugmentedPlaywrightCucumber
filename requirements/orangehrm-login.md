# Test Plan: OrangeHRM Login

## Objective

Verify that a user can successfully log in to OrangeHRM using valid credentials.

## Application

OrangeHRM

## Preconditions

- OrangeHRM application is accessible.
- User has valid login credentials.
- Browser is available.

## Test Scenarios

### TC-LOGIN-001: Successful Login

Steps:
1. Navigate to the OrangeHRM login page.
2. Enter a valid username.
3. Enter a valid password.
4. Click the Login button.
5. Verify that the Dashboard is displayed.

Expected Result:
- Login should be successful.
- User should be redirected to the Dashboard.
- Dashboard should be visible.

## Test Data

- Username: valid OrangeHRM user
- Password: valid OrangeHRM password

## Out of Scope

- Password reset
- Account creation
- User registration
- Role/permission testing
