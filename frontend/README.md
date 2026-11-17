# Front-end FarmaNorte

Aplicação React com Vite. Execute os comandos abaixo nesta pasta, com uma versão LTS atual do Node.js instalada.

```sh
npm install
npm run dev
```

Abra o endereço informado pelo Vite. A página inicial fica em `/` e o login em `/login.html`.

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
    styles/
      global.css
  vite.config.js
```

O formulário mantém a validação local original. Ainda não há integração com a API nem autenticação de usuários.

## Build

```sh
npm run build
npm run preview
```

O build gera os arquivos de produção em `dist/`, incluindo as duas entradas HTML. Use um servidor HTTP para servir essa pasta; os arquivos JSX não são executados abrindo o HTML diretamente no navegador.
