import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import addToCart from "../../../pageObject/pageActions/addToCart/addToCart";

When("I mouse Hover on the first product", () => {
  addToCart.productMouseOver();
});

When("I  click on Add to cart button", () => {
  addToCart.addToCartClick();
});

Then("The validation message {string} displayed", verifMsg => {
  addToCart.addingVerification(verifMsg);
});
