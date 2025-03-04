import searchProductSelectors from "../../pageElements/searchProduct/searchProduct";
class SearchProductActions {
  inputProductName(productName) {
    cy.get(searchProductSelectors.productNameInput).type(productName);
  }
  submitBtnClick() {
    cy.get(searchProductSelectors.submitBtn).click();
  }

  verifySearchResult(productName) {
    cy.get(".col-sm-9 .product-image-wrapper") //selectionner tous les produits
      .should("have.length.greaterThan", 0) //Vérifie qu'au moins un produit est affiché.
      .each($product => {
        //"each" permet de boucler sur chaque produit trouvé par cy.get().
        cy.wrap($product) //cy.wrap($product) transforme $product en un élément Cypress (pour exécuter des assertions dessus).
          .should("contain.text", productName); // Vérifie que chaque produit contient le texte
      });
  }

  // Methode 2:
  verifySearchResult(productName) {
    cy.get(".col-sm-9 .product-image-wrapper") //selectionner tous les elements avec ce selecteur
      .then($product => {
        //.then ($product) permet de recuperer ces elements en tant que cells
        const productCount = $product.length; //recuperer le nombre total des elements trouvees
        cy.log(`Nombre de produits trouvés : ${$product.length}`);
        // parcourir ces elements et faire faire l'assertions
        for (let i = 3; i <= productCount; i++) {
          cy.get(`.features_items > :nth-child(${i})`).should(
            "contain",
            productName,
          );
        }
      });
  }
}
export default new SearchProductActions();
