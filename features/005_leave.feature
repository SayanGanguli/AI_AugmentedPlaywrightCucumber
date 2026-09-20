@orangehrm @leave
Feature: Leave Management

  Background:
    Given the leave user is on the leave module page

  @navigation @high
  Scenario: Leave exposes its main workflows
    When the leave user performs the "leave navigation" action
    Then the leave result is visible

  @positive @high
  Scenario: User applies valid leave
    When the leave user performs the "valid leave application" action
    Then the leave result is visible

  @validation @high
  Scenario: Leave rejects invalid requests
    When the leave user performs the "invalid leave validation" action
    Then the leave result is visible

  @positive @medium
  Scenario: User views and filters Employee Leave
    When the leave user performs the "employee leave filters" action
    Then the leave result is visible

  @positive @high
  Scenario: Admin searches the Leave List
    When the leave user performs the "leave list filters" action
    Then the leave result is visible

  @positive @medium
  Scenario: Admin resets Leave List filters
    When the leave user performs the "leave list filter reset" action
    Then the leave result is visible

  @positive @high
  Scenario: Admin assigns leave to an employee
    When the leave user performs the "leave assignment" action
    Then the leave result is visible

  @workflow @high
  Scenario: Admin acts on a pending leave request
    When the leave user performs the "pending leave workflow" action
    Then the leave result is visible
