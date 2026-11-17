# Front-end FarmaNorte

Aplicação React com Vite. Execute os comandos abaixo nesta pasta, com uma versão LTS atual do Node.js instalada.

```sh
npm ci
npm run dev
```

Abra `http://127.0.0.1:5173`. A página inicial fica em `/` e o login em `/login.html`.

## Estrutura

```text
frontend/
  index.html            # Entrada da página inicial
  login.html            # Entrada da página de login
  src/
    main.jsx            # Inicialização do React e estilos globais
    App.jsx             # Seleção da página conforme o endereço
    pages/
      Home.jsx
      Login.jsx
    components/
      LoginForm.jsx     # Estado e validação do formulário
      ApiStatus.jsx     # Consulta à rota de health check
    styles/
      global.css
  vite.config.js
```

O formulário mantém a validação local original. A tela de login consulta
`GET http://127.0.0.1:3000/api/health` ao abrir. O estado apresentado é o
resultado da última consulta; atualize a página para verificar novamente.
Não há autenticação de usuários nem envio de credenciais ao backend.

Execute o backend em outro terminal (`cd backend`, `npm ci`, `npm run dev`,
a partir da raiz do projeto). O CORS permite as origens locais do Vite
(porta 5173) e do preview (porta 4173).

## Build

```sh
npm run build
npm run preview
```

O preview fica em `http://127.0.0.1:4173`. O build gera os arquivos de produção em `dist/`, incluindo as duas entradas HTML. Use um servidor HTTP para servir essa pasta; os arquivos JSX não são executados abrindo o HTML diretamente no navegador.
