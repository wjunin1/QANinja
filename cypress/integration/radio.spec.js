it('deve marcar thor ragnarok', () => {
    cy.Entrar('Radio Buttons');
    cy.get('input[value=avengers]').click().should('be.checked');
});