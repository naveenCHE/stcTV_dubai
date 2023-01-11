Cypress.Commands.add('selectLanguage', (att, lan)=> {
    cy.get(`a[href="/sa-${att}"]`).contains(lan).should('be.visible').click();
    cy.url().should('include', `/sa-${att}`);
    cy.get('h2').contains('Choose Your Plan').should('be.visible');
});

Cypress.Commands.add('country', (id, name) => {
    cy.get('.head-links>.country-current').click();
    cy.get('#country-title').should('contain', 'Select Your Country');
    cy.get(`a[id="${id}"]`).contains(name).click();
    cy.url().should('include', `bh-${en}`);
});