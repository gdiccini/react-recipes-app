import { shape, string } from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import ReactPlayer from 'react-player/youtube';

import RecipeHeader from '../components/RecipeHeader';
import RecipeInstructions from '../components/RecipeInstructions';

import {
  fetchMealById, fetchDrinkById, fetchDrinks, fetchMeals,
} from '../services/APIEndpoints';

import 'react-multi-carousel/lib/styles.css';
import '../styles/Details.css';
import Recomendations from '../components/Recomendations';

export default function Details({ match: { url, params: { id } } }) {
  const [recipe, setRecipe] = useState({});
  const [recipeType, setRecipeType] = useState('comidas');
  const [recomendations, setRecomendations] = useState([]);

  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes')) || {};

  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];

  const startButtonText = () => {
    const inProgressRecipesKeys = Object.keys(inProgressRecipes);
    const inProgressRecipesIds = inProgressRecipesKeys
      .map((key) => Object.keys(inProgressRecipes[key])).flat();
    return inProgressRecipesIds
      .includes(id)
      ? 'Continuar Receita' : 'Iniciar Receita';
  };

  const ingredients = Object.keys(recipe)
    .filter((ingredient) => ingredient.includes('strIngredient') && recipe[ingredient]);

  useEffect(() => {
    async function getRecipe() {
      if (url.includes('comidas')) {
        const { meals } = await fetchMealById(id);
        const { drinks } = await fetchDrinks();
        setRecipe(meals[0]);
        setRecomendations(drinks);
      } else {
        const { drinks } = await fetchDrinkById(id);
        const { meals } = await fetchMeals();
        setRecipeType('bebidas');
        setRecipe(drinks[0]);
        setRecomendations(meals);
      }
    }

    getRecipe();
  }, [id, url]);

  return (
    <>
      <RecipeHeader recipe={ recipe } url={ url } />

      <section className="recipe-details">
        <ul className="ingredients-measures">
          {
            ingredients.map((ingredient, index) => (
              <li
                key={ ingredient }
                data-testid={ `${index}-ingredient-name-and-measure` }
              >
                { `- ${recipe[ingredient]} - ${recipe[`strMeasure${index + 1}`]}` }
              </li>
            ))
          }
        </ul>
      </section>

      <RecipeInstructions recipe={ recipe } />

      {url.includes('comidas') && (
        <ReactPlayer
          data-testid="video"
          url={ recipe.strYoutube }
          width={ 360 }
        />
      )}

      <Recomendations recomendations={ recomendations } />

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
    </>
  );
}

Details.propTypes = {
  match: shape({
    url: string,
    params: shape({
      id: string,
    }),
  }),
}.isRequired;
