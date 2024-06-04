/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

interface RegisterProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  error: string;
  handleRegister: (e: React.FormEvent<HTMLFormElement>) => void;
  handleBackToLogin: () => void;
  showRegister: boolean;
}

const Register: React.FC<RegisterProps> = ({
  email,
  setEmail,
  password,
  setPassword,
  error,
  handleRegister,
  handleBackToLogin,
  showRegister,
}) => {
  return (
    <form onSubmit={handleRegister}>
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
        Register
      </button>
      <button
        type="submit"
        className="button-login"
        onClick={handleBackToLogin}
      >
        {showRegister ? 'Log into account' : 'Login'}
      </button>
    </form>
  );
};

export default Register;
