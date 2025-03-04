import womenProductsSelectors from "../../pageElements/womenProducts/visitWomenProducts";
class WomenProductsActions {
  womenSectionClick() {
    cy.get(womenProductsSelectors.womenSectionClick)
      .should("exist")
      .should("be.visible")
      .click({ force: true });
  }

  verifSubsuctionsDisplayed(subsectionTitle) {
    cy.get(womenProductsSelectors.subsectionsTitles)
      .invoke("text")
      .should("contain", subsectionTitle);
  }
  subsuctionClick(subsectionTitle) {
    //optimal solution
    cy.contains(subsectionTitle).click();
    // cy.get(womenProductsSelectors.subsectionTitle).click(); //it works but i should change the value of subsection's selector every time
  }
  verifyProductsPageDisplayed(productPageName) {
    cy.get(womenProductsSelectors.productsPageTitle).should(
      "have.text",
      productPageName,
    );
  }
}
export default new WomenProductsActions();
