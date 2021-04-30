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

  return (
    <>
      <RecipeHeader recipe={ recipe } />
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
      <Link to={ `/${recipeType}/${id}/in-progress` }>
        <button
          data-testid="start-recipe-btn"
          type="button"
          className="start-recipe-btn"
        >
          INICIAR RECEITA
        </button>
      </Link>
      <p data-testid="0-recomendation-card">bla</p>
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
