@orangehrm @dashboard
Feature: Dashboard

  Background:
    Given the dashboard user is on the dashboard module page

  @positive @high
  Scenario: Dashboard loads all verified widgets
    When the dashboard user performs the "dashboard widgets" action
    Then the dashboard result is visible

  @positive @high
  Scenario: Quick Launch opens each supported workflow
    When the dashboard user performs the "quick launch workflows" action
    Then the dashboard result is visible

  @positive @medium
  Scenario: Pending actions open related workflows
    When the dashboard user performs the "pending actions" action
    Then the dashboard result is visible

  @positive @medium
  Scenario: Time at Work shows the current work state
    When the dashboard user performs the "time at work" action
    Then the dashboard result is visible

  @positive @medium
  Scenario: Employee distributions render their categories
    When the dashboard user performs the "employee distributions" action
    Then the dashboard result is visible

  @navigation @medium
  Scenario: Dashboard history preserves authentication
    When the dashboard user performs the "dashboard navigation history" action
    Then the dashboard result is visible
