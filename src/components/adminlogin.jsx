import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './adminlogin.css';

const AdminLoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Please fill in both fields');
      return;
    }
    
    navigate('/admindashboard');
  };

  return (
    <div className="admin-background">
      <form className="admin-form" onSubmit={handleSubmit}>
        <h1 className="admin-form__title">Admin Access</h1>
        {error && <p className="admin-form__error">{error}</p>}
        <input
          type="text"
          name="username"
          id="admin-username"
          className="admin-form__input"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="off"
        />
        <input
          type="password"
          name="password"
          id="admin-password"
          className="admin-form__input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="off"
        />
        <input
          type="submit"
          id="admin-submit"
          className="admin-form__submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default AdminLoginForm;
