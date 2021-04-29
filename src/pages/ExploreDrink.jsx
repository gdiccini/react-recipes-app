import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ExploreDrinks() {
  const searchIcon = false;
  return (
    <div>
      <Header title="Explorar Bebidas" searchIcon={ searchIcon } />
      <Link to="/explorar/bebidas/ingredientes">
        <button type="button" data-testid="explore-by-ingredient">
          Por Ingredientes
        </button>
      </Link>
      {/* Requisito 74 abaixo, precisa que seja implementada tela de detalhes */}
      {/* <Link to="/explorar/bebidas/ingredientes"> */}
      <button type="button" data-testid="explore-surprise">
        Me Surpreenda!
      </button>
      {/* </Link> */}
      <Footer />
    </div>
  );
}
