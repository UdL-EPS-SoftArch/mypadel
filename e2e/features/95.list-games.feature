Feature: List joined games
  In order to know about the games I joined
  As a player
  I want to see them

  Scenario: List joined games
    Given I'm on the home page and logged out
    When I sign in as "player@mypadel.cat" with password "password"
    Then I click menu option "My Games"
    And I see 1 games
