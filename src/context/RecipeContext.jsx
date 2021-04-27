import React, { createContext } from 'react';
import { node } from 'prop-types';

export const RecipeContext = createContext();

export function Provider({ children }) {
  const context = {};

  return (
    <RecipeContext.Provider value={ context }>
      { children }
    </RecipeContext.Provider>
  );
}

Provider.propTypes = {
  children: node,
}.isRequired;

// acredito que seja interessante fazermos um contexto para cada pagina
// meals, drinks, favoriteDrinks etc ...
