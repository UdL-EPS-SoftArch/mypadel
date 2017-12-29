Feature: Leave a public match
  In order to cancel my attendance to a match
  As a player
  I want to leave a match

  Scenario: Leave a public match
    Given I'm on the home page and logged out
    And I sign in as "player2@mypadel.cat" with password "password"
    When I click menu option "Public Matches"
    And I click to the match "1"
    When I leave the match
    Then I click menu option "My Games"
    And I see 0 games
