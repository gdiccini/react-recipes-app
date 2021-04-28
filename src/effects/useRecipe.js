import { useEffect } from 'react';

export default function useRecipe(recipes, fetchRecipe, setRecipes) {
  useEffect(() => {
    async function getRecipes() {
      const { [recipes]: allRecipes } = await fetchRecipe();
      setRecipes(allRecipes.filter((_, index) => index < Number('12')));
    }

    getRecipes();
  }, [recipes, fetchRecipe, setRecipes]);
}
