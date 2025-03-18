Feature: Contact us
    Background: Login valid
    Background:
        Given I visit the website
        When I click on SignupLogin button
        Then I am on the login page
        When I enter the email "abc123456@koors.com" and the password "abc123++"
        Then I am on the home page and "Logout" displayed

    Scenario: Contact us
        When I click on contact us button
        Then I  am on the contact us page and "Get In Touch" displayed
        When  I enter the name "user" and the email adress "abc123456@koors.com"
        And I enter the subject "aaaaaa"
        And I enter the message "abcdefghijklmnopqrstuvwxy"
        And I upload the file
        And I click on the submit button
        Then The confirmation popup displayed
        # When I click on the OK button of the popup
        Then The success message "Success! Your details have been submitted successfully." displayed
