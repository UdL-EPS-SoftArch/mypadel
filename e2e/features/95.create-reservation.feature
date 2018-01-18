Feature: Create Reservation
  In order to create a reservation
  As an player
  I want to create a new one

  Scenario: Create a new reservation
    Given I'm logged out
    And I sign in as "player@mypadel.cat" with password "password"
    When I create a reservation with duration "PT60M", courtType "INDOOR" and startDate "2017-12-31T00:00:00Z"
    Then I click menu option "Reservations"

