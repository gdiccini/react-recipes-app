import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  fetchMealByIngredient,
  fetchMeals,
  fetchMealByFirstLetter,
  fetchDrinkByIngredient,
  fetchDrinks,
  fetchDrinkByFirstLetter,
} from '../services/APIEndpoints';

export default function SearchBar({ recipeType, newRecipes }) {
  const [searchInput, setSearchInput] = useState('');
  const [searchType, setSearchType] = useState('');

  const type = 'first-letter-search';
  const maxDrinks = 12;

  const handleDrinks = async () => {
    if (searchType === type && searchInput.length > 1) {
      alert('Sua busca deve conter somente 1 (um) caracter');
      return '';
    }
    let response = '';
    if (searchType === 'ingredient-search') {
      response = await fetchDrinkByIngredient(searchInput);
    }
    if (searchType === 'name-search') {
      response = await fetchDrinks(searchInput);
    }
    if (searchType === type) {
      response = await fetchDrinkByFirstLetter(searchInput);
    }
    if (response.drinks !== null && searchType !== '') {
      return newRecipes(response.drinks.slice(0, maxDrinks));
    }
    alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  };

  const handleMeals = async () => {
    if (searchType === type && searchInput.length > 1) {
      alert('Sua busca deve conter somente 1 (um) caracter');
      return '';
    }
    let response = '';
    if (searchType === 'ingredient-search') {
      response = await fetchMealByIngredient(searchInput);
    }
    if (searchType === 'name-search') {
      response = await fetchMeals(searchInput);
    }
    if (searchType === type) {
      response = await fetchMealByFirstLetter(searchInput);
    }
    if (response.meals !== null && searchType !== '') {
      return newRecipes(response.meals.slice(0, maxDrinks));
    }
    alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  };

  const handleClick = () => {
    if (recipeType === 'meal') {
      handleMeals();
    } else {
      handleDrinks();
    }
  };

  const handleChange = ({ target }) => {
    setSearchType(target.id);
  };

  const handleTextChange = ({ target }) => {
    setSearchInput(target.value);
  };

  return (
    <section>
      <input
        value={ searchInput }
        type="text"
        data-testid="search-input"
        onChange={ (event) => handleTextChange(event) }
      />
      <label htmlFor="ingredient-search">
        <input
          id="ingredient-search"
          name="searchType"
          type="radio"
          data-testid="ingredient-search-radio"
          onChange={ (event) => handleChange(event) }
        />
        Buscar por ingrediente
      </label>
      <label htmlFor="name-search">
        <input
          id="name-search"
          name="searchType"
          type="radio"
          data-testid="name-search-radio"
          onChange={ (event) => handleChange(event) }
        />
        Buscar por nome
      </label>
      <label htmlFor="first-letter-search">
        <input
          id="first-letter-search"
          name="searchType"
          type="radio"
          data-testid="first-letter-search-radio"
          onChange={ (event) => handleChange(event) }
        />
        Buscar pela primeira letra
      </label>
      <button
        data-testid="exec-search-btn"
        type="button"
        onClick={ handleClick }
      >
        Procurar
      </button>
    </section>
  );
}

SearchBar.propTypes = {
  recipeType: PropTypes.string.isRequired,
  newRecipes: PropTypes.func.isRequired,
};
