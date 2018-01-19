Feature: Join a public match
  In order to join a match
  As a player
  I want to join it

  Scenario: Join a public match
    Given I'm on the home page and logged out
    And I sign in as "player2@mypadel.cat" with password "password"
    When I click menu option "Matches"
    And I click to the match "1"
    And I join to the match
    Then I click menu option "My Games"
    And I see 2 games
