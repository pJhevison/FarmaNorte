import LoginForm from '../components/LoginForm.jsx';

export default function Login() {
  return (
    <main className="layout-login">
      <section className="apresentacao">
        <span className="identidade">FarmaNorte</span>
        <h1>Sistema inteligente<br />de logística e estoque.</h1>
        <p>
          Sistema de Gestão Farmacêutica e Distribuição
          de Medicamentos no Amazonas.
        </p>
        <footer>
          <p>Projeto acadêmico — UFAM / ICET</p>
          <p>Discente — Pedro Jhevison</p>
        </footer>
      </section>
      <section className="area-login">
        <div className="painel-login">
          <h2>Acesse sua conta</h2>
          <p>Informe suas credenciais para continuar.</p>
          <LoginForm />
          <p className="aviso-acesso">
            Acesso exclusivo para profissionais autorizados.
          </p>
        </div>
      </section>
    </main>
  );
}
