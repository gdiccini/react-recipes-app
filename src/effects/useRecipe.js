import { useEffect } from 'react';

export default function useRecipe(fetchRecipe, setRecipes, id = '') {
  useEffect(() => {
    async function getRecipes() {
      const resp = await fetchRecipe(id);
      const mealsOrDrinks = resp.meals || resp.drinks;
      setRecipes(mealsOrDrinks);
    }

    getRecipes();
  }, [fetchRecipe, setRecipes, id]);
}
