import React from 'react';
import userEvent from '@testing-library/user-event';

import { renderWithRouter } from './renderWithRouterContext';
import Login from '../pages/Login';

describe('Testes referentes à página de Login', () => {
  const EMAIL_INPUT = 'email-input';
  const PASSWORD_INPUT = 'password-input';
  const LOGIN_BUTTON = 'login-submit-btn';

  it('2.1 - Verifica a renderização do input de email', () => {
    const { getByTestId } = renderWithRouter(<Login />);
    const emailInput = getByTestId(EMAIL_INPUT);

    expect(emailInput).toBeInTheDocument();
  });

  it('2.2 - Verifica a renderização do input de senha', () => {
    const { getByTestId } = renderWithRouter(<Login />);
    const passwordInput = getByTestId(PASSWORD_INPUT);

    expect(passwordInput).toBeInTheDocument();
  });

  it('2.3 - Verifica a renderização do botão de Login', () => {
    const { getByTestId } = renderWithRouter(<Login />);
    const loginButton = getByTestId(LOGIN_BUTTON);

    expect(loginButton).toBeInTheDocument();
  });

  it('3 - Verifica se é possível escrever o email', () => {
    const { getByTestId } = renderWithRouter(<Login />);
    const emailInput = getByTestId(EMAIL_INPUT);

    userEvent.type(emailInput, 'example@email.com');
    expect(emailInput).toHaveValue('example@email.com');
  });

  it('4 - Verifica se é possível escrever a senha', () => {
    const { getByTestId } = renderWithRouter(<Login />);
    const passwordInput = getByTestId(PASSWORD_INPUT);

    userEvent.type(passwordInput, '1324567');
    expect(passwordInput).toHaveValue('1324567');
  });

  it('5.1 - O botão de Login deve estar desativado se o email for inválido', () => {
    const { getByTestId } = renderWithRouter(<Login />);
    const emailInput = getByTestId(EMAIL_INPUT);
    const loginButton = getByTestId(LOGIN_BUTTON);

    userEvent.type(emailInput, 'exampleNotAllowed.com');
    expect(loginButton).toBeDisabled();
  });

  it('5.2 - O botão de Login é desativado se a senha tiver 6 caracteres ou menos', () => {
    const { getByTestId } = renderWithRouter(<Login />);
    const passwordInput = getByTestId(PASSWORD_INPUT);
    const loginButton = getByTestId(LOGIN_BUTTON);

    userEvent.type(passwordInput, '123456');
    expect(loginButton).toHaveAttribute('disabled');
  });

  it('5.3 - O botão de Login é ativado se as o email e a senha forem válidos', () => {
    const { getByTestId } = renderWithRouter(<Login />);
    const emailInput = getByTestId(EMAIL_INPUT);
    const passwordInput = getByTestId(PASSWORD_INPUT);
    const loginButton = getByTestId(LOGIN_BUTTON);

    userEvent.type(emailInput, 'valid@email.com');
    userEvent.type(passwordInput, '1234567');

    expect(loginButton).not.toBeDisabled();
  });

  it('6 - Verifica se os tokens meals e cocktails são salvos no localStorage', () => {
    const { getByTestId } = renderWithRouter(<Login />);
    const emailInput = getByTestId(EMAIL_INPUT);
    const passwordInput = getByTestId(PASSWORD_INPUT);
    const loginButton = getByTestId(LOGIN_BUTTON);

    userEvent.type(emailInput, 'valid@email.com');
    userEvent.type(passwordInput, '1234567');
    userEvent.click(loginButton);

    expect(localStorage.getItem('mealsToken')).toBe('1');
    expect(localStorage.getItem('cocktailsToken')).toBe('1');
  });

  it('7 - Salva o email do usuário no localStorage na chave user após o Login', () => {
    const { getByTestId } = renderWithRouter(<Login />);
    const emailInput = getByTestId(EMAIL_INPUT);
    const passwordInput = getByTestId(PASSWORD_INPUT);
    const loginButton = getByTestId(LOGIN_BUTTON);

    userEvent.type(emailInput, 'anotherValid@email.com');
    userEvent.type(passwordInput, '1234567');
    userEvent.click(loginButton);

    expect(JSON.parse(localStorage.getItem('user')).email).toBe('anotherValid@email.com');
  });

  it('8 - Redireciona o usuário para a página principal de comidas após o Login', () => {
    const { getByTestId, history } = renderWithRouter(<Login />);
    const emailInput = getByTestId(EMAIL_INPUT);
    const passwordInput = getByTestId(PASSWORD_INPUT);
    const loginButton = getByTestId(LOGIN_BUTTON);

    userEvent.type(emailInput, 'andAnotherValid@email.com');
    userEvent.type(passwordInput, '1234567');
    userEvent.click(loginButton);

    expect(history.location.pathname).toBe('/comidas');
  });
});
