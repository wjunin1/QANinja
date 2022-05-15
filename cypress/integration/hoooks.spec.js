describe("suite de testes", () => {
  before(function () {
    cy.log("Aqui temos algo que roda antes de TODOS os testes");
  });

  beforeEach(() => {
    cy.log("Aqui temos algo que roda antes de ENTRE os testes");
  });
  it("teste 1", () => {
    cy.log("testando o teste 1");
  });

  it("teste 2", () => {
    cy.log("testando o teste 2");
  });

  it("teste 3", () => {
    cy.log("testando o teste 3");
  });
  after(() => {
    cy.log("Aqui temos algo que roda antes de DEPOIS os testes");
  });
});
