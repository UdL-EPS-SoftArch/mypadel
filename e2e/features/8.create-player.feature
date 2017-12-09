Feature: Create Administrator
  In order to register additional administrators
  As an administrator
  I want to register them

  Scenario: Create additional administrator
    Given I sign in as "admin@mypadel.cat" with password "password"
    And I see 1 players
    When I create a Player with username "player2" and e-mail "player2@mypadel.cat"
    Then I click menu option "Players"
    And I see 2 players
