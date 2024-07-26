describe('template spec', () => {
  it('Erro ao Fazer Login', () => {
    cy.visit('/')
    cy.Login()
    //cy.contains('E-mail ou senha inválidos').should('be.visible')
  })
  it('Sucesso ao Fazer Login', () => {
    cy.visit('/')
    cy.Login()
  })
})