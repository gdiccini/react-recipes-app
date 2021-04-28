import React, { createContext, useEffect, useState } from 'react';
import { node } from 'prop-types';
import {
  fetchDrinkByCategory, fetchDrinkCategories, fetchDrinks,
} from '../services/APIEndpoints';
import useRecipe from '../effects/useRecipe';
import useRecipeCategories from '../effects/useRecipeCategories';

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

  useRecipe('drinks', fetchDrinks, setDrinks);
  useRecipeCategories('drinks', fetchDrinkCategories, setDrinkCategories);

  useEffect(() => {
    async function filterByCategory() {
      if (!filterCategory) setFilteredDrinks(drinks);
      else {
        const { drinks: allDrinks } = await fetchDrinkByCategory(filterCategory);
        setFilteredDrinks(allDrinks.filter((_, index) => index < Number('12')));
      }
    }

    filterByCategory();
  }, [filterCategory, drinks]);

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
