Feature: User visit products Page

    Background: login valid
        Given I visit the website
        When I click on SignupLogin button
        Then I am on the login page
        When I enter the email "abc123456@koors.com" and the password "abc123++"
        Then I am on the home page and "Logout" displayed

    Scenario: Visit products page
        When I click on Products button
        Then I am on the products page and "All Products" displayed
        And The table of all products displayed

