import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchRandomDrink } from '../services/APIEndpoints';

export default function ExploreDrinks() {
  const searchIcon = false;

  const [id, setId] = useState('');

  useEffect(() => {
    async function getRandomDrink() {
      const drink = await fetchRandomDrink();
      setId(drink.drinks[0].idDrink);
    }
    getRandomDrink();
  }, []);

  return (
    <div>
      <Header title="Explorar Bebidas" searchIcon={ searchIcon } />
      <Link to="/explorar/bebidas/ingredientes">
        <button type="button" data-testid="explore-by-ingredient">
          Por Ingredientes
        </button>
      </Link>
      <Link to={ `/bebidas/${id}` }>
        <button type="button" data-testid="explore-surprise">
          Me Surpreenda!
        </button>
      </Link>
      <Footer />
    </div>
  );
}
