import React from 'react';
// import userEvent from '@testing-library/user-event';

import renderWithRouter from './renderWithRouterContext';
import { meals } from '../../cypress/mocks/meals';
import { meals as mealCategories } from '../../cypress/mocks/mealCategories';
import { drinks } from '../../cypress/mocks/drinks';

import Meals from '../pages/Meals';
import Drinks from '../pages/Drinks';
import { MealsProvider } from '../context/MealsContext';
import { DrinksProvider } from '../context/DrinksContext';

// const teste = (
//   <BrowserRouter>
//     <Meals />
//   </BrowserRouter>
// );

// const wrapper = ({ children }) => (
//   <MealsProvider context={ meals }>
//     {children}
//   </MealsProvider>
// );

describe('Testes da tela principal de receitas', () => {
  it('25.1 - Testa se todos os 12 cards de comidas aparecem na tela', async () => {
    const { findAllByTestId } = renderWithRouter(<Meals />, meals, MealsProvider);

    const mealsCard = await findAllByTestId(/recipe-card/gi);
    expect(mealsCard.length).toBe(Number('12'));
  });

  it('25.2 - Testa se todos os 12 cards de bebidas aparecem na tela', async () => {
    const { findAllByTestId } = renderWithRouter(<Drinks />, drinks, DrinksProvider);

    const mealsCard = await findAllByTestId(/recipe-card/gi);
    expect(mealsCard.length).toBe(Number('12'));
  });

  it('26.1 - As 12 primeiras receitas de comidas são mostradas na tela', async () => {
    const {
      getByText,
      findAllByTestId,
    } = renderWithRouter(<Meals />, meals, MealsProvider);

    const allMeals = await findAllByTestId(/card-name/g);
    const lastMeal = getByText(/kapsalon/ig);
    expect(allMeals.length).toBe(Number('12'));
    expect(lastMeal).toEqual(allMeals[11]);
  });

  it('26.2 - As 12 primeiras receitas de bebidas são mostradas na tela', async () => {
    const {
      getByText,
      findAllByTestId,
    } = renderWithRouter(<Drinks />, drinks, DrinksProvider);

    const allDrinks = await findAllByTestId(/card-name/g);
    const lastDrink = getByText(/b-52/ig);
    expect(allDrinks.length).toBe(Number('12'));
    expect(lastDrink).toEqual(allDrinks[11]);
  });

  it('27.1 - Mostra as 5 primeiro categorias de comidas como botões', async () => {
    const categories = mealCategories.map(({ strCategory }) => strCategory);

    const {
      getByText,
      // findAllByTestId,
    } = renderWithRouter(<Meals />, categories, MealsProvider);

    // const allButtons = await findAllByTestId(/category-filter/g);
    // const filterAllButton = allButtons.splice(0, 1);
    // console.log(allButtons);
    expect(getByText(/beef/gi)).toBeDefined();
  });
});
