import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchMeals, fetchMealsAreas, fetchMealsByArea } from '../services/APIEndpoints';
import RecipeCard from '../components/RecipeCard';

export default function ExploreFoodByOrigin() {
  const searchIcon = true;
  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState('All');
  const [mealsByArea, setMealsByArea] = useState([]);

  useEffect(() => {
    async function getAreas() {
      const mealsAreas = await fetchMealsAreas();
      setAreas(mealsAreas.meals.map((area) => area.strArea));
    }
    getAreas();
  }, []);

  useEffect(() => {
    async function getMealsByArea() {
      if (selectedArea !== undefined && selectedArea !== 'All') {
        const meals = await fetchMealsByArea(selectedArea);
        setMealsByArea(meals.meals.filter((_, index) => index < Number('12')));
      } else {
        const meals = await fetchMeals();
        setMealsByArea(meals.meals.filter((_, index) => index < Number('12')));
      }
    }
    getMealsByArea();
  }, [selectedArea]);

  const handleChange = ({ target }) => {
    setSelectedArea(target.value);
  };

  return (
    <div>
      <Header title="Explorar Origem" searchIcon={ searchIcon } />
      <h6>explorar comidas por origem</h6>
      <select data-testid="explore-by-area-dropdown" onChange={ handleChange }>
        {/* Precisa rever o requisito  80 sobre o option ALL */}
        <option data-testid="All-option" value="All">All</option>
        {
          areas.map((area, index) => (
            <option
              key={ index }
              data-testid={ `${area}-option` }
              value={ area }
            >
              {area}
            </option>
          ))
        }
      </select>
      {
        (mealsByArea.length > 1) && mealsByArea.map((meal, index) => (
          <Link key={ meal.idmeal } to={ `/comidas/${meal.idMeal}` }>
            <RecipeCard
              key={ meal.idmeal }
              recipe={ meal }
              index={ index }
            />
          </Link>
        ))
      }
      <Footer />
    </div>
  );
}
