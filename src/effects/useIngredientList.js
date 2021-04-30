import { useEffect } from 'react';
import {
  fetchMealsIngredientList, fetchDrinksIngredientList,
} from '../services/APIEndpoints';

export default function useIngredientList(setIngredients, setLoading, mealsOrDrinks) {
  useEffect(() => {
    async function getIngredients() {
      const ingredientList = (mealsOrDrinks === 'meals')
        ? await fetchMealsIngredientList() : await fetchDrinksIngredientList();
      setIngredients(ingredientList);
      setLoading(false);
    }

    getIngredients();
  }, [setIngredients, setLoading, mealsOrDrinks]);
}
