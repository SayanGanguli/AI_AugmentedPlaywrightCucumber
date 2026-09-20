# My Info

## Objective
Verify the signed-in employee's personal profile sections, editable fields, attachments, and validation.

## Preconditions
- Authenticated user with My Info access.
- Signed-in employee profile exists.

## Test Data
- Existing profile values.
- Valid contact/emergency/dependent/job/qualification values and invalid required formats.

## Scenarios
1. My Info opens Personal Details for the signed-in employee.
2. Navigate among Personal Details, Contact Details, Emergency Contacts, Dependents, Immigration, Job, Salary, Report-to, Qualifications, and Memberships.
3. Edit valid profile data and verify saved values after reload.
4. Submit blank or invalid required values and verify validation without partial corruption.
5. Add and remove an attachment; cancel the action and verify original state remains.
6. Verify read-only fields cannot be edited by the current role.

## Steps
1. Open each visible tab independently.
2. Capture initial values, edit one logical section, save, and reload.
3. Exercise invalid values and attachment add/cancel/delete paths.

## Expected Results
- Each tab opens the intended profile section.
- Valid changes persist; invalid changes are blocked with clear validation.
- Attachments display accurate count and metadata.

## Coverage/Notes
The verified profile had ten tabs and one attachment record.

## Known Limitations
Not all fields, permissions, or attachment upload constraints were executed; test data must avoid changing shared demo records.
