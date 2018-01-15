Feature: List Reservations
  In order to know about the entered reservations
  As a user
  I want to list them


  Scenario: List all reservations when just default one
    Given I'm in the home page
    When I click menu option "Reservations"
    Then I see 0 reservations
