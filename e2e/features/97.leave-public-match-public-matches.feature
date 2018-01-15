Feature: Leave a public match the public match menu section
  In order to cancel my attendance to a match
  As a player
  I want to leave a match from the public match menu section

  Scenario: Leave a public match
    Given I'm on the home page and logged out
    And I sign in as "player2@mypadel.cat" with password "password"
    When I click menu option "Public Matches"
    And I click to the match "1"
    When I leave the match
    And I confirm leaving the game
    Then I click menu option "My Games"
    And I see 0 games
