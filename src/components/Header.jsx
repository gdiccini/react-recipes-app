import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import PropTypes from 'prop-types';

export default function Header({ title, searchIcon }) {
  return (
    <header className="Header">
      <Link to="/perfil">
        <img alt="profile" src="/profileIcon.svg" data-testid="profile-top-btn" />
      </Link>
      <h4 data-testid="page-title">{title}</h4>
      {(searchIcon) && <img
        alt="search"
        src="searchIcon.svg"
        data-testid="search-top-btn"
      /> }
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  searchIcon: PropTypes.bool.isRequired,
};
