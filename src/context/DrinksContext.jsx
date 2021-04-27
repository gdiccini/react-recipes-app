import React, { createContext, useEffect, useState } from 'react';
import { node } from 'prop-types';
import { fetchDrinks } from '../services/APIEndpoints';

export const DrinksContext = createContext();

export function DrinksProvider({ children }) {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getDrinks() {
      const { drinks: allDrinks } = await fetchDrinks();
      setDrinks(allDrinks.filter((_, index) => index < Number('12')));
    }

    getDrinks();
  }, []);

  const context = { drinks };

  return (
    <DrinksContext.Provider value={ context }>
      { children }
    </DrinksContext.Provider>
  );
}

DrinksProvider.propTypes = {
  children: node,
}.isRequired;
