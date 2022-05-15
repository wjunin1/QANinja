const niceIFrame = function () {
  return cy
    .get("#weareqaninja")
    .its("0.contentDocument.body")
    .should("not.be.empty")
    .then(cy.wrap);
};

it("Deve validar o total de seguidores", () => {
  cy.Entrar("iFrame Bom");

  niceIFrame()
    .contains(".FollowerCountText", "6,603 followers")
    .should("be.visible");
});
