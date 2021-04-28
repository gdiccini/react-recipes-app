import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Footer from '../components/Footer';
import Header from '../components/Header';
import DrinkCard from '../components/DrinkCard';
import { DrinksContext } from '../context/DrinksContext';

export default function Drinks() {
  const {
    filteredDrinks: drinks, drinkCategories, toggleCategoryFilter,
  } = useContext(DrinksContext);
  const searchIcon = true;
  return (
    <div>
      <Header title="Bebidas" searchIcon={ searchIcon } />

      <div>
        <button
          data-testid="All-category-filter"
          onClick={ toggleCategoryFilter }
          type="button"
        >
          All
        </button>
      </div>

      {
        drinkCategories.map((category) => (
          <div key={ category }>
            <button
              data-testid={ `${category}-category-filter` }
              onClick={ toggleCategoryFilter }
              type="button"
            >
              {category}
            </button>
          </div>
        ))
      }

      {
        drinks.map((drink, index, array) => {
          const card = (
            <DrinkCard
              key={ drink.idDrink }
              drink={ drink }
              index={ index }
            />
          );

          return array.length > 1
            ? <Link key={ drink.idDrink } to={ `/bebidas/${drink.idDrink}` }>{card}</Link>
            : card;
        })
      }

      <Footer />
    </div>
  );
}
