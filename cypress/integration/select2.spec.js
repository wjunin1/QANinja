describe("select 2", () => {
  before(() => {
    cy.Entrar("Select2");
  });

  it("deve selecionar apenas 1", () => {
    cy.get(".select2-selection--single").click();
    cy.contains(".select2-results__option", "Cypress").click();
  });

  it("Escolhar 1 ou mais", () => {
    const frameworks = ["Cypress", "Robot Framework", "Nightwatch.js"];

    frameworks.forEach(function (f) {
      cy.get(".select2-selection--multiple").click();
      cy.contains(".select2-results__option", f).click();
    });
  });
});
