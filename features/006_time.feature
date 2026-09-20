@orangehrm @time
Feature: Time Management

  Background:
    Given the time user is on the time module page

  @navigation @high
  Scenario: Time opens timesheet workflows
    When the time user performs the "timesheet navigation" action
    Then the time result is visible

  @positive @high
  Scenario: User selects an employee and views a timesheet
    When the time user performs the "employee timesheet selection" action
    Then the time result is visible

  @positive @high
  Scenario: User submits valid time entries
    When the time user performs the "valid time entries" action
    Then the time result is visible

  @validation @high
  Scenario: Time rejects invalid entries
    When the time user performs the "invalid time entries" action
    Then the time result is visible

  @positive @medium
  Scenario: User views pending-action timesheets
    When the time user performs the "pending timesheet" action
    Then the time result is visible

  @workflow @high
  Scenario: User acts on a pending timesheet
    When the time user performs the "pending timesheet workflow" action
    Then the time result is visible

  @navigation @medium
  Scenario: Timesheet shortcuts reach the correct pages
    When the time user performs the "timesheet shortcuts" action
    Then the time result is visible
