Feature: Delete courts
  In order to remove a court
  As admin
  I want to delete it

  Scenario: Delete court
    Given I'm on the home page and logged out
    And I sign in as "admin@mypadel.cat" with password "password"
    And I click menu option "Courts"
    When I click on a court with ID "1"
    And I click delete the current court
    And I confirm the deletion
    Then I see 0 courts
