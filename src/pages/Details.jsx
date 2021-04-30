import { shape, string } from 'prop-types';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/youtube';

import { fetchMealById, fetchDrinkById } from '../services/APIEndpoints';

import '../styles/Details.css';

export default function Details({ match: { url, params: { id } } }) {
  const [recipe, setRecipe] = useState({});

  const ingredients = Object.keys(recipe)
    .filter((ingredient) => ingredient.includes('strIngredient'));

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
    <div className="recipe-details">
      <img
        data-testid="recipe-photo"
        src={ recipe.strMealThumb || recipe.strDrinkThumb }
        alt={ recipe.strMeal || recipe.strDrink }
      />

      <h3 data-testid="recipe-title">{ recipe.strMeal || recipe.strDrink }</h3>

      <button type="button" data-testid="share-btn">
        compartilhar
      </button>

      <button type="button" data-testid="favorite-btn">favoritar</button>

      <p data-testid="recipe-category">
        { recipe.strCategory }
      </p>

      <h3>Ingredientes</h3>

      <ul className="ingredients-measures">
        {
          ingredients.map((ingredient, index) => recipe[ingredient] && (
            <li
              key={ ingredient }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              { `${recipe[ingredient]} - ${recipe[`strMeasure${index + 1}`]}` }
            </li>
          ))
        }
      </ul>

      {/* página de receita em progresso */}
      {/* <div className="ingredients-measures">
        {
          ingredients.map((ingredient, index) => recipe[ingredient] && (
            <div key={ ingredient }>
              <label htmlFor="ingredientsAndMeasures">
                { `${recipe[ingredient]} - ${recipe[`strMeasure${index + 1}`]}` }
                <input
                  data-testid={ `${index}-ingredient-name-and-measure` }
                  type="checkbox"
                  id="ingredientsAndMeasures"
                />
              </label>
            </div>
          ))
        }
      </div> */}

      <p data-testid="instructions">
        texto instrucao
      </p>

      <ReactPlayer
        data-testid="video"
        url={ recipe.strYoutube }
        className="ingredients-measures-video"
        width={ 450 }
      />

      {/* <RecipesRecomendation data-testid="${index}-recomendation-card" /> */}

      <button type="button" data-testid="start-recipe-btn">INICIAR RECEITA</button>
    </div>
  );
}

Details.propTypes = {
  match: shape({
    params: shape({
      id: string,
    }),
  }),
}.isRequired;
