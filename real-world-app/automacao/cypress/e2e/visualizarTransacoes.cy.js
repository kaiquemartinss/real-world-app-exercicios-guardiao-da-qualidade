import userData from '../fixtures/userData.json'
import PaginaLogin from '../pages/paginaLogin'
import PaginaTransacoes from '../pages/paginaTransacoes'

const paginaLogin = new PaginaLogin()
const paginaTransacoes = new PaginaTransacoes()

describe('Envio de dinheiro', () => {
  
  it('Visualizar histórico de transações com sucesso', () => {
    paginaLogin.acessarPaginaLogin()
    paginaLogin.usuarioLogin(
      userData.userSuccess.username,
      userData.userSuccess.password
    )
    paginaTransacoes.visualizarTransacoes()
  })

  it('Tentar visualizar o histórico de transações de um usuário sem transações anteriores', () => {
    paginaLogin.acessarPaginaLogin()
    paginaLogin.usuarioLogin(
      userData.userSuccess.username,
      userData.userSuccess.password
    )
    paginaTransacoes.visualizarTransacoesSemHistorico()
  })
})
