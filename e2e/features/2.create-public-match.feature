Feature: Create public match
  In order to play a match
  As a player
  I should create it

  Scenario: Create public match
    Given I sign in as "player@mypadel.cat" with password "password"
    When I create a public match with date "2022-12-02T00:00:00.000Z", court type "INDOOR" and level "BEGINNER"
    Then I click menu option "PublicMatches"
    And I see 1 public match
