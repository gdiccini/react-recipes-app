import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

export default function Header({ title, searchIcon, recipeType, newRecipes }) {
  const [searchBar, setSearchBar] = useState(false);

  const handleClick = () => {
    if (searchBar) {
      setSearchBar(false);
    } else {
      setSearchBar(true);
    }
  };

  return (
    <div>
      <header className="Header">
        <Link to="/perfil">
          <img alt="profile" src="/profileIcon.svg" data-testid="profile-top-btn" />
        </Link>

        <h4 data-testid="page-title">{title}</h4>

        {(searchIcon)
        && (
          <button
            type="button"
            onClick={ handleClick }
          >
            <img
              alt="search"
              src="/searchIcon.svg"
              data-testid="search-top-btn"
            />
          </button>
        ) }
      </header>
      {searchBar && <SearchBar recipeType={ recipeType } newRecipes={ newRecipes } />}
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  searchIcon: PropTypes.bool,
  recipeType: PropTypes.string.isRequired,
  newRecipes: PropTypes.arrayOf({}).isRequired,
};

Header.defaultProps = {
  searchIcon: false,
};
