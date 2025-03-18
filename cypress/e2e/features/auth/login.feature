Feature: User Login with Valid and invalid credentials

    Background:
        Given I visit the website
        When I click on SignupLogin button
        Then I am on the login page


    Scenario: Login with valid credentials

        When I enter the email "abc123456@koors.com" and the password "abc123++"
        Then I am on the home page and "Logout" displayed

    Scenario Outline: Login with invalid credentials

        When I enter the email "<email>" and the password "<password>"
        Then An error message "<errorMsg>" will be displayed

        Examples:
            | email               | password  | errorMsg                             |
            | aa#$12@gmail.com    | abc123++  | Your email or password is incorrect! |
            | abc123456@koors.com | @##$1254+ | Your email or password is incorrect! |


    Scenario Outline: Login with missing email or password
        When I enter the email "<email>" and the password "<password>"
        Then A validation message "<validationMsg>" will be displayed under the "<field>"

        Examples:
            | email               | password    | validationMsg                 | field    |
            | {backspace}         | abc123++    | Veuillez renseigner ce champ. | email    |
            | abc123456@koors.com | {backspace} | Veuillez renseigner ce champ. | password |