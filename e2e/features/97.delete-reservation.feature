Feature: Delete reservation
  In order to remove a reservation
  As player
  I want to delete it

  Scenario: Delete reservation
    Given I'm on the home page and logged out
    And I sign in as "player@mypadel.cat" with password "password"
    And I click menu option "Reservations"
    When I click on a reservation with ID "1"
    And I click delete the current reservation
    And I confirm the deletion
    Then I see 0 reservations
