# FarmaNorte

Sistema de Gestão Farmacêutica e Distribuição de Medicamentos.

## Sobre o projeto

O FarmaNorte é um projeto acadêmico de Engenharia de Software voltado à gestão de medicamentos em unidades de saúde dos municípios do Amazonas.

Seu objetivo é auxiliar no controle de estoque, na distribuição entre unidades de saúde e no registro de medicamentos dispensados aos pacientes.

## Funcionalidades previstas

- Login e autenticação.
- Cadastro de unidades de saúde.
- Cadastro de medicamentos.
- Controle de estoque.
- Registro de entradas e saídas.
- Alertas de estoque baixo.
- Painel gerencial.
- Transferências entre unidades.
- Histórico de movimentações.
- Dispensação com registro e anexo de receita médica.

## Status

Em desenvolvimento. O frontend foi migrado para React com Vite; as páginas
inicial e de login mantêm a interface e a validação local. O backend Node.js
com Express disponibiliza a rota `GET /api/health`. A tela de login consulta
essa rota utilizando Fetch API e apresenta o resultado da última verificação.
Ainda não há autenticação, banco de dados conectado ou CRUD de medicamentos.

## Tecnologias

- Frontend: React, Vite, JavaScript (JSX), HTML e CSS.
- Backend: Node.js, Express e CORS.
- Banco de dados: PostgreSQL (planejado).
- Versionamento: Git e GitHub.

## Executar localmente

Utilize Node.js compatível com as versões de Vite indicadas no `frontend/package.json`
(Node 20.19+ na linha 20 ou Node 22.12+ a partir da linha 22); prefira uma versão LTS mantida.
Abra dois terminais na raiz do projeto.

Terminal 1:

```sh
cd backend
npm ci
npm run dev
```

Teste a API em http://127.0.0.1:3000/api/health.

Terminal 2:

```sh
cd frontend
npm ci
npm run dev
```

Abra http://127.0.0.1:5173/login.html para a tela de login ou
http://127.0.0.1:5173/ para a página inicial. Não utilize Live Server
para executar o JSX. Para testar o indicador, pare o backend e recarregue
a página de login; depois inicie o backend e recarregue novamente.
O indicador não autentica usuários nem testa a conexão com PostgreSQL.

Para gerar a versão de produção do frontend, execute `npm run build` na
pasta `frontend`. `npm run preview` serve esse build localmente na porta 4173.
A configuração atual é para desenvolvimento local; publicação exigirá ajustar
os endereços e as origens permitidas.

## Versionamento

- main: versão principal e validada.
- develop: desenvolvimento e testes.
