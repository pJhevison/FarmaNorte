import { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (email.trim() === '' || senha.trim() === '') {
      window.alert('Preencha todos os campos.');
      return;
    }

    window.alert('Formulário validado com sucesso!');
  }

  return (
    <form id="form-login" method="post" onSubmit={handleSubmit}>
      <label htmlFor="email">E-mail</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Digite seu e-mail"
        autoComplete="username"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      <label htmlFor="senha">Senha</label>
      <input
        type="password"
        id="senha"
        name="senha"
        placeholder="Digite sua senha"
        autoComplete="current-password"
        value={senha}
        onChange={(event) => setSenha(event.target.value)}
        required
      />
      <button type="submit" id="btn-entrar">Entrar no sistema</button>
    </form>
  );
}
