Feature: Player Details
  In order to know about particular players
  As a user
  I want to see the available details about them

  Scenario: View the details about an existing player
    Given I see 2 players
    When I click player with name "player2"
    Then I see a player with name "player2"
    And I see a player with e-mail "player2@mypadel.cat"
    And I logout
