import userData from '../fixtures/userData.json'

describe('Envio de dinheiro', () => {
  it('Deve enviar dinheiro com sucesso', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get("[data-test='signin-username']").type(userData.userSuccess.username)
    cy.get("[data-test='signin-password']").type(userData.userSuccess.password)
    cy.get("[data-test='signin-submit']").click()
    cy.get("[data-test='main']").contains('Public')
    cy.get("[data-test='nav-top-new-transaction']").click()
    cy.get("[data-test='user-list-item-GjWovtg2hr']").click()
    cy.get("[data-test='transaction-create-amount-input']").type('50')
    cy.get("[data-test='transaction-create-description-input']").type('Test payment')
    cy.get("[data-test='transaction-create-submit-payment']").click()
    cy.get("[data-test='alert-bar-success']").contains('Transaction Submitted!')
  })

  it('Enviar dinheiro com saldo insuficiente', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get("[data-test='signin-username']").type(userData.userSuccess.username)
    cy.get("[data-test='signin-password']").type(userData.userSuccess.password)
    cy.get("[data-test='signin-submit']").click()
    cy.get("[data-test='main']").contains('Public')
    cy.get("[data-test='nav-top-new-transaction']").click()
    cy.get("[data-test='user-list-item-GjWovtg2hr']").click()
    cy.get("[data-test='transaction-create-amount-input']").type('50000')
    cy.get("[data-test='transaction-create-description-input']").type('Test payment')
    cy.get("[data-test='transaction-create-submit-payment']").click()
  })
})