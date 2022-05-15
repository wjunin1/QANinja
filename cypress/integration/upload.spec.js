it("Enviar arquivo", () => {
  cy.Entrar("Upload de imagem");

  const imageFile = "cypress/fixtures/wallpaper.jpg";

  cy.get("#file-upload").selectFile(imageFile, { force: true });
  cy.get("#file-submit").click();
  cy.get("img[src='/uploads/wallpaper.jpg']", { timeout: 7000 }).should(
    "be.visible"
  );
});
