@orangehrm @authentication
Feature: Authentication

  Background:
    Given the authentication user is on the login page

  @positive @smoke @high
  Scenario: Login page renders its authentication controls
    When the authentication user performs the "login controls" action
    Then the authentication result is visible

  @positive @high
  Scenario: Valid credentials authenticate the user
    When the authentication user performs the "valid credentials" action
    Then the authentication result is visible

  @negative @high
  Scenario: Invalid or incomplete credentials are rejected
    When the authentication user performs the "invalid credentials" action
    Then the authentication result is visible

  @negative @medium
  Scenario: Forgot password opens its recovery workflow
    When the authentication user performs the "password recovery" action
    Then the authentication result is visible

  @positive @medium
  Scenario: Profile menu exposes password change and logout
    When the authentication user performs the "profile menu" action
    Then the authentication result is visible

  @security @high
  Scenario: Logout ends the authenticated session
    When the authentication user performs the "logout" action
    Then the authentication result is visible
