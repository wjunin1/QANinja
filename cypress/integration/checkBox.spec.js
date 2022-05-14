it("deve marcar os top 5 filmes da marvel", () => {
  cy.Entrar('Checkboxes');

  const movies = ["avengers", "cap", "guardians", "cap3", "thor3"];

  movies.forEach(function (m) {
    cy.get(`input[name=${m}]`).click().should("be.checked");
  });
});
