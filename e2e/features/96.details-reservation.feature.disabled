Feature: Detail reservation
  In order to know more about a reservation
  As an authenticated user
  I want to view the detail


  Scenario: Detail reservation
    Given I'm on the home page and logged out
    And I sign in as "player@mypadel.cat" with password "password"
    And I click menu option "Reservations"
    When I click on a reservation with ID "1"
    Then I see a reservation with a startDate "2017-12-19T23:00:00Z", courtType "INDOOR" and  duration "PT1H"
