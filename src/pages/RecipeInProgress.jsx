import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { shape, string } from 'prop-types';
import { fetchDrinkById, fetchMealById } from '../services/APIEndpoints';
import RecipeIngredients from '../components/RecipeIngredients';
import RecipeHeader from '../components/RecipeHeader';
import RecipeInstructions from '../components/RecipeInstructions';

export default function RecipeInProgress({ match: { url, params: { id: recipeId } } }) {
  const [recipe, setRecipe] = useState({});
  const [enableButton, setEnableButton] = useState(true);

  const setRecipeAsDone = () => {
    const alcoholicOrNot = recipe.strAlcoholic || '';
    const area = recipe.strArea || '';
    const category = recipe.strCategory || '';
    const doneDate = new Date().toLocaleDateString();
    const id = recipe.idMeal || recipe.idDrink;
    const image = recipe.strMealThumb || recipe.strDrinkThumb;
    const name = recipe.strMeal || recipe.strDrink;
    const type = recipe.idMeal ? 'comida' : 'bebida';
    const tags = recipe.strTags ? recipe.strTags.split(',') : [];

    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];

    const newRecipe = {
      alcoholicOrNot,
      area,
      category,
      doneDate,
      id,
      image,
      name,
      tags,
      type,
    };

    return doneRecipes.length
      ? localStorage.setItem('doneRecipes', JSON.stringify([...doneRecipes, newRecipe]))
      : localStorage.setItem('doneRecipes', JSON.stringify([newRecipe]));
  };

  useEffect(() => {
    async function getRecipe() {
      if (url.includes('comidas')) {
        const { meals } = await fetchMealById(recipeId);
        setRecipe(meals[0]);
      } else {
        const { drinks } = await fetchDrinkById(recipeId);
        setRecipe(drinks[0]);
      }
    }

    getRecipe();
  }, [recipeId, url]);

  return (
    <>
      <RecipeHeader recipe={ recipe } url={ url.replace('/in-progress', '') } />

      <RecipeIngredients
        recipe={ recipe }
        url={ url }
        enableButton={ setEnableButton }
      />

      <RecipeInstructions recipe={ recipe } />

      <Link to="/receitas-feitas">
        <button
          type="button"
          disabled={ enableButton }
          data-testid="finish-recipe-btn"
          onClick={ setRecipeAsDone }
        >
          Finalizar Receita
        </button>
      </Link>
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
