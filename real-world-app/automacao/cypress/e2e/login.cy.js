import userData from '../fixtures/userData.json'
import PaginaLogin from '../pages/paginaLogin'

const paginaLogin = new PaginaLogin()

describe('Login de usuário', () => {
  it('Login com sucesso', () => { 
    paginaLogin.acessarPaginaLogin()
    paginaLogin.usuarioLogin(userData.userSuccess.username, userData.userSuccess.password)
  })

  it('Login com credenciais inválidas', () => {
    paginaLogin.acessarPaginaLogin()
    paginaLogin.usuarioLogin(userData.userFail.username, userData.userFail.password)
    paginaLogin.checarAcessoInvalido()
  })
})