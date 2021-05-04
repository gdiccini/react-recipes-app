import { shape } from 'prop-types';
import React, { useState } from 'react';
import '../styles/RecipeIngredients.css';

// carrega a pagina pega dados do localStorage
// estado do componente com as receitas feitas
// gatilho: mudança do estado da aplicacao
// setar localStorage = estado do componente

export default function RecipeIngredients({ url, recipe }) {
  const [doneRecipes, setDoneRecipes] = useState({
    ...JSON.parse(localStorage.getItem('inProgressRecipes')),
  } || {
    cocktails: {},
    meals: {},
  });

  const [doneIngredients, setDoneIngredients] = useState([]);

  const id = url.includes('comidas') ? recipe.idMeal : recipe.idDrink;

  const type = recipe.idMeal ? 'meals' : 'cocktails';

  const ingredients = Object.keys(recipe)
    .filter((ingredient) => ingredient.includes('strIngredient'));

  const handleClick = (index) => {
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes')) || {
      cocktails: {},
      meals: {},
    };

    if (!inProgressRecipes[type][id]) {
      const addRecipeIndex = {
        ...inProgressRecipes,
        [type]: {
          [id]: [index],
        },
      };

      addRecipeIndex[type][id].sort();

      setDoneIngredients(addRecipeIndex[type][id]);
      setDoneRecipes(addRecipeIndex);
      localStorage.setItem('inProgressRecipes', JSON.stringify(addRecipeIndex));
    } else if (!inProgressRecipes[type][id].includes(index)) {
      const addRecipeIndex = {
        ...inProgressRecipes,
        [type]: {
          [id]: [...inProgressRecipes[type][id], index],
        },
      };

      addRecipeIndex[type][id].sort();

      setDoneIngredients(addRecipeIndex[type][id]);
      setDoneRecipes(addRecipeIndex);
      localStorage.setItem('inProgressRecipes', JSON.stringify(addRecipeIndex));
    } else {
      const removeRecipeIndex = {
        ...inProgressRecipes,
        [type]: {
          [id]: inProgressRecipes[type][id].filter((recipeIndex) => recipeIndex !== index),
        },
      };

      removeRecipeIndex[type][id].sort();

      setDoneIngredients(removeRecipeIndex[type][id]);
      setDoneRecipes(removeRecipeIndex);
      localStorage.setItem('inProgressRecipes', JSON.stringify(removeRecipeIndex));
    }
  };

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
                    checked={ doneRecipes[type][id].includes(index) }
                    type="checkbox"
                    id={ `ingredientsAndMeasures${index}` }
                    onClick={ () => handleClick(index) }
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
