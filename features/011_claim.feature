@orangehrm @claim
Feature: Claims

  Background:
    Given the claims user is on the claims module page

  @navigation @high
  Scenario: Claim exposes its main workflows
    When the claims user performs the "claim navigation" action
    Then the claims result is visible

  @positive @high
  Scenario: User submits a valid claim
    When the claims user performs the "valid claim submission" action
    Then the claims result is visible

  @validation @high
  Scenario: Claim rejects invalid values
    When the claims user performs the "invalid claim validation" action
    Then the claims result is visible

  @positive @high
  Scenario: Admin searches employee claims
    When the claims user performs the "claim search filters" action
    Then the claims result is visible

  @positive @medium
  Scenario: Admin resets claim filters
    When the claims user performs the "claim filter reset" action
    Then the claims result is visible

  @positive @high
  Scenario: User opens claim details
    When the claims user performs the "claim details" action
    Then the claims result is visible

  @workflow @high
  Scenario: Admin assigns or reviews a claim
    When the claims user performs the "claim assignment workflow" action
    Then the claims result is visible

  @workflow @medium
  Scenario: Claim status remains consistent after workflow action
    When the claims user performs the "claim status workflow" action
    Then the claims result is visible
