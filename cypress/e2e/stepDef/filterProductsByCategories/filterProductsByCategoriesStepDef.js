import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import filterProductsByCategories from "../../../pageObject/pageActions/filterProductsByCategories/filterProductsByCategories";
When("I click on {string} category", categoryName => {
  filterProductsByCategories.categoryClick(categoryName);
});
Then(
  "The subCategories are displayed including {string}",
  subSectionsTitles => {
    filterProductsByCategories.verifSubCategoiesDisplayed(subSectionsTitles);
  },
);
When("I click on the {string} subsection", subsectionTitle => {
  filterProductsByCategories.subCategoryClick(subsectionTitle);
});
Then("The title of page {string} displayed", productPageTitle => {
  filterProductsByCategories.verifyProductsPageDisplayed(productPageTitle);
});
