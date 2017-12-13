Feature: List courts
  In order to see the gym's courts
  As an authenticated user
  I want to list them

  Scenario: List all courts, zero by default
    Given I'm in the home page
    And I sign in as "player@mypadel.cat" with password "password"
    When I click menu option "Courts"
    Then I see 0 courts
    And I logout
