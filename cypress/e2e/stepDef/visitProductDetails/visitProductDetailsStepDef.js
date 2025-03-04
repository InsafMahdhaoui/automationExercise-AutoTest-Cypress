import { When, Then } from "cypress-cucumber-preprocessor/steps";
import visitProductDetailsActions from "../../../pageObject/pageActions/visitProductDetails/visitProductDetails";
When("I click on view product button of the first product", () => {
  visitProductDetailsActions.viewDetailsClick();
});
Then("I am on the product details page", () => {
  visitProductDetailsActions.verifDetailPageDispayed();
});

Then("The product name {string} is displayed", productName => {
  visitProductDetailsActions.verifProductName(productName);
});
Then("The product category {string} is displayed", productCategory => {
  visitProductDetailsActions.verifProductCategory(productCategory);
});

Then("The product price {string} is displayed", productPrice => {
  visitProductDetailsActions.verifProductPrice(productPrice);
});

Then("The product availability {string} is displayed", productAvailability => {
  visitProductDetailsActions.verifProductAvailability(productAvailability);
});
Then("The product condition {string} is displayed", productCondition => {
  visitProductDetailsActions.verifProductCondition(productCondition);
});

Then("The product Brand {string} is displayed", productBrand => {
  visitProductDetailsActions.verifProductBrand(productBrand);
});
