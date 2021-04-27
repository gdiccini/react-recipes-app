import React, { createContext, useEffect, useState } from 'react';
import { node } from 'prop-types';

import { fetchMeals } from '../services/APIEndpoints';

export const MealsContext = createContext();

export function MealsProvider({ children }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function getMeals() {
      const { meals: allMeals } = await fetchMeals();
      setMeals(allMeals.filter((_, index) => index < Number('12')));
    }

    getMeals();
  }, []);

  const context = { meals };

  return (
    <MealsContext.Provider value={ context }>
      { children }
    </MealsContext.Provider>
  );
}

MealsProvider.propTypes = {
  children: node,
}.isRequired;
