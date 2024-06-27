/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './Login.scss';
import Register from '../Register/Register';

interface User {
  email: string;
  password: string;
}

interface Users {
  [key: string]: User;
}

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [users, setUsers] = useState<Users>({
    user1: {
      email: 'user1@example.com',
      password: 'password1',
    },
    user2: {
      email: 'user2@example.com',
      password: 'password2',
    },
    user3: {
      email: 'user3@example.com',
      password: 'password3',
    },
  });
  const [showRegister, setShowRegister] = useState<boolean>(false);

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = Object.values(users).find(
      u => u.email === email && u.password === password,
    );

    if (user) {
      alert('Logged in successfully!');
    } else {
      setError('Invalid email or password');
    }
  };

  const handleRegisterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!users[email]) {
      const newUser: User = { email, password };
      const newUsers: Users = { ...users, [email]: newUser };

      setUsers(newUsers);

      console.log(users);
      setEmail('');
      setPassword('');
      setError('');
      alert('Registered successfully!');
    } else {
      setError('User already exists');
    }
  };

  const handleRegisterButtonClick = () => {
    setShowRegister(true);
  };

  const handleBackToLoginButtonClick = () => {
    setShowRegister(false);
    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <div className="login-container">
      <div className="login-panel">
        {!showRegister ? (
          <form onSubmit={handleLoginSubmit}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="error">{error}</p>}
            <button type="submit" className="button-login">
              Login
            </button>
            <button
              onClick={handleRegisterButtonClick}
              className="button-login"
            >
              {showRegister ? 'Register' : 'Create account'}
            </button>
          </form>
        ) : (
          <Register
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            error={error}
            handleRegister={handleRegisterSubmit}
            handleBackToLogin={handleBackToLoginButtonClick}
            showRegister={showRegister}
          />
        )}
      </div>
    </div>
  );
};

export default Login;
