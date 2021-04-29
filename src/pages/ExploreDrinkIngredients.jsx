import React from 'react';
import Header from '../components/Header';

export default function ExploreDrinksIngredients() {
  const searchIcon = false;
  return (
    <div>
      <Header title="Explorar Ingredientes" searchIcon={ searchIcon } />
      <h6>explorar ingredientes de bebidas</h6>
    </div>
  );
}
