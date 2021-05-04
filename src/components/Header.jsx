import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import PropTypes from 'prop-types';

export default function Header({ title, searchIcon }) {
  const [searchBar, setSearchBar] = useState(false);

  const toggleSearchBar = () => {
    setSearchBar(!searchBar);
  };

  const searchBarInput = (
    <input
      type="text"
      // onChange={}
    />
  );

  return (
    <header className="Header">
      <Link to="/perfil">
        <img alt="profile" src="/profileIcon.svg" data-testid="profile-top-btn" />
      </Link>

      <h4 data-testid="page-title">{title}</h4>

      {(searchIcon)
      && (
        <button
          type="button"
          onClick={ toggleSearchBar }
        >
          <img
            alt="search"
            src="/searchIcon.svg"
            data-testid="search-top-btn"
          />
        </button>
      ) }

      { searchBar && searchBarInput }
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  searchIcon: PropTypes.bool,
};

Header.defaultProps = {
  searchIcon: false,
};
