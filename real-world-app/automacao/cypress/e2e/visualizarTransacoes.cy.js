import userData from '../fixtures/userData.json'

describe('Envio de dinheiro', () => {
  it('Visualizar histórico de transações com sucesso', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get("[data-test='signin-username']").type(userData.userSuccess.username)
    cy.get("[data-test='signin-password']").type(userData.userSuccess.password)
    cy.get("[data-test='signin-submit']").click()
    cy.get("[data-test='main']").contains('Public')
    cy.get("[data-test='nav-personal-tab']").click()
    cy.get("[data-test='main']").contains('Personal')
  })

  it('Tentar visualizar o histórico de transações de um usuário sem transações anteriores', () => {
    cy.visit('http://localhost:3000/signin')
    //Cadastrar Usuário novo
    cy.get("[data-test='signup']").click()
    cy.get("[data-test='signup-first-name']").type(userData.newUserSuccess.firstName)
    cy.get("[data-test='signup-last-name']").type(userData.newUserSuccess.lastName)
    cy.get("[data-test='signup-username']").type(userData.newUserSuccess.username)
    cy.get("[data-test='signup-password']").type(userData.newUserSuccess.password)
    cy.get("[data-test='signup-confirmPassword']").type(userData.newUserSuccess.password)
    cy.get("[data-test='signup-submit']").click()
    cy.location('pathname').should('eq', '/signin') 

    //Fazer login com o usuário novo
    cy.get("[data-test='signin-username']").type(userData.newUserSuccess.username)
    cy.get("[data-test='signin-password']").type(userData.newUserSuccess.password)
    cy.get("[data-test='signin-submit']").click()
    cy.get("[data-test='main']").contains('Public')
    cy.get("[data-test='nav-personal-tab']").click()
    cy.get("[data-test='main']").contains('Personal')
  })

})