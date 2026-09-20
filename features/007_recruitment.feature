@orangehrm @recruitment
Feature: Recruitment

  Background:
    Given the recruitment user is on the recruitment module page

  @navigation @high
  Scenario: Recruitment exposes Candidates and Vacancies
    When the recruitment user performs the "candidate and vacancy navigation" action
    Then the recruitment result is visible

  @positive @high
  Scenario: Recruitment searches candidates
    When the recruitment user performs the "candidate search filters" action
    Then the recruitment result is visible

  @positive @medium
  Scenario: Recruitment resets candidate filters
    When the recruitment user performs the "candidate filter reset" action
    Then the recruitment result is visible

  @positive @high
  Scenario: Recruitment adds a candidate
    When the recruitment user performs the "candidate creation" action
    Then the recruitment result is visible

  @validation @high
  Scenario: Recruitment validates candidate data
    When the recruitment user performs the "candidate validation" action
    Then the recruitment result is visible

  @workflow @high
  Scenario: Recruitment advances a candidate through available statuses
    When the recruitment user performs the "candidate status workflow" action
    Then the recruitment result is visible

  @destructive @high
  Scenario: Recruitment manages vacancies
    When the recruitment user performs the "vacancy management" action
    Then the recruitment result is visible

  @positive @medium
  Scenario: Recruitment sorts and paginates records
    When the recruitment user performs the "recruitment table pagination" action
    Then the recruitment result is visible
