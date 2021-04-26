import React from 'react';
import { node } from 'prop-types';
import RecipeContext from './RecipeContext';

function Provider({ children }) {
  const context = {

  };

  return (
    <RecipeContext.Provider value={ context }>
      { children }
    </RecipeContext.Provider>
  );
}

Provider.propTypes = {
  children: node,
}.isRequired;

export default Provider;
