import React from 'react';

import { renderWithRouter, MockContext } from './renderWithRouterContext';
import { meals } from '../../cypress/mocks/meals';
import { meals as mealCategories } from '../../cypress/mocks/mealCategories';
import { drinks as drinkCategories } from '../../cypress/mocks/drinkCategories';
import { drinks } from '../../cypress/mocks/drinks';

import Meals from '../pages/Meals';
import Drinks from '../pages/Drinks';

describe('Testes da tela principal de receitas', () => {
  it('25.1 - Testa se todos os 12 cards de comidas aparecem na tela', () => {
    const categories = mealCategories.map(({ strCategory }) => strCategory);
    const filteredMeals = meals.filter((_, index) => index < Number('12'));

    const context = {
      filteredMeals,
      mealCategories: categories,
    };

    const { getAllByTestId } = (
      renderWithRouter(<Meals testeContext={ MockContext } />, context)
    );

    const mealsCard = getAllByTestId(/recipe-card/gi);
    expect(mealsCard.length).toBe(Number('12'));
  });

  it('25.2 - Testa se todos os 12 cards de bebidas aparecem na tela', () => {
    const categories = drinkCategories.map(({ strCategory }) => strCategory);
    const filteredDrinks = drinks.filter((_, index) => index < Number('12'));

    const context = {
      filteredDrinks,
      drinkCategories: categories,
    };

    const { getAllByTestId } = (
      renderWithRouter(<Drinks testeContext={ MockContext } />, context)
    );

    const drinksCard = getAllByTestId(/recipe-card/gi);
    expect(drinksCard.length).toBe(Number('12'));
  });

  it('26.1 - As 12 primeiras receitas de comidas são mostradas na tela', () => {
    const categories = mealCategories.map(({ strCategory }) => strCategory);
    const filteredMeals = meals.filter((_, index) => index < Number('12'));

    const context = {
      filteredMeals,
      mealCategories: categories,
    };

    const { getAllByTestId, getByText } = (
      renderWithRouter(<Meals testeContext={ MockContext } />, context)
    );

    const allMeals = getAllByTestId(/card-name/g);
    const lastMeal = getByText(/pancakes/ig);
    expect(allMeals.length).toBe(Number('12'));
    expect(lastMeal).toEqual(allMeals[11]);
  });

  it('26.2 - As 12 primeiras receitas de bebidas são mostradas na tela', () => {
    const categories = drinkCategories.map(({ strCategory }) => strCategory);
    const filteredDrinks = drinks.filter((_, index) => index < Number('12'));

    const context = {
      filteredDrinks,
      drinkCategories: categories,
    };

    const { getAllByTestId, getByText } = (
      renderWithRouter(<Drinks testeContext={ MockContext } />, context)
    );
    const allDrinks = getAllByTestId(/card-name/g);
    const lastDrink = getByText(/b-52/ig);
    expect(allDrinks.length).toBe(Number('12'));
    expect(lastDrink).toEqual(allDrinks[11]);
  });

  it('27.1 - Mostra as 5 primeiro categorias de comidas como botões', async () => {
    const categories = mealCategories
      .map(({ strCategory }) => strCategory)
      .filter((_, index) => index < Number('5'));
    const filteredMeals = meals.filter((_, index) => index < Number('12'));

    const context = {
      filteredMeals,
      mealCategories: categories,
    };

    const { findAllByTestId } = (
      renderWithRouter(<Meals testeContext={ MockContext } />, context)
    );
    const allButtons = await findAllByTestId(/category/g);
    // allButtons.splice(0, 1);
    // getByText(/oi/g)
    console.log(allButtons);
    // expect(allButtons.length).toBe(6);
    // expect(getByText(/goat/ig)).toBeInTheDocument();
  });
});
