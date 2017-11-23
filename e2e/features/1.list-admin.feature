Feature: List Administrators
  In order to know about registered administrators
  As a user
  I want to list them

  Scenario: List all administrators when just default one
    Given I'm in the home page
    When I click menu option "Admins"
    Then I see 1 administrators
