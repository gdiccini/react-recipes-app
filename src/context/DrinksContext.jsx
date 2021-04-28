import React, { createContext, useEffect, useState } from 'react';
import { node } from 'prop-types';
import {
  fetchDrinkByCategory, fetchDrinkCategories, fetchDrinks,
} from '../services/APIEndpoints';

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

  useEffect(() => {
    async function getDrinks() {
      const { drinks: allDrinks } = await fetchDrinks();
      setDrinks(allDrinks.filter((_, index) => index < Number('12')));
    }

    getDrinks();
  }, []);

  useEffect(() => {
    async function getDrinkCategories() {
      const { drinks: allCategories } = await fetchDrinkCategories();
      setDrinkCategories(allCategories
        .filter((_, index) => index < Number('5'))
        .map(({ strCategory }) => strCategory));
    }

    getDrinkCategories();
  }, []);

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
