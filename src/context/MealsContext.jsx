import React, { createContext, useState } from 'react';
import { node } from 'prop-types';
import {
  fetchMeals, fetchMealCategories, fetchMealByCategory, fetchMealByIngredient,
} from '../services/APIEndpoints';
import useRecipe from '../effects/useRecipe';
import useRecipeCategories from '../effects/useRecipeCategories';
import useFilterByCategory from '../effects/useFilterByCategory';
import useFilterByIngredient from '../effects/useFilterByIngredient';

export const MealsContext = createContext();

export function MealsProvider({ children }) {
  const [meals, setMeals] = useState([]);
  const [mealCategories, setMealCategories] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState([]);
  const [filterCategory, setFilterCategory] = useState('');
  const [ingredientFilter, setIngredientFilter] = useState('');

  function toggleCategoryFilter({ target: { innerText } }) {
    if (filterCategory !== innerText && innerText !== 'All') setFilterCategory(innerText);
    else setFilterCategory(''); setIngredientFilter('');
  }

  useRecipe(fetchMeals, setMeals);
  useRecipeCategories(fetchMealCategories, setMealCategories);

  useFilterByCategory(fetchMealByCategory, setFilteredMeals, filterCategory, meals);

  useFilterByIngredient(fetchMealByIngredient, setFilteredMeals, ingredientFilter, meals);

  const context = {
    filteredMeals, mealCategories, toggleCategoryFilter, setIngredientFilter,
  };

  return (
    <MealsContext.Provider value={ context }>
      { children }
    </MealsContext.Provider>
  );
}

MealsProvider.propTypes = {
  children: node,
}.isRequired;
