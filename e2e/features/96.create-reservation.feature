Feature: Create Reservation
  In order to create a reservation
  As an player
  I want to create a new one

  Scenario: Create a new reservation
    Given I'm logged out
    And I sign in as "admin@mypadel.cat" with password "password"
    And I click menu option "Courts"
    And I create a court
    And I'm logged out
    And I click menu option "Reservations"
    And I sign in as "player@mypadel.cat" with password "password"
    When I create a reservation with duration "PT1H", courtType "INDOOR" and startDate "2017-12-19T23:00:00Z"
    Then I click menu option "Reservations"
    And I see 1 reservations
