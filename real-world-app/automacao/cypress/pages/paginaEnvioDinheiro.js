class PaginaEnvioDinheiro {
    listaSeletores(){
        const seletores = {
            btnNovaTransacao: "[data-test='nav-top-new-transaction']",  
            selecionarUsuario: "[data-test='user-list-item-GjWovtg2hr']",
            inputValorTransacao: "[data-test='transaction-create-amount-input']",
            descricaoTransacao: "[data-test='transaction-create-description-input']",
            submitButton: "[data-test='transaction-create-submit-payment']",
            validarTransacao: "[data-test='alert-bar-success']"
        }
        return seletores 
    } 

    enviarDinheiro(){
        cy.get(this.listaSeletores().btnNovaTransacao).click()
        cy.get(this.listaSeletores().selecionarUsuario).click({force: true})
        cy.get(this.listaSeletores().inputValorTransacao).type('50')
        cy.get(this.listaSeletores().descricaoTransacao).type('Test payment')
        cy.get(this.listaSeletores().submitButton).click()
        cy.get(this.listaSeletores().validarTransacao).contains('Transaction Submitted!')
   }

   enviarDinheiroSemSaldo(){
        cy.get(this.listaSeletores().btnNovaTransacao).click()
        cy.get(this.listaSeletores().selecionarUsuario).click({force: true})
        cy.get(this.listaSeletores().inputValorTransacao).type('50000')
        cy.get(this.listaSeletores().descricaoTransacao).type('Test payment')
        cy.get(this.listaSeletores().submitButton).click()
   }

}

export default PaginaEnvioDinheiro