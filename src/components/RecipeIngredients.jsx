import React from 'react';
import '../styles/RecipeIngredients.css';

export default function RecipeIngredients({ ingredients }) {
  return (
    <section className="RecipeIngredients">
      <p>Ingredientes</p>
      <div className="ingredients-container">
        {ingredients.map((ingredient, index) => (
          <label key={ index } htmlFor={ ingredient }>
            <input
              id={ ingredient }
              type="checkbox"
              value={ ingredient }
              data-testid={ `${index}-ingredient-step` }
            />
            {ingredient}
          </label>
        ))}
      </div>
    </section>
  );
}
