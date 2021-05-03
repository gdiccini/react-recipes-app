import React from 'react';
import { arrayOf } from 'prop-types';

import '../styles/RecipeCard.css';

export default function RecipeCard({ recipe, index, category }) {
  return (
    <div
      className={ recipe.strMeal ? 'meal-card' : 'drink-card' }
      data-testid={ `${index}-recipe-card` }
    >
      <img
        src={ recipe.strMealThumb || recipe.strDrinkThumb }
        alt={ recipe.strMeal || recipe.strDrink }
        data-testid={ `${index}-card-img` }
      />
      { category && (
        <p className="category">{recipe.strAlcoholic || recipe.strCategory}</p>
      ) }
      <p data-testid={ `${index}-card-name` }>
        { recipe.strMeal || recipe.strDrink }
      </p>
    </div>
  );
}

RecipeCard.propTypes = {
  recipe: arrayOf({}),
}.isRequired;
