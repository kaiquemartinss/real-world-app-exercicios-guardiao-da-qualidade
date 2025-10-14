import userData from '../fixtures/userData.json'

describe('Registro de novo usuário com sucesso', () => {
  it('Deve registrar um novo usuário com informações válidas', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get("[data-test='signup']").click()
    cy.get("[data-test='signup-first-name']").type(userData.newUserSuccess.firstName)
    cy.get("[data-test='signup-last-name']").type(userData.newUserSuccess.lastName)
    cy.get("[data-test='signup-username']").type(userData.newUserSuccess.username)
    cy.get("[data-test='signup-password']").type(userData.newUserSuccess.password)
    cy.get("[data-test='signup-confirmPassword']").type(userData.newUserSuccess.password)
    cy.get("[data-test='signup-submit']").click()
    cy.location('pathname').should('eq', '/signin') 
  })

  it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get("[data-test='signup']").click()
    cy.get("[data-test='signup-first-name']").type(userData.newUserSuccess.firstName)
    cy.get("[data-test='signup-last-name']").click() 
    cy.get("[data-test='signup-username']").type(userData.newUserSuccess.username)
    cy.get("[data-test='signup-password']").type(userData.newUserSuccess.password)
    cy.get("[data-test='signup-confirmPassword']").type(userData.newUserSuccess.password)
    cy.get("#lastName-helper-text").contains('Last Name is required')
    cy.get("[data-test='signup-submit']").should('be.disabled')
  })
})