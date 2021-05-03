import { shape, string } from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import ReactPlayer from 'react-player/youtube';
import Carousel from 'react-multi-carousel'; // lib usada para o requisito 37

import RecipeHeader from '../components/RecipeHeader';
import RecipeIngredients from '../components/RecipeIngredients';
import RecipeInstructions from '../components/RecipeInstructions';

import {
  fetchMealById, fetchDrinkById, fetchDrinks, fetchMeals,
} from '../services/APIEndpoints';

import 'react-multi-carousel/lib/styles.css';
import '../styles/Details.css';
import RecipeCard from '../components/RecipeCard';

export default function Details({ match: { url, params: { id } } }) {
  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes')) || {};

  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];

  const [recipe, setRecipe] = useState({});
  const [recipeType, setRecipeType] = useState('comidas');
  const [recomendations, setRecomendations] = useState([]);

  useEffect(() => {
    async function getRecipe() {
      if (url.includes('comidas')) {
        const { meals } = await fetchMealById(id);
        const { drinks } = await fetchDrinks();
        setRecipe(meals[0]);
        setRecomendations(drinks);
      } else {
        const { drinks } = await fetchDrinkById(id);
        const { meals } = await fetchMeals();
        setRecipeType('bebidas');
        setRecipe(drinks[0]);
        setRecomendations(meals);
      }
    }

    getRecipe();
  }, [id, url]);

  const startButtonText = () => {
    const inProgressRecipesKeys = Object.keys(inProgressRecipes);
    const inProgressRecipesIds = inProgressRecipesKeys
      .map((key) => Object.keys(inProgressRecipes[key])).flat();
    return inProgressRecipesIds
      .includes(recipe.idMeal || recipe.idDrink)
      ? 'Continuar Receita' : 'Iniciar Receita';
  };

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
    <>
      <RecipeHeader recipe={ recipe } url={ url } />
      <RecipeIngredients recipe={ recipe } url={ url } />
      <RecipeInstructions recipe={ recipe } />
      {url.includes('comidas') && (
        <ReactPlayer
          data-testid="video"
          url={ recipe.strYoutube }
          width={ 360 }
        />
      )}

      {/* receitas recomendadas => carrousel */}

      {
        recomendations.length && (
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
        )
      }

      {
        doneRecipes
          .every((recipeDone) => recipeDone.id !== (recipe.idMeal || recipe.idDrink))
          && (
            <Link to={ `/${recipeType}/${id}/in-progress` }>
              <button
                data-testid="start-recipe-btn"
                type="button"
                className="start-recipe-btn"
              >
                {startButtonText()}
              </button>
            </Link>
          )
      }
    </>
  );
}

Details.propTypes = {
  match: shape({
    params: shape({
      id: string,
    }),
  }),
}.isRequired;

