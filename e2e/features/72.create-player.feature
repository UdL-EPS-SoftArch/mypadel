Feature: Create Player
  In order to register additional players
  As an administrator
  I want to register them

  Scenario: Create additional player
    Given I'm logged out
    And I sign in as "admin@mypadel.cat" with password "password"
    And I see 1 players
    When I create a player with username "player2", e-mail "player2@mypadel.cat" and password "password"
    Then I click menu option "Players"
    And I see 2 players
