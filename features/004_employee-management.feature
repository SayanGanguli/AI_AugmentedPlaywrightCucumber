@orangehrm @employee
Feature: Employee Management

  Background:
    Given the employee user is on the employee management module page

  @positive @high
  Scenario: PIM opens Employee Information controls
    When the employee user performs the "employee information" action
    Then the employee result is visible

  @positive @high
  Scenario: PIM searches employees with combined criteria
    When the employee user performs the "employee search filters" action
    Then the employee result is visible

  @positive @medium
  Scenario: PIM resets employee filters
    When the employee user performs the "employee filter reset" action
    Then the employee result is visible

  @positive @medium
  Scenario: PIM sorts employees and navigates pages
    When the employee user performs the "employee table pagination" action
    Then the employee result is visible

  @validation @high
  Scenario: PIM validates and adds an employee
    When the employee user performs the "employee creation validation" action
    Then the employee result is visible

  @positive @high
  Scenario: PIM edits an employee
    When the employee user performs the "employee edit" action
    Then the employee result is visible

  @destructive @high
  Scenario: PIM confirms or cancels employee deletion
    When the employee user performs the "employee deletion confirmation" action
    Then the employee result is visible

  @positive @medium
  Scenario: PIM opens employee details and attachments
    When the employee user performs the "employee details and attachments" action
    Then the employee result is visible

  @navigation @medium
  Scenario: PIM exposes configuration and report navigation
    When the employee user performs the "employee configuration and reports" action
    Then the employee result is visible
