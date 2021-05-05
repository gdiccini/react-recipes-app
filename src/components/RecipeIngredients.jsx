import { shape } from 'prop-types';
import React, { useEffect, useState } from 'react';
import '../styles/RecipeIngredients.css';

export default function RecipeIngredients({ recipe, enableButton }) {
  const [doneIngredients, setDoneIngredients] = useState({
    ...JSON.parse(localStorage.getItem('inProgressRecipes')),
  });

  const [type, id] = [recipe.idMeal ? 'meals' : 'cocktails',
    recipe.idMeal || recipe.idDrink];

  const ingredients = Object.keys(recipe)
    .filter((ingredient) => ingredient.includes('strIngredient') && recipe[ingredient]);

  const handleClick = (index) => {
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes')) || {
      cocktails: {},
      meals: {},
    };

    if (!inProgressRecipes[type][id]) {
      const updateInProgressRecipes = {
        ...inProgressRecipes,
        [type]: {
          ...inProgressRecipes[type],
          [id]: [index],
        },
      };

      updateInProgressRecipes[type][id].sort();

      setDoneIngredients(updateInProgressRecipes);
      localStorage.setItem('inProgressRecipes', JSON.stringify(updateInProgressRecipes));
    } else if (!inProgressRecipes[type][id].includes(index)) {
      const updateInProgressRecipes = {
        ...inProgressRecipes,
        [type]: {
          ...inProgressRecipes[type],
          [id]: [...inProgressRecipes[type][id], index],
        },
      };
      updateInProgressRecipes[type][id].sort();

      setDoneIngredients(updateInProgressRecipes);
      localStorage.setItem('inProgressRecipes', JSON.stringify(updateInProgressRecipes));
    } else {
      const removeRecipeIndex = {
        ...inProgressRecipes,
        [type]: {
          [id]: inProgressRecipes[type][id]
            .filter((ingredientPosition) => ingredientPosition !== index),
        },
      };

      removeRecipeIndex[type][id].sort();

      setDoneIngredients(removeRecipeIndex);
      localStorage.setItem('inProgressRecipes', JSON.stringify(removeRecipeIndex));
    }
  };

  useEffect(() => {
    if (doneIngredients[type]
    && doneIngredients[type][id]
    && doneIngredients[type][id].length === ingredients.length) enableButton(false);

    else enableButton(true);
  }, [doneIngredients, enableButton, id, type, ingredients]);

  return (
    <div>
      <h3>Ingredients</h3>
      <section className="recipe-in-progress">
        {
          ingredients.map((ingredient, index) => (
            <div key={ ingredient } data-testid={ `${index}-ingredient-step` }>
              <input
                checked={ doneIngredients[type] && doneIngredients[type][id]
                  ? doneIngredients[type][id].includes(index)
                  : false }
                type="checkbox"
                id={ `ingredientsAndMeasures${index}` }
                onChange={ () => handleClick(index) }
              />
              <label htmlFor={ `ingredientsAndMeasures${index}` }>
                { `${recipe[ingredient]} - ${recipe[`strMeasure${index + 1}`]}` }
              </label>
            </div>
          ))
        }
      </section>
    </div>
  );
}

RecipeIngredients.propTypes = {
  ingredients: shape({}),
}.isRequired;
