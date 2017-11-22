Feature: Create Administrator
  In order to register additional administrators
  As an administrator
  I want to register them

  Scenario: Create additional administrator
    Given I sign in as "admin@mypadel.cat" with password "password"
    And I see 1 administrators
    When I create an administrator with username "admin2" and e-mail "admin2@mypadel.cat"
    Then I click menu option "Admins"
    And I see 2 administrators
