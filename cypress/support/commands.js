Cypress.Commands.add ('Login' , () => {
    cy.origin('https://accounts.testzz.ninja', () => {
        cy.get('#email-login').type('qa-next@eduzz.com')
        cy.get('#password-login').type('QANext123456!')
        cy.get('.MuiGrid-spacing-xs-3 > .MuiGrid-container > .MuiGrid-root').click()
});
})

