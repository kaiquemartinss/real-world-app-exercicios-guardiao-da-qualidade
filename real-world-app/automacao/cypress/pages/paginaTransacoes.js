class PaginaTransacoes {
    listaSeletores(){
        const seletores = {
            acessarAbaTransacoes: "[data-test='nav-personal-tab']",  
            validarPaginaTransacoes: "[data-test='main']",
            mudarDataTransacoes: "[data-test='transaction-list-filter-date-range-button']",
            diaAtual: ".react-calendar__tile--now",
            msgNoTransactions: "[data-test='empty-list-header']"
        }
        return seletores 
    } 

    visualizarTransacoes(){
        cy.get(this.listaSeletores().acessarAbaTransacoes).click()
        cy.get(this.listaSeletores().validarPaginaTransacoes).contains('Personal')
    }   

    visualizarTransacoesSemHistorico(){
        cy.get(this.listaSeletores().acessarAbaTransacoes).click()
        cy.get(this.listaSeletores().mudarDataTransacoes).click({force: true})
        cy.get(this.listaSeletores().diaAtual).click({force: true})
        cy.get(this.listaSeletores().diaAtual).click({force: true})
        cy.get(this.listaSeletores().msgNoTransactions).contains('No Transactions')
    }

}

export default PaginaTransacoes