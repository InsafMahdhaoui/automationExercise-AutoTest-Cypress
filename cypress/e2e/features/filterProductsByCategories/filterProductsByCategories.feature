Feature: User filter products by categories

    Background:
        Given I visit the website
        When I click on SignupLogin button
        Then I am on the login page
        When I enter the email "abc123456@koors.com" and the password "abc123++"
        Then I am on the home page and "Logout" displayed

    Scenario: Visit the category - Women
        When I click on "Women" category
        Then The subCategories are displayed including "Dress Tops Saree"
        When I click on the "Dress" subsection
        Then The title of page "Women - Dress Products" displayed


    Scenario Outline: Visit the other categories
        When I click on "<category>" category
        Then The subCategories are displayed including '<subCategoriesTitles>'
        When I click on the '<subCategoryTitle>' subsection
        Then The title of page "<PageTite>" displayed

        Examples:
            | category | subCategoriesTitles | subCategoryTitle | PageTite                      |
            | Women    | Dress Tops Saree    | Tops             | Women - Tops Products         |
            | Women    | Dress Tops Saree    | Saree            | Women - Saree Products        |
            | Men      | Tshirts Jeans       | Tshirts          | Men - Tshirts Products        |
            | Men      | Tshirts Jeans       | Jeans            | Men - Jeans Products          |
            | Kids     | Dress Tops & Shirts | Tops & Shirts    | Kids - Tops & Shirts Products |
            | Kids     | Dress Tops & Shirts | Dress            | Kids - Dress Products         |



    Scenario: Navigate between categories
        When I click on "Men" category
        Then The subCategories are displayed including "Tshirts Jeans"
        When I click on the "Tshirts" subsection
        Then The title of page "Men - Tshirts Products" displayed
        When I click on "Women" category
        Then The subCategories are displayed including "Dress Tops Saree"
        When I click on the "Tops" subsection
        Then The title of page "Women - Tops Products" displayed




