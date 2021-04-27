import React, { createContext } from 'react';
import { node } from 'prop-types';

export const DrinksContext = createContext();

export function DrinksProvider({ children }) {
  const context = {};

  return (
    <DrinksContext.Provider value={ context }>
      { children }
    </DrinksContext.Provider>
  );
}

DrinksProvider.propTypes = {
  children: node,
}.isRequired;
