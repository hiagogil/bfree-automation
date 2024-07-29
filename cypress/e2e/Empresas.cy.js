import { faker } from "@faker-js/faker";
const empresas = {
  id_number: faker.number.int({ max: 10000 }),
  enterprise_name: faker.company.bsAdjective()
}
describe('Empresas', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.Login()
  })
    it('Cadastro de Empresas', () => {  
      cy.contains('Empresas').eq(0).click()
        cy.get('input[name="cpn_cli_cod"]').type(empresas.id_number)
        cy.get('input[name="cpn_name"]').type(empresas.enterprise_name)
        cy.get('[data-cy="companyform-submit-button"]').click()
        cy.contains('Operação realizada com sucesso!').should('be.visible')
    });
    it('Editar Empresa', () => {
      cy.intercept('GET', '/api-stage/companies/procurar/**').as('getCompanies')
      cy.contains('Empresas').eq(0).click()
      cy.get(':nth-child(1) > .sc-bmzXxz > a > .btn').click()
      cy.wait('@getCompanies')
      cy.get('input[name="cpn_cli_cod"]').clear().type(empresas.id_number)
      cy.get('input[name="cpn_name"]').clear().type(empresas.enterprise_name)
      cy.get('[data-cy="companyform-submit-button"]').click()
      cy.contains('Operação realizada com sucesso!').should('be.visible')
    });
    it('Erro ao excluir uma empresa', () => {
      cy.contains('Empresas').eq(0).click()
      cy.get('.sc-hmdnzv > :nth-child(1) > .sc-bmzXxz > :nth-child(2)').click()
      cy.contains('button', 'Sim').click()
      cy.contains('Não é possivel excluir o registro, pois o mesmo possui ligação com outras tabelas!').should('be.visible')
    });
    it('Sucesso ao excluir uma empresa', () => {
      cy.contains('Empresas').eq(0).click()
      cy.get(':nth-child(4) > .sc-bmzXxz > :nth-child(2)').click()
      cy.contains('button', 'Sim').click()
      cy.contains('Operação realizada com sucesso!').should('be.visible')
    });
});
 
 