@orangehrm @navigation
Feature: Navigation and Search

  Background:
    Given the navigation user is on the dashboard module page

  @positive @high
  Scenario: Sidebar shows every reachable module
    When the navigation user performs the "sidebar module inventory" action
    Then the navigation result is visible

  @positive @high
  Scenario: Sidebar search filters and clears modules
    When the navigation user performs the "sidebar search" action
    Then the navigation result is visible

  @navigation @high
  Scenario: Sidebar modules preserve authentication
    When the navigation user performs the "module navigation" action
    Then the navigation result is visible

  @security @high
  Scenario: Profile menu exposes password change and logout
    When the navigation user performs the "profile menu" action
    Then the navigation result is visible

  @navigation @medium
  Scenario: Direct routes and history preserve session behavior
    When the navigation user performs the "direct route history" action
    Then the navigation result is visible

  @navigation @low
  Scenario: External branding and upgrade links remain external
    When the navigation user performs the "external links" action
    Then the navigation result is visible
