import { shape } from 'prop-types';
import React from 'react';
import '../styles/RecipeIngredients.css';

export default function RecipeIngredients({ url, recipe }) {
  const ingredients = Object.keys(recipe)
    .filter((ingredient) => ingredient.includes('strIngredient'));

  return (
    <div>
      <h3>Ingredients</h3>
      {
        url.includes('in-progress') ? (
          <section className="recipe-in-progress">
            {
              ingredients.map((ingredient, index) => recipe[ingredient] && (
                <div key={ ingredient } data-testid={ `${index}-ingredient-step` }>
                  <input
                    type="checkbox"
                    id={ `ingredientsAndMeasures${index}` }
                  />
                  <label htmlFor={ `ingredientsAndMeasures${index}` }>
                    { `${recipe[ingredient]} - ${recipe[`strMeasure${index + 1}`]}` }
                  </label>
                </div>
              ))
            }
          </section>
        ) : (
          <section className="recipe-details">
            <ul className="ingredients-measures">
              {
                ingredients.map((ingredient, index) => recipe[ingredient] && (
                  <li
                    key={ ingredient }
                    data-testid={ `${index}-ingredient-name-and-measure` }
                  >
                    { `- ${recipe[ingredient]} - ${recipe[`strMeasure${index + 1}`]}` }
                  </li>
                ))
              }
            </ul>
          </section>
        )
      }
    </div>
  );
}

RecipeIngredients.propTypes = {
  ingredients: shape({}),
}.isRequired;
