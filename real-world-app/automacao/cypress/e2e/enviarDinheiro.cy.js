import userData from '../fixtures/userData.json'
import PaginaLogin from '../pages/paginaLogin'
import PaginaEnvioDinheiro from '../pages/paginaEnvioDinheiro'

const paginaLogin = new PaginaLogin()
const paginaEnvioDinheiro = new PaginaEnvioDinheiro()

describe('Envio de dinheiro', () => {
  it('Deve enviar dinheiro com sucesso', () => {
    paginaLogin.acessarPaginaLogin() 
    paginaLogin.usuarioLogin(userData.userSuccess.username, userData.userSuccess.password)
    paginaEnvioDinheiro.enviarDinheiro()
  })

  it('Enviar dinheiro com saldo insuficiente', () => {
    paginaLogin.acessarPaginaLogin() 
    paginaLogin.usuarioLogin(userData.userSuccess.username, userData.userSuccess.password)
    paginaEnvioDinheiro.enviarDinheiroSemSaldo()
  })
})