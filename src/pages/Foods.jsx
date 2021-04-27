import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import FoodCard from '../components/FoodCard';
import { MealsContext } from '../context/MealsContext';

export default function Foods() {
  const { meals } = useContext(MealsContext);
  const searchIcon = true;
  return (
    <div>
      <Header title="Comidas" searchIcon={ searchIcon } />

      {
        meals.map((meal, index) => (
          <FoodCard
            key={ meal.idMeal }
            meal={ meal }
            index={ index }
          />
        ))
      }

      <Footer />
    </div>
  );
}
