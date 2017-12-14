Feature: Detail court
  In order to know more about a court
  As an authenticated user
  I want to view the detail

  Scenario: Detail court
    Given I'm in the home page
    And I sign in as "player@mypadel.cat" with password "password"
    And I click menu option "Courts"
    When I click on a court with ID "1"
    Then I see a court with availability "unavailable"
    And I see a court "outdoor"
    And I logout
