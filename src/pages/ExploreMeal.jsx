import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchRandomMeal } from '../services/APIEndpoints';

export default function ExploreFoods() {
  const searchIcon = false;

  const [id, setId] = useState('');

  useEffect(() => {
    async function getRandomMeal() {
      const meal = await fetchRandomMeal();
      setId(meal.meals[0].idMeal);
    }
    getRandomMeal();
  }, []);

  return (
    <div>
      <Header title="Explorar Comidas" searchIcon={ searchIcon } />
      <div className="link-container">
        <Link to="/explorar/comidas/ingredientes">
          <button type="button" data-testid="explore-by-ingredient">
            Por Ingredientes
          </button>
        </Link>
      </div>
      <div className="link-container">
        <Link to="/explorar/comidas/area">
          <button type="button" data-testid="explore-by-area">
            Por Local de Origem
          </button>
        </Link>
      </div>
      <div className="link-container">
        <Link to={ `/comidas/${id}` }>
          <button type="button" data-testid="explore-surprise">
            Me Surpreenda!
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
