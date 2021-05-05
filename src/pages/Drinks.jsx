import React, { useContext, useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { shape } from 'prop-types';

import Header from '../components/Header';
import { DrinksContext } from '../context/DrinksContext';
import Footer from '../components/Footer';

import RecipeCard from '../components/RecipeCard';

export default function Drinks({ testeContext }) {
  const {
    filteredDrinks, drinkCategories, toggleCategoryFilter,
  } = useContext(testeContext || DrinksContext);
  const [searchBarOn, setSearchBarOn] = useState(false);
  const [drinks, setDrinks] = useState([]);
  const [categories, setCategories] = useState([]);

  const maxDrinks = 12;
  const maxCategories = 5;

  useEffect(() => {
    setDrinks(filteredDrinks.slice(0, maxDrinks));
  }, [filteredDrinks, setDrinks]);

  useEffect(() => {
    setCategories(drinkCategories.slice(0, maxCategories));
  }, [drinkCategories, setCategories]);

  const newRecipes = (recipes) => {
    setDrinks(recipes);
  };

  return (
    <div>
      { drinks.length === 1 && <Redirect to={ `/bebidas/${drinks[0].idDrink}` } /> }
      <Header
        title="Bebidas"
        setSearchBarOn={ setSearchBarOn }
        searchBarOn={ searchBarOn }
        recipeType="drink"
        newRecipes={ newRecipes }
        searchIcon
      />

      <div className="ingredientList">
        <div className="category-container">
          <div>
            <button
              data-testid="All-category-filter"
              onClick={ toggleCategoryFilter }
              type="button"
              className="filter-btn"
            >
              All
            </button>
          </div>
          {
            categories !== [] && categories.map((category) => (
              <div key={ category }>
                <button
                  data-testid={ `${category}-category-filter` }
                  onClick={ toggleCategoryFilter }
                  type="button"
                  className="filter-btn"
                >
                  {category}
                </button>
              </div>
            ))
          }
        </div>
        {
          drinks !== [] && drinks.map((drink, index, array) => {
            const card = (
              <RecipeCard
                key={ drink.idDrink }
                recipe={ drink }
                index={ index }
              />
            );

            return array.length > 1
              ? (
                <div className="link-container">
                  <Link
                    key={ drink.idDrink }
                    to={ `/bebidas/${drink.idDrink}` }
                  >
                    {card}
                  </Link>
                </div>
              )
              : card;
          })
        }
      </div>
      <Footer />
    </div>
  );
}

Drinks.propTypes = {
  testeContext: shape({}),
};

Drinks.defaultProps = {
  testeContext: undefined,
};
