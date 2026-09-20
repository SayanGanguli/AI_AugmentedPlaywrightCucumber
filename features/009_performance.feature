@orangehrm @performance
Feature: Performance

  Background:
    Given the performance user is on the performance module page

  @navigation @high
  Scenario: Performance exposes review and tracker navigation
    When the performance user performs the "review and tracker navigation" action
    Then the performance result is visible

  @positive @high
  Scenario: User filters employee reviews
    When the performance user performs the "review search filters" action
    Then the performance result is visible

  @positive @medium
  Scenario: User resets review filters
    When the performance user performs the "review filter reset" action
    Then the performance result is visible

  @workflow @high
  Scenario: User opens and submits an employee review
    When the performance user performs the "employee review workflow" action
    Then the performance result is visible

  @negative @medium
  Scenario: Performance shows an explicit empty review state
    When the performance user performs the "empty review state" action
    Then the performance result is visible

  @positive @medium
  Scenario: User opens tracker views
    When the performance user performs the "tracker views" action
    Then the performance result is visible

  @navigation @medium
  Scenario: Performance exposes configuration and review management
    When the performance user performs the "configuration and review management" action
    Then the performance result is visible
