Feature: User visit the product deatils page

    Background:
        Given I visit the website
        When I click on SignupLogin button
        Then I am on the login page
        When I enter the email "abc123456@koors.com" and the password "abc123++"
        Then I am on the home page and "Logout" displayed
        When I click on Products button
        Then I am on the products page and "All Products" displayed
        And The table of all products displayed

    Scenario: Visit product details page
        When I click on view product button of the first product
        Then I am on the product details page
        And The product name "Blue Top" is displayed
        And The product category "Women > Tops" is displayed
        And The product price "Rs. 500" is displayed
        And The product availability "In Stock" is displayed
        And The product condition "New" is displayed
        And The product Brand "Polo" is displayed



