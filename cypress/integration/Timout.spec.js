it("exemplo de timeout", () => {
  cy.Entrar("Timeouts :/");
  cy.get('button[type="button btn-info"]').click();
  cy.get("#firstname").should("be.visible").type("Fernando", { timeout: 7000 });
});
