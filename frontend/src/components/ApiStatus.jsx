import { useEffect, useState } from 'react';

const API_URL = 'http://127.0.0.1:3000/api/health';

export default function ApiStatus() {
  const [status, setStatus] = useState('verificando');

  useEffect(() => {
    let ativo = true;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);

    async function verificarApi() {
      try {
        const resposta = await fetch(API_URL, {
          signal: controller.signal,
          cache: 'no-store',
        });

        if (!resposta.ok) {
          throw new Error('Falha na resposta da API.');
        }

        const dados = await resposta.json();

        if (dados.sistema !== 'FarmaNorte' || dados.status !== 'online') {
          throw new Error('Resposta inesperada da API.');
        }

        if (ativo) setStatus('online');
      } catch {
        if (ativo) setStatus('indisponivel');
      } finally {
        clearTimeout(timeout);
      }
    }

    verificarApi();

    return () => {
      ativo = false;
      clearTimeout(timeout);
      controller.abort();
    };
  }, []);

  const mensagens = {
    verificando: 'Verificando conexão com a API...',
    online: 'API: online na última verificação',
    indisponivel: 'API: indisponível. Atualize a página para tentar novamente.',
  };

  return (
    <p className={`status-api status-api--${status}`} role="status">
      {mensagens[status]}
    </p>
  );
}
