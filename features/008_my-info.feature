@orangehrm @employee-information
Feature: Employee Information

  Background:
    Given the employee profile user is on the employee information module page

  @positive @high
  Scenario: Employee Information opens the personal profile
    When the employee profile user performs the "personal details" action
    Then the employee profile result is visible

  @navigation @high
  Scenario: Employee Information exposes all profile tabs
    When the employee profile user performs the "profile tabs" action
    Then the employee profile result is visible

  @positive @high
  Scenario: User edits valid profile data
    When the employee profile user performs the "valid profile update" action
    Then the employee profile result is visible

  @validation @high
  Scenario: Employee Information rejects invalid required data
    When the employee profile user performs the "invalid profile validation" action
    Then the employee profile result is visible

  @positive @medium
  Scenario: User manages profile attachments
    When the employee profile user performs the "profile attachments" action
    Then the employee profile result is visible

  @security @medium
  Scenario: Read-only profile fields remain protected
    When the employee profile user performs the "read-only fields" action
    Then the employee profile result is visible
