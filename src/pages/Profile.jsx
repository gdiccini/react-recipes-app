import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/Profile.css';

export default function Profile() {
  const searchIcon = false;

  const user = JSON.parse(localStorage.getItem('user'));

  const clearLocalStorage = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('mealsToken');
    localStorage.removeItem('cocktailsToken');
    localStorage.removeItem('doneRecipes');
    localStorage.removeItem('favoriteRecipes');
    localStorage.removeItem('inProgressRecipes');
  };

  return (
    <div className="Profile">
      <Header title="Perfil" searchIcon={ searchIcon } />
      <main>
        <p data-testid="profile-email">{user.email}</p>
        <Link to="/receitas-feitas">
          <button type="button" data-testid="profile-done-btn">Receitas Feitas</button>
        </Link>
        <Link to="/receitas-favoritas">
          <button type="button" data-testid="profile-favorite-btn">
            Receitas Favoritas
          </button>
        </Link>
        <Link to="/">
          <button
            type="button"
            data-testid="profile-logout-btn"
            onClick={ () => clearLocalStorage() }
          >
            Sair
          </button>
        </Link>
      </main>
    </div>
  );
}
