Feature: Private Match edit
  In order to edit matches
  As a user
  I want to edit my private matches

  Scenario: Edit private match
    Given I'm on the home page and logged out
    And I sign in as "admin@mypadel.cat" with password "password"
    And I see 1 private matches
    And I click private match number "2"
    And I click button "Edit match"
    When I change the duration to "PT30M", court type to "OUTDOOR"
    And I click button "Edit match"
    Then I see 1 private matches
    And I click private match number "2"
    And I see a private match with duration "30 minutes", court type "Outdoor"
