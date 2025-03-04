import allProductsPageSelectors from "../../pageElements/visitProductsPage/productsPage";

class ProductsPage {
  productsSectionClick() {
    cy.get(allProductsPageSelectors.productsSection).click();
  }
  verifProductsPageDisplayed(pageTitle) {
    cy.get(allProductsPageSelectors.productsPageTitle).should(
      "have.text",
      pageTitle,
    );
  }
  verifyProductsTableDisplayed() {
    cy.get(allProductsPageSelectors.productsTable).should("be.visible");
  }
}
export default new ProductsPage();
