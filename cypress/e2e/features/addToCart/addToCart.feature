Feature: User add to cart a product

        Background:
                Given I visit the website
                When I click on SignupLogin button
                Then I am on the login page
                When I click on Products button
                Then I am on the products page and "All Products" displayed

        Scenario: Add product to the cart
                When I mouse Hover on the first product
                And I  click on Add to cart button
                Then The validation message "Added!" displayed
