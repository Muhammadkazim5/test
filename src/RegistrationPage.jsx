import React, { useState } from 'react';

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

export default function RegistrationPage({ onRegister, onNavigate }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!name || !email || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Invalid email format.');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Mock registration handler
      if (onRegister) onRegister({ name, email, password });
    }, 1000);
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} autoComplete="off" aria-label="Registration form">
        <label htmlFor="register-name">Name</label>
        <input
          id="register-name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          aria-required="true"
        />
        <label htmlFor="register-email">Email</label>
        <input
          id="register-email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          aria-required="true"
        />
        <label htmlFor="register-password">Password</label>
        <input
          id="register-password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          aria-required="true"
        />
        <label htmlFor="register-confirm">Confirm Password</label>
        <input
          id="register-confirm"
          type="password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          required
          aria-required="true"
        />
        {error && <div className="error" role="alert">{error}</div>}
        <button type="submit" disabled={loading}>{loading ? 'Registering...' : 'Register'}</button>
      </form>
      <p>
        Already have an account?{' '}
        <button type="button" onClick={() => onNavigate('login')} className="link-btn">
          Login
        </button>
      </p>
    </div>
  );
}
