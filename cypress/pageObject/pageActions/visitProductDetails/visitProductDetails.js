import productDetailsSelectors from "../../pageElements/visitProductDetails/visitProductDetails";

class visitProductDetailsActions {
  viewDetailsClick() {
    cy.get(productDetailsSelectors.viewDetailsBtn).click();
  }

  verifDetailPageDispayed() {
    cy.url().should("include", productDetailsSelectors.detailsPageUrl);
  }
  verifProductName(productName) {
    cy.contains("H2", productName);
  }
  verifProductCategory(productCategory) {
    cy.contains("p", productCategory);
  }
  verifProductPrice(productPrice) {
    cy.contains("span", productPrice);
  }
  verifProductAvailability(productAvailability) {
    cy.contains("p", productAvailability);
  }
  verifProductCondition(productCondition) {
    cy.contains("p", productCondition);
  }
  verifProductBrand(productBrand) {
    cy.contains("p", productBrand);
  }
}
export default new visitProductDetailsActions();
