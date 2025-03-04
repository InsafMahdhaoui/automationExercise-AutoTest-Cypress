class LogoutActions {
  logoutClick() {
    cy.contains("a", "Logout").click();
  }
  logoutVerif() {
    cy.url().should("include", "/login");
  }
}
export default new LogoutActions();
