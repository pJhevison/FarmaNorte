import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';

export default function App() {
  const isLogin = /^\/login(?:\.html)?\/?$/.test(window.location.pathname);

  return isLogin ? <Login /> : <Home />;
}
