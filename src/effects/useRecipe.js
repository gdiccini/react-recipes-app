import { useEffect } from 'react';

export default function useRecipe(fetchRecipe, setRecipes) {
  useEffect(() => {
    async function getRecipes() {
      const resp = await fetchRecipe();
      const mealsOrDrinks = resp.meals || resp.drinks;
      setRecipes(mealsOrDrinks.filter((_, index) => index < Number('12')));
    }

    getRecipes();
  }, [fetchRecipe, setRecipes]);
}
