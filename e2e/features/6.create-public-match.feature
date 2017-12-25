Feature: Create public match
  In order to play a match
  As a player
  I should create it

  Scenario: Create public match
    Given I'm on the home page and logged out
    And I sign in as "player@mypadel.cat" with password "password"
    When I click menu option "Public Matches"
    And I create a public match with duration "PT60M", court type "INDOOR" and level "BEGINNER"
    Then I click menu option "Public Matches"
    And I see 1 public matches
