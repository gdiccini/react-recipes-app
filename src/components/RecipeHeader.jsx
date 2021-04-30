import { shape } from 'prop-types';
import React from 'react';
import '../styles/RecipeHeader.css';

export default function RecipeHeader({ recipe }) {
  return (
    <header className="recipe-header">
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
    </header>
  );
}

RecipeHeader.propTypes = {
  recipe: shape({}),
}.isRequired;
