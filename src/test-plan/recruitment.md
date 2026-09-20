# Recruitment

## Objective
Verify vacancy and candidate search, CRUD, candidate workflow statuses, and applicant validation.

## Preconditions
- Authenticated recruitment-capable user.
- Existing vacancies/candidates are available.

## Test Data
- Existing vacancy, candidate, hiring manager, status, and application method.
- Valid candidate data and invalid/blank required values.

## Scenarios
1. Recruitment exposes Candidates and Vacancies navigation.
2. Search candidates by vacancy, candidate, hiring manager, date, status, and application method.
3. Reset candidate filters and verify records return.
4. Add a candidate with valid data, resume/attachment where supported, and verify listing.
5. Validate required candidate fields and invalid email/date/attachment values.
6. Open a candidate and move through available workflow actions such as shortlist, interview, offer, hire, reject, or mark unqualified.
7. Add, edit, search, and delete a vacancy with required-field and duplicate validation.
8. Sort and paginate candidate/vacancy tables.

## Steps
1. Inspect Candidates and Vacancies independently.
2. Execute filter/reset flows.
3. Run candidate and vacancy CRUD using isolated data.
4. Exercise each visible candidate status action and verify history/list state.

## Expected Results
- Search criteria, status transitions, and table counts are accurate.
- Required fields and invalid values prevent submission.
- Candidate actions update the displayed status and do not create duplicate records.

## Coverage/Notes
Candidates showed 63 records, filters, Add, pagination, and statuses including Hired, Shortlisted, Rejected, and Application Initiated.

## Known Limitations
Vacancy detail forms and every candidate action were not executed during discovery; confirm exact transition rules before implementation.
