import { When, And, Then } from "cypress-cucumber-preprocessor/steps";
import logoutActions from "../../../../pageObject/pageActions/auth/logout/logout";

When("I click on logout button", () => {
  logoutActions.logoutClick();
});
Then("I m redirected to the login page", () => {
  logoutActions.logoutVerif();
});
