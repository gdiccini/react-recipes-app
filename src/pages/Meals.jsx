import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { shape } from 'prop-types';

import Header from '../components/Header';
import SearchBarMeals from '../components/SearchBarMeals';
import Footer from '../components/Footer';

import { MealsContext } from '../context/MealsContext';
import RecipeCard from '../components/RecipeCard';

export default function Meals({ testeContext }) {
  const {
    filteredMeals, mealCategories, toggleCategoryFilter,
  } = useContext(testeContext || MealsContext);

  const maxMeals = 12;
  const maxCategories = 5;

  const meals = filteredMeals.slice(0, maxMeals);
  const categories = mealCategories.slice(0, maxCategories);

  return (
    <div>
      <Header
        title="Comidas"
        component={ <SearchBarMeals /> }
        searchIcon
      />

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
        categories.map((category) => (
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
        meals.map((meal, index, array) => {
          const card = (
            <RecipeCard
              key={ meal.idMeal }
              recipe={ meal }
              index={ index }
            />
          );

          return array.length > 1
            ? <Link key={ meal.idMeal } to={ `/comidas/${meal.idMeal}` }>{card}</Link>
            : card;
        })
      }

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
