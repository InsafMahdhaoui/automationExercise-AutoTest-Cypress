import contactUsSelectors from "../../pageElements/contactUs/contactUs";
class contactUsActions {
  contactUsBtnclick() {
    cy.get(contactUsSelectors.contactUsBtn).click();
  }
  verifyContactUsPageDisplayed(pageTitle) {
    cy.contains("H2", pageTitle).should("be.visible");
  }
  inputNameAndEmail(name, email) {
    cy.get(contactUsSelectors.nameInput).type(name);
    cy.get(contactUsSelectors.emailAdressInput).type(email);
  }
  inputSubject(subject) {
    cy.get(contactUsSelectors.subjectInput).type(subject);
  }
  inputMessage(message) {
    cy.get(contactUsSelectors.messageInput).type(message);
  }
  uploadFile() {
    //uploading file from computer desktop
    // const filePath = "C:\\Users\\insaf\\Downloads\\courseCover.png";
    // cy.get(contactUsSelectors.selectFileBtn).selectFile(filePath, {
    //   force: true,
    // });

    //uploading file from project
    cy.get(contactUsSelectors.selectFileBtn).attachFile("contactUsFile.txt");
  }

  submitClick() {
    cy.get(contactUsSelectors.submitBtn).click();
  }
  popupConfim() {
    cy.on("window:confirm", text => {
      expect(text).to.equal("Are you sure?");
      return true; // Clicks "OK"
    });
  }
  verifySuccessMessageDisplayed(successMsg) {
    cy.get(contactUsSelectors.successMsg)
      .invoke("text")
      .should("equal", successMsg);
  }
}
export default new contactUsActions();
