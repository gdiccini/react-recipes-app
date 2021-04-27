import React, { useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import DrinkCard from '../components/DrinkCard';
import { DrinksContext } from '../context/DrinksContext';

export default function Drinks() {
  const { drinks } = useContext(DrinksContext);
  const searchIcon = true;
  return (
    <div>
      <Header title="Bebidas" searchIcon={ searchIcon } />

      {
        drinks.map((drink, index) => (
          <DrinkCard
            key={ drink.idDrink }
            drink={ drink }
            index={ index }
          />
        ))
      }

      <Footer />
    </div>
  );
}
