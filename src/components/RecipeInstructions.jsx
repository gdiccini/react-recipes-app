import { shape } from 'prop-types';
import React from 'react';

export default function RecipeInstructions({ recipe }) {
  return (
    <section>
      <h3 data-testid="instruction">Instructions</h3>
      <p>{ recipe.strInstructions }</p>
    </section>
  );
}

RecipeInstructions.propTypes = {
  recipe: shape({}),
}.isRequired;
