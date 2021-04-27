import React, { createContext } from 'react';
import { node } from 'prop-types';

export const MealsContext = createContext();

export function MealsProvider({ children }) {
  const context = {};

  return (
    <MealsContext.Provider value={ context }>
      { children }
    </MealsContext.Provider>
  );
}

MealsProvider.propTypes = {
  children: node,
}.isRequired;
