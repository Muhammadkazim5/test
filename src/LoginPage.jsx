import React, { useState } from 'react';

export default function LoginPage({ onLogin, onNavigate }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Mock login handler
      if (onLogin) onLogin({ email, password });
    }, 1000);
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} autoComplete="off" aria-label="Login form">
        <label htmlFor="login-email">Email</label>
        <input
          id="login-email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          aria-required="true"
        />
        <label htmlFor="login-password">Password</label>
        <input
          id="login-password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          aria-required="true"
        />
        {error && <div className="error" role="alert">{error}</div>}
        <button type="submit" disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
      </form>
      <p>
        Don't have an account?{' '}
        <button type="button" onClick={() => onNavigate('register')} className="link-btn">
          Register
        </button>
      </p>
    </div>
  );
}
