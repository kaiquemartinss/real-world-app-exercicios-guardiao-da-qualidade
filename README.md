# 🧭 Guardião da Qualidade | Real World App - Cypress Tests

Este projeto foi desenvolvido como parte do curso **[Guardião da Qualidade](https://www.guardiaodaqualidade.com.br/)**, com o objetivo de aplicar na prática os conceitos de **automação de testes** utilizando o **Cypress.io** em um ambiente realista de aplicação web.

---

## 💡 Sobre o Projeto

O **Real World App (RWA)** é um aplicativo criado pela equipe do **Cypress** para demonstrar o uso de métodos, padrões e fluxos reais de testes.  
Inspirado no app **Venmo**, ele permite que usuários:

- Criem uma conta;  
- Adicionem uma conta bancária;  
- Enviem e recebam dinheiro entre amigos.  

Este projeto utiliza o **RWA** como base para estudos e práticas do curso *Guardião da Qualidade*, explorando desde a criação de **casos de teste manuais** até sua **automação completa com Cypress**.

🔗 Repositório oficial do RWA: [cypress-io/cypress-realworld-app](https://github.com/cypress-io/cypress-realworld-app)

---

## 🧩 Objetivo

Aplicar os conhecimentos adquiridos no curso, desenvolvendo **casos de teste** e **scripts automatizados** para as principais funcionalidades do RWA:  
- **Login**  
- **Registro de Usuário**

Essas features são fundamentais para o funcionamento da aplicação e representam cenários clássicos de testes de autenticação e validação de formulários.

---

## 🧪 Casos de Teste Criados

| Código | Título | Descrição |
|:-------|:--------|:-----------|
| **CT001** | Login com sucesso | Verifique se é possível fazer login com um usuário válido, inserindo as informações corretas. |
| **CT002** | Login com credenciais inválidas | Garanta que o sistema exiba uma mensagem de erro ao tentar fazer login com credenciais inválidas (email ou senha incorretos). |
| **CT003** | Registro de novo usuário com sucesso | Verifique se é possível registrar um novo usuário com informações válidas. |
| **CT004** | Registro com informações incompletas | Garanta que o sistema exiba mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias. |

---

## ⚙️ Automação com Cypress

A automação foi implementada utilizando o **Cypress.io**, cobrindo os cenários de login e registro descritos acima.

### Estrutura dos testes


