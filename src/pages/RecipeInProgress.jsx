import React, { useEffect, useState } from 'react';
import { shape, string } from 'prop-types';
import { fetchDrinkById, fetchMealById } from '../services/APIEndpoints';
import RecipeIngredients from '../components/RecipeIngredients';
import RecipeHeader from '../components/RecipeHeader';
import RecipeInstructions from '../components/RecipeInstructions';

export default function RecipeInProgress({ match: { url, params: { id } } }) {
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    async function getRecipe() {
      if (url.includes('comidas')) {
        const { meals } = await fetchMealById(id);
        setRecipe(meals[0]);
      } else {
        const { drinks } = await fetchDrinkById(id);
        setRecipe(drinks[0]);
      }
    }

    getRecipe();
  }, [id, url]);

  return (
    <>
      <RecipeHeader recipe={ recipe } />
      <RecipeIngredients recipe={ recipe } url={ url } />
      <RecipeInstructions recipe={ recipe } />
    </>
  );
}

RecipeInProgress.propTypes = {
  match: shape({
    params: shape({
      id: string,
    }),
  }),
}.isRequired;
