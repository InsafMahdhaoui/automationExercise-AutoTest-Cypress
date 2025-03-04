import WomenProductsActions from "../../../pageObject/pageActions/womenProducts/visitWomenProducts";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
When("I click on women section", () => {
  WomenProductsActions.womenSectionClick();
});

Then("The subSections are displayed including {string}", subSectionsTitles => {
  WomenProductsActions.verifSubsuctionsDisplayed(subSectionsTitles);
});

When("I click on the {string} subsection", subsuctionTitle => {
  WomenProductsActions.subsuctionClick(subsuctionTitle);
});
Then("The title of page {string} displayed", productPageTitle => {
  WomenProductsActions.verifyProductsPageDisplayed(productPageTitle);
});
