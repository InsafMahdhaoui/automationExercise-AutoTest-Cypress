import { When, Then } from "cypress-cucumber-preprocessor/steps";
import productsPage from "../../../pageObject/pageActions/visitProductsPage/productsPage";

When("I click on Products button", () => {
  productsPage.productsSectionClick();
});

Then("I am on the products page and {string} displayed", pageTitle => {
  productsPage.verifProductsPageDisplayed(pageTitle);
});

Then("The table of all products displayed", () => {
  productsPage.verifyProductsTableDisplayed();
});
