Feature: Public Match filter
  In order to know about matches
  As a user
  I want to filter and get only public matches

  Scenario: Filter public matches, getting only public matches
    Given I see 1 public matches
    When I click filter button "Private Match"
    Then I see 1 public matches

  Scenario: Filter public matches, getting only private matches
    Given I see 1 public matches
    When I click filter button "Private Match"
    Then I see 0 public matches

  Scenario: Filter public matches, getting only custom matches
    Given I see 1 public matches
    When I click filter button "Custom Match"
    Then I see 0 public matches
