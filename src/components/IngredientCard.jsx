import React from 'react';
import { arrayOf } from 'prop-types';
import { fetchIngredientImage } from '../services/APIEndpoints';
import '../styles/ExploreIngredients.css';

export default function IngredientCard({ item, index, mealsOrDrinks }) {
  let isMeal = false;
  if (item.strIngredient) isMeal = true;
  const ingredientImage = fetchIngredientImage(item, isMeal, mealsOrDrinks);
  return (
    <div
      key={ isMeal ? item.strIngredient : item.strIngredient1 }
      data-testid={ `${index}-ingredient-card` }
      className="ingredient-card"
    >
      <img
        src={ ingredientImage }
        alt={ isMeal ? item.strIngredient : item.strIngredient1 }
        data-testid={ `${index}-card-img` }
      />
      <p data-testid={ `${index}-card-name` }>
        {isMeal ? item.strIngredient : item.strIngredient1}
      </p>
    </div>
  );
}

IngredientCard.propTypes = {
  item: arrayOf({}),
}.isRequired;
