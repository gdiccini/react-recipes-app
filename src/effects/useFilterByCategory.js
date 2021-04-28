import { useEffect } from 'react';

function useFilterByCategory(fetchByCategory, setFilter, filterCategory, recipes) {
  useEffect(() => {
    async function filterByCategory() {
      if (!filterCategory) setFilter(recipes);
      else {
        const resp = await fetchByCategory(filterCategory);
        const mealsOrDrinks = resp.meals || resp.drinks;
        setFilter(mealsOrDrinks.filter((_, index) => index < Number('12')));
      }
    }

    filterByCategory();
  }, [fetchByCategory, setFilter, filterCategory, recipes]);
}

export default useFilterByCategory;
