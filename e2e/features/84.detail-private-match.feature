Feature: Private Match details
  In order to know about the matches
  As a user
  I want to see the details about them

  Scenario: View the details about an existing match
    Given I see 1 private matches
    When I click private match number "2"
    Then I see a private match with duration "1 hour", court type "Indoor"
