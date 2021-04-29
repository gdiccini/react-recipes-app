import React, { createContext } from 'react';
import { node } from 'prop-types';

const MealsContext = createContext();

export default MealsContext;

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
