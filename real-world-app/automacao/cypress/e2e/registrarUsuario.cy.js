import userData from '../fixtures/userData.json'
import PaginaLogin from '../pages/paginaLogin'
import PaginaCadastro from '../pages/paginaCadastro'

const paginaLogin = new PaginaLogin()
const paginaCadastro = new PaginaCadastro()

describe('Registro de novo usuário', () => {
  it('Registro de novo usuário com sucesso', () => {
    paginaLogin.acessarPaginaLogin()

    paginaCadastro.acessarPaginaCadastro()
    paginaCadastro.cadastrarUsuario(
      userData.newUserSuccess.firstName,
      userData.newUserSuccess.lastName,
      userData.newUserSuccess.username,
      userData.newUserSuccess.password,
      userData.newUserSuccess.confirmPassword) 
  })

  it('Registrar um novo usuário com informações incompletas', () => {
    paginaLogin.acessarPaginaLogin()

    paginaCadastro.acessarPaginaCadastro()
    paginaCadastro.cadastrarUsuarioComErro(
      userData.newUserSuccess.firstName,
      userData.newUserSuccess.username,
      userData.newUserSuccess.password,
      userData.newUserSuccess.confirmPassword) 
    paginaCadastro.checarErroCadastro()
  })
  
})