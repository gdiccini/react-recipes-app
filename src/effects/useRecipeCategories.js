import { useEffect } from 'react';

export default function useRecipeCategories(fetchCategories, setCategories) {
  useEffect(() => {
    async function getCategories() {
      const resp = await fetchCategories();
      const mealsOrDrinks = resp.meals || resp.drinks;
      setCategories(mealsOrDrinks.map(({ strCategory }) => strCategory));
    }

    getCategories();
  }, [fetchCategories, setCategories]);
}
