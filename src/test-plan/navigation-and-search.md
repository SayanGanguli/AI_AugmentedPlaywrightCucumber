# Navigation and Search

## Objective
Verify global navigation, sidebar search, profile actions, external links, upgrade link, and route/session continuity.

## Preconditions
- Authenticated session for protected navigation.
- Browser supports normal same-tab and new-tab link behavior.

## Test Data
- Sidebar terms matching one module, multiple modules, and no modules.
- Valid and invalid protected routes.

## Scenarios
1. Sidebar shows all reachable modules: Admin, PIM, Leave, Time, Recruitment, My Info, Performance, Dashboard, Maintenance, Claim, and Buzz.
2. Sidebar search filters module navigation and clearing restores all modules.
3. Every sidebar module opens its expected page without losing authentication.
4. Profile menu exposes Change Password and Logout; Logout returns to login.
5. Browser back/forward and direct navigation preserve or correctly deny session state.
6. External branding, OrangeHRM, social, and Upgrade links resolve to their intended external destinations without changing the authenticated app unexpectedly.

## Steps
1. Traverse each sidebar link and verify heading/route.
2. Search for known and unknown module text, then clear the search.
3. Open profile actions and test logout.
4. Return to the application and exercise browser history/direct protected URLs.

## Expected Results
- Navigation destinations, active headings, and session state are correct.
- No-match search yields no misleading module result.
- Logout prevents continued access to protected content.
- External links are not mistaken for internal routes.

## Coverage/Notes
All eleven sidebar entries and the profile menu were observed during discovery.

## Known Limitations
External destination content is outside this application plan and should only be checked for URL/navigation success.
