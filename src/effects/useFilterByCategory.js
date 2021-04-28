import { useEffect } from 'react';

export async function filterByCategory(filterCategory, drinks, str, fetch) {
  if (!filterCategory) setFilteredDrinks(drinks);
  else {
    const { [str]: allDrinks } = await fetchDrinkByCategory(filterCategory);
    setFilteredDrinks(allDrinks.filter((_, index) => index < Number('12')));
  }
}

export function useFilterByCategory() {
  useEffect(filterByCategory, []);
}

/*
recipes string,
filterCategory,
recipes,
setFilteredRecipes,
fetchCategory
*/
