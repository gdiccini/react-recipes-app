import { shape, string } from 'prop-types';
import React, { useEffect, useState } from 'react';
import { fetchMealById } from '../services/APIEndpoints';

import '../styles/Details.css';

export default function Details({ match: { params: { id } } }) {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    async function getRecipe() {
      const response = await fetchMealById(id);
      const mealOrDrink = response.meals || response.drinks;

      setRecipe(mealOrDrink[0]);
    }

    getRecipe();
  }, [id]);

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

      <p data-testid="recipe-category">{ recipe.strCategory }</p>

      {/* <div data-testid="${index}-ingredient-name-and-measure">
        ingredientes
      </div> */}

      <p data-testid="instructions">
        texto instrucao
      </p>

      { /* isso é aqui mesmo? */ }
      <div data-testid="video">video YouTube como fazer ?</div>

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
