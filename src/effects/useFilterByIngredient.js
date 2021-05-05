import { useEffect } from 'react';

function useFilterByIngredient(fetchByIngredient, setFilter, ingredient, recipes) {
  useEffect(() => {
    async function filterByIngredient() {
      const maxNumber = 12;
      if (!ingredient) setFilter(recipes);
      else {
        const resp = await fetchByIngredient(ingredient);
        const mealsOrDrinks = resp.meals || resp.drinks;
        setFilter(mealsOrDrinks.filter((_, index) => index < maxNumber));
      }
    }

    filterByIngredient();
  }, [fetchByIngredient, setFilter, ingredient, recipes]);
}

export default useFilterByIngredient;
