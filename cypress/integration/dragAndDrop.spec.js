describe("", () => {
  it("deve arrastar o cypress para a caixinha do node", () => {
    cy.Entrar("Drag and Drop");

    const dataTransfer = new DataTransfer();

    cy.get("img[alt=Cypress]").trigger("dragstart", { dataTransfer });
    cy.get(".nodejs figure[draggable=true]").trigger("drop", { dataTransfer });
  });

  it("deve arrastar o robot para a caixinha do phyton", () => {

    const dataTransfer = new DataTransfer();

    cy.get("img[alt='Robot Framework']").trigger("dragstart", { dataTransfer });
    cy.get(".python figure[draggable=true]").trigger("drop", { dataTransfer });
  });
});
