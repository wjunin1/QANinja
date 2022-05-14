it("selecionar no combo tony stark", () => {
  cy.Entrar("Select (combo-box)");
  cy.get("#avengerList").select("Tony Stark");
});

it("selecionar no combo tony stark sem id", () => {
  cy.Entrar("Select (combo-box)");
  cy.contains("option", "Selecione um personagem")
    .parent()
    .select("Tony Stark")
    .should("have.value", "3");
});
