import { arrayOf } from 'prop-types';
import React from 'react';
// import Carousel from 'react-multi-carousel'; // lib usada para o requisito 37
import { Carousel } from 'react-bootstrap';

export default function Recomendations({ recomendations }) {
  const showRecipeRecomendations = () => {
    const maxRecomendations = 6;
    const filterRecomendations = recomendations.slice(0, maxRecomendations);
    return filterRecomendations;
  };

  return (
    <Carousel
      fade
      indicators={ false }
      // controls={ false }
      interval={ 3000 }
    >
      {showRecipeRecomendations().map((recomendation, index) => (
        <Carousel.Item
          key={ recomendation.strMeal || recomendation.strDrink }
          // className={ recomendation.strMeal ? 'meal-card' : 'drink-card' }
          data-testid={ `${index}-recomendation-card` }
        >
          <img
            className="d-block w-100"
            src={ recomendation.strMealThumb || recomendation.strDrinkThumb }
            alt={ recomendation.strMeal || recomendation.strDrink }
            data-testid={ `${index}-card-img` }
          />

          <Carousel.Caption>
            <p
              className="category"
            >
              {recomendation.strAlcoholic || recomendation.strCategory}
            </p>
            <p data-testid={ `${index}-recomendation-title` }>
              { recomendation.strMeal || recomendation.strDrink }
            </p>
          </Carousel.Caption>

        </Carousel.Item>
      ))}
    </Carousel>
  );
}

Recomendations.propTypes = {
  recomendations: arrayOf({}),
}.isRequired;
