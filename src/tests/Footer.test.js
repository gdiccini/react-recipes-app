import React from 'react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import Meals from '../pages/Meals';
import Footer from '../components/Footer';

describe('Testes referentes ao Footer', () => {
  const FOOTER = 'footer';
  const DRINKS_BTN = 'drinks-bottom-btn';
  const EXPLORE_BTN = 'explore-bottom-btn';
  const MEALS_BTN = 'food-bottom-btn';

  it('19.1 - verifica se renderiza o footer corretamente', () => {
    const { getByTestId } = renderWithRouter(<Meals />);
    const footer = getByTestId(FOOTER);

    expect(footer).toBeInTheDocument();
  });

  it('19.2 - verifica se renderiza o botão de bebidas corretamente', () => {
    const { getByTestId } = renderWithRouter(<Meals />);
    const drinksBtn = getByTestId(DRINKS_BTN);

    expect(drinksBtn).toBeInTheDocument();
  });

  it('19.3 - verifica se renderiza o botão de explorar corretamente', () => {
    const { getByTestId } = renderWithRouter(<Meals />);
    const exploreBtn = getByTestId(EXPLORE_BTN);

    expect(exploreBtn).toBeInTheDocument();
  });

  it('19.4 - verifica se renderiza o botão de comidas corretamente', () => {
    const { getByTestId } = renderWithRouter(<Meals />);
    const mealsBtn = getByTestId(MEALS_BTN);

    expect(mealsBtn).toBeInTheDocument();
  });

  it('20.1 - verifica o ícone do botão de bebidas', () => {
    const { getAllByRole } = renderWithRouter(<Footer />);
    const drinksIcon = getAllByRole('img')[0];
    expect(drinksIcon.src).toBe('http://localhost/drinkIcon.svg');
  });

  it('20.2 - verifica o ícone do botão de explorar', () => {
    const { getAllByRole } = renderWithRouter(<Footer />);
    const exploreIcon = getAllByRole('img')[1];
    expect(exploreIcon.src).toBe('http://localhost/exploreIcon.svg');
  });

  it('20.3 - verifica o ícone do botão de comidas', () => {
    const { getAllByRole } = renderWithRouter(<Footer />);
    const mealIcon = getAllByRole('img')[2];
    expect(mealIcon.src).toBe('http://localhost/mealIcon.svg');
  });

  it('22 - verifica a rota do botão de bebidas', () => {
    const { getByTestId, history } = renderWithRouter(<Meals />);
    const drinksBtn = getByTestId(DRINKS_BTN);
    userEvent.click(drinksBtn);
    expect(history.location.pathname).toBe('/bebidas');
  });

  it('23 - verifica a rota do botão de explorar', () => {
    const { getByTestId, history } = renderWithRouter(<Meals />);
    const exploreBtn = getByTestId(EXPLORE_BTN);
    userEvent.click(exploreBtn);
    expect(history.location.pathname).toBe('/explorar');
  });

  it('24 - verifica a rota do botão de comidas', () => {
    const { getByTestId, history } = renderWithRouter(<Meals />);
    const exploreBtn = getByTestId(EXPLORE_BTN);
    userEvent.click(exploreBtn);
    const mealsBtn = getByTestId(MEALS_BTN);
    userEvent.click(mealsBtn);
    expect(history.location.pathname).toBe('/comidas');
  });
});
