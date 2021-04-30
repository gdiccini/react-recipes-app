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

export async function fetchMealsIngredientList() {
  const ingredientListAPI = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
  const ingredientList = await fetch(ingredientListAPI);
  const response = await ingredientList.json();
  return response.meals;
}

export async function fetchDrinksIngredientList() {
  const ingredientListAPI = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
  const ingredientList = await fetch(ingredientListAPI);
  const response = await ingredientList.json();
  return response.drinks;
}

export function fetchIngredientImage(item, isMeal) {
  const parameter = isMeal ? item.strIngredient : item.strIngredient1;
  return `https://www.themealdb.com/images/ingredients/${parameter}-Small.png`;
}
