Feature: Create a new private match
  In order to play a match
  As a player
  I want to create one

  Scenario: Create private match
    Given I'm on the home page and logged out
    And I sign in as "player2@mypadel.cat" with password "password"
    When I click menu option "Private Matches"
    And I create a private match with duration "PT60M", court type "INDOOR"
    Then I click menu option "Private Matches"
    And I see 1 private matches
