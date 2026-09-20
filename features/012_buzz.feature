@orangehrm @buzz
Feature: Buzz

  Background:
    Given the buzz user is on the buzz module page

  @positive @high
  Scenario: Buzz loads its newsfeed controls
    When the buzz user performs the "newsfeed controls" action
    Then the buzz result is visible

  @positive @high
  Scenario: User posts valid text to Buzz
    When the buzz user performs the "valid text post" action
    Then the buzz result is visible

  @validation @medium
  Scenario: Buzz handles blank text posts
    When the buzz user performs the "blank text post" action
    Then the buzz result is visible

  @positive @high
  Scenario: User shares valid media
    When the buzz user performs the "valid media post" action
    Then the buzz result is visible

  @positive @medium
  Scenario: User sorts Buzz posts
    When the buzz user performs the "post sorting" action
    Then the buzz result is visible

  @positive @medium
  Scenario: User expands a long Buzz post
    When the buzz user performs the "long post expansion" action
    Then the buzz result is visible

  @positive @medium
  Scenario: User interacts with a Buzz post
    When the buzz user performs the "post interaction" action
    Then the buzz result is visible

  @positive @low
  Scenario: Buzz renders feed and anniversaries states
    When the buzz user performs the "feed and anniversaries" action
    Then the buzz result is visible
