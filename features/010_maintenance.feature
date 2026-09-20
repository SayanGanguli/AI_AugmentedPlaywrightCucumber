@orangehrm @maintenance
Feature: Maintenance

  Background:
    Given the administrator user is on the maintenance module page

  @security @high
  Scenario: Maintenance requires administrator reauthentication
    When the administrator user performs the "administrator reauthentication" action
    Then the maintenance result is visible

  @security @high
  Scenario: Maintenance displays the protected credential fields
    When the administrator user performs the "protected credential fields" action
    Then the maintenance result is visible

  @positive @high
  Scenario: Correct administrator password confirms access
    When the administrator user performs the "valid administrator password" action
    Then the maintenance result is visible

  @negative @high
  Scenario: Incorrect maintenance credentials are rejected
    When the administrator user performs the "invalid administrator password" action
    Then the maintenance result is visible

  @negative @medium
  Scenario: Cancel leaves maintenance in a safe state
    When the administrator user performs the "maintenance cancellation" action
    Then the maintenance result is visible

  @security @high
  Scenario: Maintenance reauthentication is required again
    When the administrator user performs the "repeat reauthentication" action
    Then the maintenance result is visible
