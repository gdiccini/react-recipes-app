import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import IngredientCard from '../components/IngredientCard';
import useIngredientList from '../effects/useIngredientList';

export default function ExploreDrinksIngredients() {
  const searchIcon = false;
  const itemCardMax = 12;
  const mealsOrDrinks = 'drinks';
  const [loading, setLoading] = useState(true);
  const [ingredients, setIngredients] = useState([]);

  useIngredientList(setIngredients, setLoading, mealsOrDrinks);

  return (
    <div>
      <Header title="Explorar Ingredientes" searchIcon={ searchIcon } />
      <main className="ingredientList">
        {loading ? <Loading /> : ingredients
          .filter((_item, index) => index < itemCardMax)
          .map((item, index) => (
            <IngredientCard
              item={ item }
              index={ index }
              mealsOrDrinks={ mealsOrDrinks }
              key={ index }
            />
          ))}
      </main>
      <Footer />
    </div>
  );
}
