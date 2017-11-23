Feature: Delete Administrator
  In order to deregister existing administrators
  As an administrator
  I want to delete them

  Scenario: Delete an existing administrator
    Given I'm signed in as "admin"
    When I delete the current administrator
    And I confirm the deletion
    Then I see 1 administrators
