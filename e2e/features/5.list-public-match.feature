Feature: List Public Matches
  In order to know about the entered public matches
  As a user
  I want to list them

  Scenario: List all public matches when just default one
    Given I'm in the home page
    When I click menu option "Public Matches"
    Then I see 0 public matches
