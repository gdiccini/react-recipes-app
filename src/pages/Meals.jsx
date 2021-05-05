import React, { useContext, useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { shape } from 'prop-types';

import Header from '../components/Header';
import Footer from '../components/Footer';

import { MealsContext } from '../context/MealsContext';
import RecipeCard from '../components/RecipeCard';

export default function Meals({ testeContext }) {
  const {
    filteredMeals, mealCategories, toggleCategoryFilter,
  } = useContext(testeContext || MealsContext);
  const [searchBarOn, setSearchBarOn] = useState(false);
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);

  const maxMeals = 12;
  const maxCategories = 5;

  useEffect(() => {
    setMeals(filteredMeals.slice(0, maxMeals));
  }, [filteredMeals, setMeals]);

  useEffect(() => {
    setCategories(mealCategories.slice(0, maxCategories));
  }, [mealCategories, setCategories]);

  const newRecipes = (recipes) => {
    setMeals(recipes);
  };

  return (
    <div>
      { meals.length === 1 && <Redirect to={ `/comidas/${meals[0].idMeal}` } /> }
      <Header
        title="Comidas"
        setSearchBarOn={ setSearchBarOn }
        searchBarOn={ searchBarOn }
        recipeType="meal"
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
          meals !== [] && meals.map((meal, index, array) => {
            const card = (
              <RecipeCard
                key={ meal.idMeal }
                recipe={ meal }
                index={ index }
              />
            );

            return array.length > 1
              ? (
                <div className="link-container">
                  <Link key={ meal.idMeal } to={ `/comidas/${meal.idMeal}` }>{card}</Link>
                </div>)
              : card;
          })
        }
      </div>
      <Footer />
    </div>
  );
}

Meals.propTypes = {
  testeContext: shape({}),
};

Meals.defaultProps = {
  testeContext: undefined,
};
