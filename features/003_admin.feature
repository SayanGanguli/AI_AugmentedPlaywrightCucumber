@orangehrm @admin
Feature: Admin and User Management

  Background:
    Given the admin user is on the admin module page

  @positive @high
  Scenario: Admin opens System Users and its navigation
    When the admin user performs the "system user navigation" action
    Then the admin result is visible

  @positive @high
  Scenario: Admin searches users by available criteria
    When the admin user performs the "user search filters" action
    Then the admin result is visible

  @positive @medium
  Scenario: Admin resets user filters
    When the admin user performs the "user filter reset" action
    Then the admin result is visible

  @positive @medium
  Scenario: Admin sorts users and traverses pagination
    When the admin user performs the "user table pagination" action
    Then the admin result is visible

  @validation @high
  Scenario: Admin validates and creates a system user
    When the admin user performs the "system user creation validation" action
    Then the admin result is visible

  @positive @high
  Scenario: Admin edits an existing user
    When the admin user performs the "user edit" action
    Then the admin result is visible

  @destructive @high
  Scenario: Admin confirms or cancels user deletion
    When the admin user performs the "user deletion confirmation" action
    Then the admin result is visible

  @navigation @medium
  Scenario: Admin filters and clears sidebar navigation search
    When the admin user performs the "sidebar search" action
    Then the admin result is visible
