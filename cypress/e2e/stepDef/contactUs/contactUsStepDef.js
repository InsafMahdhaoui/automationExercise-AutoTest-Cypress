import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import contactUsActions from "../../../pageObject/pageActions/contactUs/contactUs";

When("I click on contact us button", () => {
  contactUsActions.contactUsBtnclick();
});

Then("I  am on the contact us page and {string} displayed", pageTitle => {
  contactUsActions.verifyContactUsPageDisplayed(pageTitle);
});
When(
  "I enter the name {string} and the email adress {string}",
  (name, email) => {
    contactUsActions.inputNameAndEmail(name, email);
  },
);

When("I enter the subject {string}", subject => {
  contactUsActions.inputSubject(subject);
});

When("I enter the message {string}", message => {
  contactUsActions.inputMessage(message);
});

When("I upload the file", () => {
  contactUsActions.uploadFile();
});

When("I click on the submit button", () => {
  contactUsActions.submitClick();
});

Then("The confirmation popup displayed", () => {
  contactUsActions.popupConfim();
});

Then("The success message {string} displayed", successMessage => {
  contactUsActions.verifySuccessMessageDisplayed(successMessage);
});
