Feature: List Players
  In order to know about registered Players
  As a user
  I want to list them

  Scenario: List all players when just default one
    Given I'm in the home page
    When I click menu option "Players"
    Then I see 1 players
