import { shape, string } from 'prop-types';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import { Link } from 'react-router-dom';
import RecipeHeader from '../components/RecipeHeader';
import RecipeIngredients from '../components/RecipeIngredients';
import RecipeInstructions from '../components/RecipeInstructions';

import { fetchMealById, fetchDrinkById } from '../services/APIEndpoints';

import '../styles/Details.css';

export default function Details({ match: { url, params: { id } } }) {
  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes')) || {};

  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];

  const [recipe, setRecipe] = useState({});
  const [recipeType, setRecipeType] = useState('comidas');

  useEffect(() => {
    async function getRecipe() {
      if (url.includes('comidas')) {
        const { meals } = await fetchMealById(id);
        setRecipe(meals[0]);
      } else {
        const { drinks } = await fetchDrinkById(id);
        setRecipeType('bebidas');
        setRecipe(drinks[0]);
      }
    }

    getRecipe();
  }, [id, url]);

  const startButtonText = () => {
    const inProgressRecipesKeys = Object.keys(inProgressRecipes);
    const inProgressRecipesIds = inProgressRecipesKeys
      .map((key) => Object.keys(inProgressRecipes[key])).flat();
    return inProgressRecipesIds
      .includes(recipe.idMeal || recipe.idDrink)
      ? 'Continuar Receita' : 'Iniciar Receita';
  };

  return (
    <>
      <RecipeHeader recipe={ recipe } url={ url } />
      <RecipeIngredients recipe={ recipe } url={ url } />
      <RecipeInstructions recipe={ recipe } />
      {url.includes('comidas') && (
        <ReactPlayer
          data-testid="video"
          url={ recipe.strYoutube }
          width={ 360 }
        />
      )}

      {/* receitas recomendadas => carrousel */}

      {
        doneRecipes
          .every((recipeDone) => recipeDone.id !== (recipe.idMeal || recipe.idDrink))
          && (
            <Link to={ `/${recipeType}/${id}/in-progress` }>
              <button
                data-testid="start-recipe-btn"
                type="button"
                className="start-recipe-btn"
              >
                {startButtonText()}
              </button>
            </Link>
          )
      }
      <p data-testid="0-recomendation-card" />
    </>
  );
}

Details.propTypes = {
  match: shape({
    params: shape({
      id: string,
    }),
  }),
}.isRequired;
