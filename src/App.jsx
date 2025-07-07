import { useState } from 'react'
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import './App.css'

function App() {
  const [page, setPage] = useState('login');
  const [user, setUser] = useState(null);

  const handleLogin = (data) => {
    setUser({ email: data.email });
    alert('Logged in as ' + data.email);
  };
  const handleRegister = (data) => {
    setUser({ email: data.email });
    alert('Registered as ' + data.email);
  };

  if (user) {
    return (
      <div className="auth-container">
        <h2>Welcome, {user.email}!</h2>
        <button onClick={() => { setUser(null); setPage('login'); }}>Logout</button>
      </div>
    );
  }

  return (
    <div className="app-wrapper">
      {page === 'login' ? (
        <LoginPage onLogin={handleLogin} onNavigate={setPage} />
      ) : (
        <RegistrationPage onRegister={handleRegister} onNavigate={setPage} />
      )}
    </div>
  );
}

export default App
