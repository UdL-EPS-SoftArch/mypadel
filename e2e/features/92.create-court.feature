Feature: Create courts
  In order to host matches
  As an admin
  I want to create courts

  Scenario: Create a new available indoor court
    Given I'm on the home page and logged out
    And I sign in as "admin@mypadel.cat" with password "password"
    When I click menu option "Courts"
    And I create an available indoor court
    Then I click menu option "Courts"
    And I see 1 courts
