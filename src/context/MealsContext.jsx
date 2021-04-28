import React, { createContext, useEffect, useState } from 'react';
import { node } from 'prop-types';

import {
  fetchMeals, fetchMealCategories, fetchMealByCategory,
} from '../services/APIEndpoints';

export const MealsContext = createContext();

export function MealsProvider({ children }) {
  const [meals, setMeals] = useState([]);
  const [mealCategories, setMealCategories] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState([]);
  const [filterCategory, setFilterCategory] = useState('');

  function toggleCategoryFilter({ target: { innerText } }) {
    if (filterCategory !== innerText && innerText !== 'All') setFilterCategory(innerText);
    else setFilterCategory('');
  }

  useEffect(() => {
    async function getMeals() {
      const { meals: allMeals } = await fetchMeals();
      setMeals(allMeals.filter((_, index) => index < Number('12')));
    }

    getMeals();
  }, []);

  useEffect(() => {
    async function getMealCategories() {
      const { meals: allCategories } = await fetchMealCategories();
      setMealCategories(allCategories
        .filter((_, index) => index < Number('5'))
        .map(({ strCategory }) => strCategory));
    }

    getMealCategories();
  }, []);

  useEffect(() => {
    async function filterByCategory() {
      if (!filterCategory) setFilteredMeals(meals);
      else {
        const { meals: allMeals } = await fetchMealByCategory(filterCategory);
        setFilteredMeals(allMeals.filter((_, index) => index < Number('12')));
      }
    }

    filterByCategory();
  }, [filterCategory, meals]);

  const context = { filteredMeals, mealCategories, toggleCategoryFilter };

  return (
    <MealsContext.Provider value={ context }>
      { children }
    </MealsContext.Provider>
  );
}

MealsProvider.propTypes = {
  children: node,
}.isRequired;
