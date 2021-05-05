import { arrayOf } from 'prop-types';
import React from 'react';
import Carousel from 'react-multi-carousel'; // lib usada para o requisito 37

export default function Recomendations({ recomendations }) {
  const showRecipeRecomendations = () => {
    const maxRecomendations = 6;
    const filterRecomendations = recomendations.slice(0, maxRecomendations);
    return filterRecomendations;
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2,
    },
  };

  return (
    <Carousel
      responsive={ responsive }
      removeArrowOnDeviceType={ ['tablet', 'mobile'] }
    >
      {showRecipeRecomendations().map((recomendation, index) => (
        <div
          key={ recomendation.strMeal || recomendation.strDrink }
          className={ recomendation.strMeal ? 'meal-card' : 'drink-card' }
          data-testid={ `${index}-recomendation-card` }
        >
          <img
            src={ recomendation.strMealThumb || recomendation.strDrinkThumb }
            alt={ recomendation.strMeal || recomendation.strDrink }
            data-testid={ `${index}-card-img` }
          />
          <p
            className="category"
          >
            {recomendation.strAlcoholic || recomendation.strCategory}
          </p>
          <p data-testid={ `${index}-recomendation-title` }>
            { recomendation.strMeal || recomendation.strDrink }
          </p>
        </div>
      ))}
    </Carousel>
  );
}

Recomendations.propTypes = {
  recomendations: arrayOf({}),
}.isRequired;
