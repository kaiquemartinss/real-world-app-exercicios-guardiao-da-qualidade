class PaginaCadastro {
    listaSeletores(){
        const seletores = {
            linkPaginaCadastro: "[data-test='signup']",  
            firstNameInput: "[data-test='signup-first-name']",
            lastNameInput: "[data-test='signup-last-name']",
            usernameInput: "[data-test='signup-username']",  
            passwordInput: "[data-test='signup-password']",
            confirmPasswordInput: "[data-test='signup-confirmPassword']",
            submitButton: "[data-test='signup-submit']",
            errorMessage: "#lastName-helper-text",
            checkDisabledButton: "[data-test='signup-submit']"  
        }
        return seletores 
    } 

    acessarPaginaCadastro(){
        cy.get(this.listaSeletores().linkPaginaCadastro).click()
    }

    cadastrarUsuario(firstName, lastName, username, password, confirmPassword){
        cy.get(this.listaSeletores().firstNameInput).type(firstName)
        cy.get(this.listaSeletores().lastNameInput).type(lastName)
        cy.get(this.listaSeletores().usernameInput).type(username)
        cy.get(this.listaSeletores().passwordInput).type(password)
        cy.get(this.listaSeletores().confirmPasswordInput).type(confirmPassword)
        cy.get(this.listaSeletores().submitButton).click()
        cy.location('pathname').should('eq', '/signin')
    }   

    cadastrarUsuarioComErro(firstName, username, password, confirmPassword){
        cy.get(this.listaSeletores().firstNameInput).type(firstName)
        cy.get(this.listaSeletores().lastNameInput).click()
        cy.get(this.listaSeletores().usernameInput).type(username)
        cy.get(this.listaSeletores().passwordInput).type(password)
        cy.get(this.listaSeletores().confirmPasswordInput).type(confirmPassword)  
    }

    checarErroCadastro(){
        cy.get(this.listaSeletores().errorMessage).contains('Last Name is required')
        cy.get(this.listaSeletores().checkDisabledButton).should('be.disabled')
    }   

}

export default PaginaCadastro