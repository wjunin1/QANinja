it('Deve exibir a home page', function () {
    cy.visit('https://training-wheels-qaninja.herokuapp.com/');
    cy.title().should('eq', 'Training Wheels | QAninja');
    cy.get('div > div > a > img').should('be.visible');
    cy.get('ul[class=menu-list]').should('be.visible');
});