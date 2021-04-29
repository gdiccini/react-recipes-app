import React, { createContext } from 'react';
import { node } from 'prop-types';

const DrinksContext = createContext();

export default DrinksContext;

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
