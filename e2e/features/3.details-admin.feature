Feature: Administrator Details
  In order to know about particular administrators
  As a user
  I want to see the available details about them

  Scenario: View the details about an existing administrator
    Given I see 2 administrators
    When I click admin with name "admin2"
    Then I see an administrator with name "admin2"
    And I see an administrator with e-mail "admin2@mypadel.cat"
