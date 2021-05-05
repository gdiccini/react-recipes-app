import React, { createContext, useState } from 'react';
import { node } from 'prop-types';
import {
  fetchDrinkByCategory, fetchDrinkCategories, fetchDrinks, fetchDrinkByIngredient,
} from '../services/APIEndpoints';
import useRecipe from '../effects/useRecipe';
import useRecipeCategories from '../effects/useRecipeCategories';
import useFilterByCategory from '../effects/useFilterByCategory';
import useFilterByIngredient from '../effects/useFilterByIngredient';

export const DrinksContext = createContext();

export function DrinksProvider({ children }) {
  const [drinks, setDrinks] = useState([]);
  const [drinkCategories, setDrinkCategories] = useState([]);
  const [filteredDrinks, setFilteredDrinks] = useState([]);
  const [filterCategory, setFilterCategory] = useState('');
  const [ingredientFilter, setIngredientFilter] = useState('');

  function toggleCategoryFilter({ target: { innerText } }) {
    if (filterCategory !== innerText && innerText !== 'All') setFilterCategory(innerText);
    else setFilterCategory(''); setIngredientFilter('');
  }

  useRecipe(fetchDrinks, setDrinks);
  useRecipeCategories(fetchDrinkCategories, setDrinkCategories);

  useFilterByCategory(fetchDrinkByCategory, setFilteredDrinks, filterCategory, drinks);

  useFilterByIngredient(
    fetchDrinkByIngredient, setFilteredDrinks, ingredientFilter, drinks,
  );

  const context = {
    filteredDrinks, drinkCategories, toggleCategoryFilter, setIngredientFilter,
  };

  return (
    <DrinksContext.Provider value={ context }>
      { children }
    </DrinksContext.Provider>
  );
}

DrinksProvider.propTypes = {
  children: node,
}.isRequired;
