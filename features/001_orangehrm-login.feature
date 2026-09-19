Feature: OrangeHRM login

  Scenario: Successful login with valid credentials
    Given I am on the OrangeHRM login page
    When I login with username "Admin" and password "admin123"
    Then I should be redirected to the dashboard

  Scenario: Invalid username and password shows authentication error
    Given I am on the OrangeHRM login page
    When I login with username "InvalidUser" and password "wrongpass"
    Then I should see an invalid credentials error message
