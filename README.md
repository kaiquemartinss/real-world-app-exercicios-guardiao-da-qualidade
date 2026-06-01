# 🔷 Real World App — Automação de Testes com Cypress

![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node](https://img.shields.io/badge/Node.js-22.15.0-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Status](https://img.shields.io/badge/Status-Concluído-brightgreen?style=for-the-badge)

---

## 📋 Sobre o Projeto

O **Real World App (RWA)** é uma aplicação criada pela equipe do Cypress para demonstrar o uso de métodos, padrões e fluxos reais de testes automatizados.

Inspirado no app **Venmo**, o RWA permite que usuários criem conta, adicionem conta bancária e realizem transferências de dinheiro entre si.

Este projeto foi desenvolvido como parte do curso **Guardião da Qualidade** da LumeStack, com o objetivo de aplicar na prática os conceitos de automação de testes em um ambiente realista — cobrindo desde a criação de casos de teste manuais até a automação completa com Cypress.

🔗 Repositório oficial do RWA: [cypress-io/cypress-realworld-app](https://github.com/cypress-io/cypress-realworld-app)

---

## 🎯 Funcionalidades Testadas

| Funcionalidade | Tipo de Teste |
|---|---|
| Login | Manual + Automatizado |
| Registro de Usuário | Manual + Automatizado |
| Envio de Dinheiro | Manual + Automatizado |
| Visualização de Transações | Manual + Automatizado |

---

## 🧪 Casos de Teste

| ID | Cenário | Status |
|---|---|---|
| CT001 | Login com sucesso | ✅ |
| CT002 | Login com credenciais inválidas | ✅ |
| CT003 | Registro de novo usuário | ✅ |
| CT004 | Registrar um novo usuário já existente | ✅ |
| CT005 | Enviar dinheiro com sucesso | ✅ |
| CT006 | Enviar dinheiro com saldo insuficiente | ✅ |
| CT007 | Visualizar histórico de transações | ✅ |
| CT008 | Visualizar histórico com filtros | ✅ |

---

## 🐛 Bug Report

### BUG01 — Transferência com saldo insuficiente ou zerado

**Ambiente:** Real World App  
**Severidade:** Alta  
**Prioridade:** Alta

**Descrição:**  
Ao realizar uma transferência com um valor maior do que o saldo disponível em conta, ou com saldo zerado, o sistema exibe a mensagem de sucesso `"Transaction Submitted!"` em vez de bloquear a operação e informar o usuário sobre o saldo insuficiente.

**Passos para reproduzir:**
1. Fazer login com um usuário com saldo zerado ou insuficiente
2. Acessar a funcionalidade de envio de dinheiro
3. Informar um valor superior ao saldo disponível
4. Confirmar a transação

**Resultado Esperado:** Mensagem de erro informando saldo insuficiente e bloqueio da transação  
**Resultado Obtido:** Mensagem `"Transaction Submitted!"` é exibida e a transação é processada indevidamente

---

## 🗂️ Estrutura do Projeto

```
real-world-app/
├── automacao/
│   └── cypress/
│       ├── e2e/
│       │   ├── enviarDinheiro.cy.js
│       │   ├── login.cy.js
│       │   ├── registrarUsuario.cy.js
│       │   └── visualizarTransacoes.cy.js
│       ├── fixtures/
│       │   └── userData.json
│       ├── pages/
│       │   ├── paginaCadastro.js
│       │   ├── paginaEnvioDinheiro.js
│       │   ├── paginaLogin.js
│       │   └── paginaTransacoes.js
│       └── support/
├── bug-report/
│   └── BUG01 - Transferencia...
├── casos-de-testes/
│   ├── CT001 a CT008
├── evidencias/
│   ├── BUG01.gif
│   └── CT001 a CT008.gif
├── cypress.config.js
└── package.json
```

---

## 🏗️ Padrões e Boas Práticas

- **Page Objects** — separação entre lógica de interação e specs de teste
- **Fixtures** — dados de teste centralizados em `userData.json`
- **Casos de Teste Manuais** — documentados antes da automação (CT001–CT008)
- **Bug Report** — documentado no padrão profissional com severidade e passos para reproduzir
- **Evidências em GIF** — gravações de todos os fluxos testados

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos

- [Node.js v22.15.0](https://nodejs.org/)
- npm (já incluso com o Node)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/kaiquemartinss/real-world-app-exercicios-guardiao-da-qualidade.git

# Acesse a pasta do projeto
cd real-world-app-exercicios-guardiao-da-qualidade/real-world-app

# Instale as dependências
npm install
```

### Subindo a aplicação

```bash
npm run start
```

### Executando os testes

```bash
# Modo interativo (interface gráfica do Cypress)
npx cypress open

# Modo headless (linha de comando)
npx cypress run
```

---

## 📸 Evidências

Os GIFs de execução de cada cenário estão disponíveis na pasta [`evidencias/`](./evidencias/).

---

## 👨‍💻 Autor

**Kaique Martins**  
Estudante de QA | Curso Guardião da Qualidade — LumeStack

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kaiquemartins/)
