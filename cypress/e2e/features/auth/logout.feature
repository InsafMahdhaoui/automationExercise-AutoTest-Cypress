Feature: Logout

    Background: valid login
        Given I visit the website
        When I click on SignupLogin button
        Then I am on the login page
        When I enter the email "abc123456@koors.com" and the password "abc123++"
        Then I am on the home page and "Logout" displayed

    Scenario: Logout
        When I click on logout button
        Then I m redirected to the login page