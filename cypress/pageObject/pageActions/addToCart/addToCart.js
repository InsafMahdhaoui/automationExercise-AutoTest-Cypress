import addToCartSelectors from "../../pageElements/addToCart/addToCart";
class addToCartActions {
  productMouseOver() {
    cy.get(addToCartSelectors.firstProductSelector).trigger("mouseover");
  }
  addToCartClick() {
    cy.get(addToCartSelectors.addToCartBtn).click();
  }
  addingVerification(verifMsg) {
    cy.get(addToCartSelectors.validationMsg).should("have.text", verifMsg);
  }
}
export default new addToCartActions();
