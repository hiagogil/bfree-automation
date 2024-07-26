import { faker } from "@faker-js/faker";

describe('Empresas', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.Login()
    
  })
    it('Cadastro de Empresas', () => {
      const empresas = {
        id_number: faker.number.int({ max: 10000 }),
        enterprise_name: faker.company.bsAdjective()
      }
     cy.get('.MuiListItemIcon-root.css-1f8bwsm').eq(0).click()
        cy.get('.btn.btn-register').click()
        cy.get('input[name="cpn_cli_cod"]').type(empresas.id_number)
        cy.get('input[name="cpn_name"]').type(empresas.enterprise_name)
        cy.get('[data-cy="companyform-submit-button"]').click()
        cy.contains('Operação realizada com sucesso!').should('be.visible')
    });
  
 
});
 
 