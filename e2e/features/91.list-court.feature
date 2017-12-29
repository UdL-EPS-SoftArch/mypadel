Feature: List courts
  In order to see the gym's courts
  As an authenticated user
  I want to list them

  Scenario: List all courts, zero by default
    Given I'm on the home page and logged out
    And I sign in as "player@mypadel.cat" with password "password"
    When I click menu option "Courts"
    Then I see 0 courts
