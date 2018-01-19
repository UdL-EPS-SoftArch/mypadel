Feature: List private Matches
  In order to know about the entered private matches
  As a user
  I want to list them

  Scenario: List all private matches when just default one
    Given I'm on the home page and logged out
    When I click menu option "Matches"
    Then I see 1 private matches

