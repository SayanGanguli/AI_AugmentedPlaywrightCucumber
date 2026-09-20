# Admin and User Management

## Objective
Verify system-user search, reset, sorting, pagination, CRUD actions, and Admin navigation.

## Preconditions
- Authenticated administrator session.
- Existing system users are present.

## Test Data
- Existing username, user role, employee name, and status values.
- Nonmatching search text and valid new-user data supplied by the test environment.

## Scenarios
1. Admin opens System Users with User Management, Job, Organization, Qualifications, Nationalities, Corporate Branding, and Configuration navigation.
2. Search users by username, role, employee name, and status.
3. Reset filters and verify the complete result set returns.
4. Sort table columns and traverse pagination when multiple records exist.
5. Open Add User, validate required fields and duplicate/invalid values, then create a user.
6. Edit an existing user and verify changed values persist.
7. Select and delete a user, confirm the prompt, and verify removal; cancel deletion and verify retention.
8. Use the sidebar search to filter module navigation and clear it.

## Steps
1. Navigate to Admin and record initial record count.
2. Apply each filter independently and in combination, then reset.
3. Exercise add/edit/delete with isolated test data and verify table results.
4. Open each visible topbar menu and record reachable child pages.

## Expected Results
- Search results match applied criteria; reset restores defaults.
- Required and duplicate validations prevent invalid saves.
- Successful CRUD operations update the table and cancelled destructive actions do not.
- Navigation remains available and session state is preserved.

## Coverage/Notes
System Users showed nine records, filter controls, sortable columns, and row actions during discovery.

## Known Limitations
The child pages under Job, Organization, Qualifications, and Configuration were visible but not each opened; their detailed forms must be explored before implementation.
