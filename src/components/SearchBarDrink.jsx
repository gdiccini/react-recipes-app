import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { DrinksContext } from '../context/DrinksContext';
import {
  fetchDrinkByIngredient,
  fetchDrinks,
  fetchDrinkByFirstLetter,
} from '../services/APIEndpoints';

function SearchBarDrink() {
  const {
    values: {
      searchInput,
      searchType,
      drinks,
    },
    functions: {
      handleSearchInput,
      handleSearchType,
      setDrinks,
    },
  } = useContext(DrinksContext);

  const [redirect, setRedirect] = useState(false);
  const [path, setPath] = useState(false);

  useEffect(() => {
    if (drinks.length === 1) {
      setRedirect(true);
      setPath(`/bebidas/${drinks[0].idDrink}`);
    }
  }, [drinks]);

  const requestAPI = async () => {
    if (searchType === 'first-letter-search' && searchInput.length > 1) {
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
    if (searchType === 'first-letter-search') {
      response = await fetchDrinkByFirstLetter(searchInput);
    }
    if (response.drinks !== null && searchType !== '') {
      return setDrinks(response.drinks);
    }
    alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  };

  if (redirect) return <Redirect to={ path } />;

  return (
    <section>
      <input
        type="text"
        data-testid="search-input"
        value={ searchInput }
        onChange={ handleSearchInput }
      />
      <label htmlFor="ingredient-search">
        <input
          id="ingredient-search"
          type="radio"
          name="search"
          data-testid="ingredient-search-radio"
          onChange={ handleSearchType }
          value="ingredient-search"
        />
        Buscar por ingrediente
      </label>
      <label htmlFor="name-search">
        <input
          id="name-search"
          type="radio"
          name="search"
          data-testid="name-search-radio"
          onChange={ handleSearchType }
          value="name-search"
        />
        Buscar por nome
      </label>
      <label htmlFor="first-letter-search">
        <input
          id="first-letter-search"
          type="radio"
          name="search"
          data-testid="first-letter-search-radio"
          onChange={ handleSearchType }
          value="first-letter-search"
        />
        Buscar pela primeira letra
      </label>
      <button
        data-testid="exec-search-btn"
        type="button"
        onClick={ requestAPI }
      >
        Procurar
      </button>
    </section>
  );
}

export default SearchBarDrink;
