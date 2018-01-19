Feature: Leave a public match from the my games menu section
  In order to cancel my attendance to a match
  As a player
  I want to leave a match from the my games menu section

  Scenario: Leave a public match
    Given I'm on the home page and logged out
    And I sign in as "player2@mypadel.cat" with password "password"
    And I click menu option "Matches"
    And I click to the match "1"
    And I join to the match
    And I click menu option "My Games"
    And I see 2 games
    And I click menu option "My Games"
    And I click to the joined match "4"
    When I leave the match
    And I confirm leaving the game
    Then I click menu option "My Games"
    And I see 1 games
