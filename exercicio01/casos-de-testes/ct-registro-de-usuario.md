| **ID do Caso de Teste** | **CT003 - Registro de novo usuário com sucesso** |
|--------------------------|--------------------------------------------------|
| **Descrição** | Verifique se é possível registrar um novo usuário com informações válidas. |
| **Pré-condições** | Usuário não tem acesso ao sistema. |
| **Passo a passo** | 1. Acessar o endereço `http://localhost:3000/signin`<br>2. Clicar no link **"Don't have an account? Sign Up"**<br>3. Cadastrar um novo usuário preenchendo os campos **First Name / Last Name / Username / Password / Confirm Password**<br>4. Clicar no botão **Sign up** |
| **Resultado esperado** | Usuário é redirecionado para a tela de login.<br>Usuário redirecionado para o endereço `http://localhost:3000/signin` |
| **Suíte de teste** | Tela de cadastro |
| **Ambiente de teste** | Web - Navegador Google Chrome Versão 138.0.7204.168 (Versão oficial) |
| **Resultado encontrado** | O mesmo que o resultado esperado |
| **Status** | ✅ Passou |


---

| **ID do Caso de Teste** | **CT004 - Registrar um novo usuário com informações incompletas** |
|--------------------------|------------------------------------------------------------------|
| **Descrição** | Garanta que o sistema exiba mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias. |
| **Pré-condições** | Usuário não tem acesso ao sistema. |
| **Passo a passo** | 1. Acessar o endereço `http://localhost:3000/signin`<br>2. Clicar no link **"Don't have an account? Sign Up"**<br>3. Cadastrar um novo usuário preenchendo os campos **First Name / Last Name / Username / Password**, mas deixando o campo **Confirm Password** em branco<br>4. Clicar no botão **Sign up** |
| **Resultado esperado** | Mensagem de erro é exibida.<br>Deve ser exibida mensagem de erro. |
| **Suíte de teste** | Tela de cadastro |
| **Ambiente de teste** | Web - Navegador Google Chrome Versão 138.0.7204.168 (Versão oficial) |
| **Resultado encontrado** | Botão **Sign up** fica bloqueado se todos os campos não forem preenchidos corretamente |
| **Status** | ⛔ Bloqueado |
