Feature: List Datasets
  In order to know about available datasets
  As a data user
  I want to list them

  Scenario: List all administrators when just default one
    Given I'm in the home page
    When I click menu option "Admins"
    Then I see 1 administrators

  Scenario: List all datasets when one created
    Given I sign in as "admin@mypadel.cat" with password "password"
    And I'm signed in as "admin"
    And I create an administrator with username "admin2" and e-mail "admin2@mypadel.cat"
    When I click menu option "Admins"
    Then I see 2 administrators
