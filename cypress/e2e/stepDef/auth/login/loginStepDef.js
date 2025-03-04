import loginActions from "../../../../pageObject/pageActions/auth/login/login";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I visit the website", () => {
  loginActions.visitWebSite();
});

When("I click on SignupLogin button", () => {
  loginActions.navigateToLoginPage();
});
Then("I am on the login page", () => {
  loginActions.loginPageVerification();
});
When(
  "I enter the email {string} and the password {string}",
  (email, password) => {
    loginActions.inputCredentials(email, password);
  },
);
Then("I am on the home page and {string} displayed", () => {
  cy.contains("a", "Logout").should("be.visible");
});

Then("An error message {string} will be displayed", errorMsg => {
  loginActions.verifErrorMsg(errorMsg);
});

Then(
  "A validation message {string} will be displayed under the {string}",
  (validationMsg, field) => {
    loginActions.verifyValidationMsg(validationMsg, field);
  },
);
