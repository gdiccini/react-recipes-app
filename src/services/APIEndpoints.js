export async function fetchMeals(name = '') {
  const getMeals = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
  const response = await getMeals.json();
  return response;
}

export async function fetchDrinks(name = '') {
  const getDrinks = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
  const response = await getDrinks.json();
  return response;
}

export async function fetchMealCategories() {
  const getCategories = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
  const response = await getCategories.json();
  return response;
}

export async function fetchDrinkCategories() {
  const getCategories = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
  const response = await getCategories.json();
  return response;
}

export async function fetchMealByCategory(category) {
  const getMeals = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
  const response = await getMeals.json();
  return response;
}

export async function fetchDrinkByCategory(category) {
  const getDrinks = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
  const response = await getDrinks.json();
  return response;
}

export async function fetchMealByIngredient(ingredient) {
  const request = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const json = await request.json();
  return json;
}

export async function fetchDrinkByIngredient(ingredient) {
  const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const json = await request.json();
  return json;
}

export async function fetchMealByFirstLetter(firstLetter) {
  const request = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`);
  const json = await request.json();
  return json;
}

export async function fetchDrinkByFirstLetter(firstLetter) {
  const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`);
  const json = await request.json();
  return json;
}
