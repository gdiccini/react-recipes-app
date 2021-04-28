import React from 'react';
import { arrayOf } from 'prop-types';

import '../styles/RecipeCard.css';

export default function RecipeCard({ recipe, index }) {
  let isMeal = false;
  if (recipe.strMeal) isMeal = true;

  return (
    <div
      className={ isMeal ? 'meal-card' : 'drink-card' }
      data-testid={ `${index}-recipe-card` }
    >
      <img
        src={ isMeal ? recipe.strMealThumb : recipe.strDrinkThumb }
        alt={ isMeal ? recipe.strMeal : recipe.strDrink }
        data-testid={ `${index}-card-img` }
      />

      <p data-testid={ `${index}-card-name` }>
        { isMeal ? recipe.strMeal : recipe.strDrink }
      </p>
    </div>
  );
}

RecipeCard.propTypes = {
  recipe: arrayOf({}),
}.isRequired;
