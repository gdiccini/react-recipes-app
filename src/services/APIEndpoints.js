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

export async function fetchMealById(id) {
  const getMealRecipe = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const response = await getMealRecipe.json();
  return response;
}

export async function fetchDrinkById(id) {
  const getDrinkRecipe = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  const response = await getDrinkRecipe.json();
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

export function fetchIngredientImage(item, isMeal, mealsOrDrinks) {
  const parameter = isMeal ? item.strIngredient : item.strIngredient1;
  if (mealsOrDrinks === 'drinks') {
    return `https://www.thecocktaildb.com/images/ingredients/${parameter}-Small.png`;
  }
  return `https://www.themealdb.com/images/ingredients/${parameter}-Small.png`;
}

export async function fetchMealByIngredient(ingredient) {
  const request = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const response = await request.json();
  return response;
}

export async function fetchDrinkByIngredient(ingredient) {
  const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const response = await request.json();
  return response;
}

export async function fetchMealByFirstLetter(firstLetter) {
  const request = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`);
  const response = await request.json();
  return response;
}

export async function fetchDrinkByFirstLetter(firstLetter) {
  const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`);
  const response = await request.json();
  return response;
}

export async function fetchRandomMeal() {
  const request = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
  const response = await request.json();
  return response;
}

export async function fetchRandomDrink() {
  const request = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
  const response = await request.json();
  return response;
}

export async function fetchMealsAreas() {
  const request = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
  const response = await request.json();
  return response;
}

export async function fetchMealsByArea(area) {
  const request = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
  const response = await request.json();
  return response;
}
