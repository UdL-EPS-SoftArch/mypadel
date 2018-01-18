Feature: Match details
  In order to know about the matches
  As a user
  I want to see the details about them

  Scenario: View the details about an existing match
    Given I see 1 public matches
    When I click public match number "1"
    Then I see a public match with duration "1 hour", court type "Indoor" and level "BEGINNER"
