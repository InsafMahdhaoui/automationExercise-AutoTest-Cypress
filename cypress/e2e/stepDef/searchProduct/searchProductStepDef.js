import { When, Then } from "cypress-cucumber-preprocessor/steps";
import SearchProductActions from "../../../pageObject/pageActions/searchProduct/searchProduct";

When("I enter product to Search {string}", productName => {
  SearchProductActions.inputProductName(productName);
});
When("I click on search button", () => {
  SearchProductActions.submitBtnClick();
});

Then("All the displayed products names contains {string}", productName => {
  SearchProductActions.verifySearchResult(productName);
});
