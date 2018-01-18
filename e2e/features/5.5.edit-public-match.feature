Feature: Public Match edit
  In order to edit matches
  As a user
  I want to edit my public matches

  Scenario: Edit public match
    Given I'm on the home page and logged out
    And I sign in as "admin@mypadel.cat" with password "password"
    And I see 1 public matches
    And I click public match number "1"
    And I click button "Edit match"
    When I change the duration to "PT30M", court type to "OUTDOOR" and level to "NOVICE"
    And I click button "Edit"
    Then I see 1 public matches
    And I click public match number "1"
    And I see a public match with duration "30 minutes", court type "Outdoor" and level "NOVICE"
