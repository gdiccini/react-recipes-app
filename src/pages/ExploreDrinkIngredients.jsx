import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { DrinksContext } from '../context/DrinksContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import IngredientCard from '../components/IngredientCard';
import useIngredientList from '../effects/useIngredientList';

import '../styles/ExploreIngredients.css';

export default function ExploreDrinksIngredients() {
  const searchIcon = false;
  const itemCardMax = 12;
  const mealsOrDrinks = 'drinks';
  const [loading, setLoading] = useState(true);
  const [ingredients, setIngredients] = useState([]);
  const { setIngredientFilter } = useContext(DrinksContext);

  useIngredientList(setIngredients, setLoading, mealsOrDrinks);

  return (
    <div>
      <Header title="Explorar Ingredientes" searchIcon={ searchIcon } />
      <main className="ingredientList">
        {loading ? <Loading /> : ingredients
          .filter((_item, index) => index < itemCardMax)
          .map((item, index) => (
            <Link
              key={ index }
              to="/bebidas"
              onClick={ () => setIngredientFilter(item.strIngredient1) }
            >
              <IngredientCard
                item={ item }
                index={ index }
                mealsOrDrinks={ mealsOrDrinks }
              />
            </Link>
          ))}
      </main>
      <Footer />
    </div>
  );
}
