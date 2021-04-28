import { useEffect } from 'react';

export default function useRecipeCategories(recipes, fetchCategories, setCategories) {
  useEffect(() => {
    async function getCategories() {
      const { [recipes]: allCategories } = await fetchCategories();
      setCategories(allCategories
        .filter((_, index) => index < Number('5'))
        .map(({ strCategory }) => strCategory));
    }

    getCategories();
  }, [recipes, fetchCategories, setCategories]);
}
