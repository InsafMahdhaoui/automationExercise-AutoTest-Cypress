class filterProductsByCategoryActions {
  categoryClick(categoryName) {
    cy.contains(categoryName)
      .should("exist")
      .should("be.visible")
      .click({ force: true });
  }

  verifSubCategoiesDisplayed(subCategoriesTitles) {
    cy.contains("div", subCategoriesTitles).should("be.visible");
  }
  subCategoryClick(subCategoryTitle) {
    //optimal solution
    cy.contains(subCategoryTitle).click({ force: true });
    // cy.get(womenProductsSelectors.subCategoryTitle).click(); //it works but i should change the value of subsection's selector every time
  }
  verifyProductsPageDisplayed(productPageTitle) {
    cy.contains(productPageTitle).should(
      "be.visible",
      "have.text",
      productPageTitle,
    );
  }
}
export default new filterProductsByCategoryActions();
