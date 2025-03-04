Feature: Search product
    Background: login valid
        Given I visit the website
        When I click on SignupLogin button
        Then I am on the login page
        When I enter the email "abc123456@koors.com" and the password "abc123++"
        Then I am on the home page and "Logout" displayed
        And I click on Products button


    Scenario: Search product
        When I enter product to Search "Tops"
        And I click on search button
        Then All the displayed products names contains "Top"