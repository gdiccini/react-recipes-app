import React, { createContext, useState } from 'react';
import { node } from 'prop-types';
import {
  fetchDrinkByCategory, fetchDrinkCategories, fetchDrinks,
} from '../services/APIEndpoints';
import useRecipe from '../effects/useRecipe';
import useRecipeCategories from '../effects/useRecipeCategories';
import useFilterByCategory from '../effects/useFilterByCategory';

export const DrinksContext = createContext();

export function DrinksProvider({ children }) {
  const [drinks, setDrinks] = useState([]);
  const [drinkCategories, setDrinkCategories] = useState([]);
  const [filteredDrinks, setFilteredDrinks] = useState([]);
  const [filterCategory, setFilterCategory] = useState('');

  function toggleCategoryFilter({ target: { innerText } }) {
    if (filterCategory !== innerText && innerText !== 'All') setFilterCategory(innerText);
    else setFilterCategory('');
  }

  useRecipe(fetchDrinks, setDrinks);
  useRecipeCategories(fetchDrinkCategories, setDrinkCategories);

  useFilterByCategory(fetchDrinkByCategory, setFilteredDrinks, filterCategory, drinks);

  const context = { filteredDrinks, drinkCategories, toggleCategoryFilter };

  return (
    <DrinksContext.Provider value={ context }>
      { children }
    </DrinksContext.Provider>
  );
}

DrinksProvider.propTypes = {
  children: node,
}.isRequired;
