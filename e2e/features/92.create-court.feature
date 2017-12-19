Feature: Create courts
  In order to host matches
  As an admin
  I want to create courts

  Scenario: Create a new court
    Given I'm in the home page
    And I sign in as "admin@mypadel.cat" with password "password"
    When I click menu option "Courts"
    And I create a court
    Then I click menu option "Courts"
    And I see 1 courts
    And I logout
