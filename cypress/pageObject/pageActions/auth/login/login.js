import loginSelectors from "../../../pageElements/auth/login/login";
import baseUrl from "../../../../../config.json";

class LoginActions {
  visitWebSite() {
    cy.visit("https://www.automationexercise.com/");
  }
  navigateToLoginPage() {
    cy.get(loginSelectors.signUpLoginBtn).click();
  }
  loginPageVerification() {
    cy.url().should("include", "/login");
  }
  inputCredentials(email, password) {
    cy.get(loginSelectors.inputEmail).should("exist").type(email);
    cy.get(loginSelectors.inputPassword).should("exist").type(password);
    cy.get(loginSelectors.submitBtn).should("exist").click();
  }
  verifErrorMsg(errorMsg) {
    cy.get(loginSelectors.actualErrorMsg).should("have.text", errorMsg);
  }

  verifyValidationMsg(validationMsg, field) {
    switch (field) {
      case "email":
        cy.get(loginSelectors.inputEmail) // Target the input field
          .focus() // Focus on the input field
          .blur() // Blur (lose focus) to trigger validation
          .invoke("prop", "validationMessage") // Access the browser's validation message
          .should(text => {
            expect(text).to.contain(validationMsg); // Replace with your expected message
          });
        break;
      case "password":
        cy.get(loginSelectors.inputPassword)
          .focus()
          .blur()
          .invoke("prop", "validationMessage") // Access the browser's validation message
          .should(text => {
            expect(text).to.contain(validationMsg);
          });
        break;
      default:
        throw new Error(`Unexpected field: ${field}`);
    }
    //   //cy.contains(validationMsg).should("be.visible");
    //   //cy.get(".container").contains("validationMsg").should("be.visible"); // Specify the parent element and search from this container

    //cy.get(".container") // Or a specific parent container
    //.invoke("text") // Get all text content from the element
    //.should("include", validationMsg); // Verify it contains the expected text
    // cy.contains("Please fill out this field.", { timeout: 10000 }).should("be.visible");
    // cy.xpath("//*[contains(text(), validationMsg)]").should("be.visible");
  }
}
export default new LoginActions();
