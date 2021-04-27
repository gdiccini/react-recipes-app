import { arrayOf } from 'prop-types';
import React from 'react';

import '../styles/FoodCard.css';

export default function FoodCard({ meal, index }) {
  return (
    <div className="meal-card" data-testid={ `${index}-recipe-card` }>
      <img
        src={ meal.strMealThumb }
        alt={ meal.strMeal }
        data-testid={ `${index}-card-img` }
      />

      <p data-testid={ `${index}-card-name` }>
        { meal.strMeal }
      </p>
    </div>
  );
}

FoodCard.propTypes = {
  meal: arrayOf({}),
}.isRequired;
