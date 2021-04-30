import { shape } from 'prop-types';
import React from 'react';

export default function RecipeInstructions({ recipe }) {
  return (
    <section>
      <h3>Instructions</h3>
      <p data-testid="instructions">{ recipe.strInstructions }</p>
    </section>
  );
}

RecipeInstructions.propTypes = {
  recipe: shape({}),
}.isRequired;
