import { arrayOf } from 'prop-types';
import React from 'react';

import '../styles/DrinkCard.css';

export default function DrinkCard({ drink, index }) {
  return (
    <div className="drink-card" data-testid={ `${index}-recipe-card` }>
      <img
        src={ drink.strDrinkThumb }
        alt={ drink.strDrink }
        data-testid={ `${index}-card-img` }
      />

      <p data-testid={ `${index}-card-name` }>
        { drink.strDrink }
      </p>
    </div>
  );
}

DrinkCard.propTypes = {
  drink: arrayOf({}),
}.isRequired;
