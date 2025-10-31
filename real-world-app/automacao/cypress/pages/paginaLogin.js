class PaginaLogin{
    listaSeletores(){
        const seletores = {
            usernameInput: "[data-test='signin-username']",
            passwordInput: "[data-test='signin-password']",   
            submitButton: "[data-test='signin-submit']",
            errorMessage: "[data-test='signin-error']",
            mainPage: "[data-test='main']"    
        }
        return seletores 
    } 

    acessarPaginaLogin(){
        cy.visit('/signin')
    }
    
    usuarioLogin(username, password){
        cy.get(this.listaSeletores().usernameInput).type(username)
        cy.get(this.listaSeletores().passwordInput).type(password)
        cy.get(this.listaSeletores().submitButton).click()
    }

    checarAcessoInvalido(){
        cy.get(this.listaSeletores().errorMessage).contains('Username or password is invalid')
    }

}

export default PaginaLogin