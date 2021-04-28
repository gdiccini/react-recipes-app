import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

import { MealsContext } from '../context/MealsContext';
import RecipeCard from '../components/RecipeCard';

export default function Meals() {
  const {
    filteredMeals: meals, mealCategories, toggleCategoryFilter,
  } = useContext(MealsContext);
  const searchIcon = true;

  return (
    <div>
      <Header title="Comidas" searchIcon={ searchIcon } />

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
        mealCategories.map((category) => (
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
