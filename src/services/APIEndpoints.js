export async function fetchMeals() {
  const getMeals = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const response = await getMeals.json();
  return response;
}

export async function fetchDrinks() {
  const getDrinks = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  const response = await getDrinks.json();
  return response;
}
