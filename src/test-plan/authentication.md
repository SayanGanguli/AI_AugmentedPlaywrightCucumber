# Authentication

## Objective
Verify login, credential validation, password recovery entry, session termination, and protected-route access for OrangeHRM.

## Preconditions
- Application URL and valid credentials are supplied through runtime environment variables.
- Browser starts unauthenticated.

## Test Data
- Valid environment credentials.
- Invalid username, invalid password, blank username, and blank password.

## Scenarios
1. Login page renders username, password, Login, Forgot password, branding, and version information.
2. Valid credentials authenticate and redirect to `/dashboard/index`.
3. Invalid or incomplete credentials keep the user on login and show the application validation/error message.
4. Forgot password opens the password-reset workflow or its reachable validation state.
5. Profile menu exposes Change Password and Logout.
6. Logout returns to `/auth/login` and a protected URL cannot be used as an authenticated session.

## Steps
1. Open the configured base URL.
2. Inspect required controls and submit empty, invalid, then valid values as independent scenarios.
3. After login, open the profile menu and choose Logout.
4. Attempt to revisit the dashboard after logout.

## Expected Results
- Required-field and authentication errors are visible and no unauthorized dashboard is shown.
- Valid login reaches the dashboard.
- Logout clears the authenticated view and protected content is not available without reauthentication.

## Coverage/Notes
Covers authentication and session lifecycle, including the verified logout path.

## Known Limitations
Password-reset and change-password completion were not submitted during discovery; verify their downstream forms before implementation.
