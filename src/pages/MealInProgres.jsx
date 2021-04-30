import React, { useEffect, useState } from 'react';
import { shape, string } from 'prop-types';
import { fetchMealById } from '../services/APIEndpoints';
import RecipeIngredients from '../components/RecipeIngredients';

export default function MealInProgress({ match: { params: { id } } }) {
  const [meal, setMeal] = useState({});
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    async function getRecipe() {
      const recipe = await fetchMealById(id);
      setMeal(recipe.meals[0]);
    }
    getRecipe();
  }, [id]);

  // Verificar se há uma lógica mais limpa para pegar os ingredientes
  useEffect(() => {
    const maxIngredientsOnRecipe = 20;
    for (let index = 1; index <= maxIngredientsOnRecipe; index += 1) {
      const ingredient = meal[`strIngredient${index}`];
      if (ingredient) {
        setIngredients((i) => i.concat(ingredient));
      }
    }
  }, [meal]);

  return (
    <main>
      <img data-testid="recipe-photo" src={ meal.strMealThumb } alt="meal" />
      <h1 data-testid="recipe-title">{ meal.strMeal }</h1>
      <p data-testid="recipe-category">{ meal.strCategory }</p>
      <RecipeIngredients ingredients={ ingredients } />
    </main>
  );
}

MealInProgress.propTypes = {
  match: shape({
    params: shape({
      id: string,
    }),
  }),
}.isRequired;
