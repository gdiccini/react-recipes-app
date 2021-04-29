import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function ExploreFoods() {
  const searchIcon = false;
  return (
    <div>
      <Header title="Explorar Comidas" searchIcon={ searchIcon } />
      <Link to="/explorar/comidas/ingredientes">
        <button type="button" data-testid="explore-by-ingredient">
          Por Ingredientes
        </button>
      </Link>
      <Link to="/explorar/comidas/area">
        <button type="button" data-testid="explore-by-area">
          Por Local de Origem
        </button>
      </Link>
      {/* Requisito 74 abaixo, precisa que seja implementada tela de detalhes */}
      {/* <Link to="/explorar/comidas/ingredientes"> */}
      <button type="button" data-testid="explore-surprise">
        Me Surpreenda!
      </button>
      {/* </Link> */}
    </div>
  );
}
