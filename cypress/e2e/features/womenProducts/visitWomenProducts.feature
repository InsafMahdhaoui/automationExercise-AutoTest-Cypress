Feature: User visit women products

  Background:
    Given I visit the website
    When I click on SignupLogin button
    Then I am on the login page
    When I enter the email "abc123456@koors.com" and the password "abc123++"
    Then I am on the home page and "Logout" displayed

  Scenario: Visit the dresses section
    When I click on women section
    Then The subSections are displayed including "Dress Tops Saree"
    When I click on the "Dress" subsection
    Then The title of page "Women - Dress Products" displayed


  Scenario Outline: Visit the other sections
    When I click on women section
    Then The subSections are displayed including '<subsectionsTitles>'
    When I click on the '<subsectionTitle>' subsection
    Then The title of page "<PageTite>" displayed

    Examples:
      | subsectionsTitles | subsectionTitle | PageTite               |
      | Dress Tops Saree  | Tops            | Women - Tops Products  |
      | Dress Tops Saree  | Saree           | Women - Saree Products |