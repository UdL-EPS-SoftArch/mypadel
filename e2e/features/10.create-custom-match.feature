Feature: Create Custom Match
  In order to play a customized match
  As a player
  I want to create it

  Scenario: Create custom match
    Given I logout
    And I sign in as "player@mypadel.cat" with password "password"
    And I see 1 custom match
    When I create a custom match with duration "30 minutes", court type "Indoor" and startDate "2022-12-02T00:00:00.000Z"
    Then I click menu option "Custom Matches"
    And I see 2 custom matches
