import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../effects/useLogin';

import '../styles/Login.css';

export default function Login() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'user-email') {
      setUserEmail(value);
    } else {
      setUserPassword(value);
    }
  };

  const setUserCredentials = () => {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);

    const user = {
      email: userEmail,
    };
    localStorage.setItem('user', JSON.stringify(user));
  };

  useLogin(userEmail, userPassword, setIsDisabled);

  return (
    <div className="login-container">
      <header>
        <h1>Login</h1>
      </header>

      <main className="login-main">
        <div>
          <label htmlFor="Login">
            <input
              className="user-email"
              data-testid="email-input"
              name="user-email"
              type="text"
              placeholder="Email"
              onChange={ handleChange }
            />
          </label>
        </div>

        <div className="user-password-input">
          <label htmlFor="Password">
            <input
              className="user-password"
              data-testid="password-input"
              type="password"
              name="user-password"
              placeholder="Password"
              onChange={ handleChange }
            />
          </label>
        </div>

        <Link to="/comidas">
          <div>
            <button
              className="btn-login"
              data-testid="login-submit-btn"
              type="button"
              disabled={ isDisabled }
              onClick={ setUserCredentials }
            >
              Entrar
            </button>
          </div>
        </Link>
      </main>
    </div>
  );
}
