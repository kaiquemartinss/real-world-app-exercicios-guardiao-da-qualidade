import userData from '../fixtures/userData.json'

describe('Login de usuário', () => {
  it('Login com sucesso', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get("[data-test='signin-username']").type(userData.userSuccess.username)
    cy.get("[data-test='signin-password']").type(userData.userSuccess.password)
    cy.get("[data-test='signin-submit']").click()
    cy.get("[data-test='main']").contains('Public')
  })

  it('Login com credenciais inválidas', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get("[data-test='signin-username']").type(userData.userFail.username)
    cy.get("[data-test='signin-password']").type(userData.userFail.password)
    cy.get("[data-test='signin-submit']").click()
    cy.get("[data-test='signin-error']").contains('Username or password is invalid')
  })
})