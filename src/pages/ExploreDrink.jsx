import React from 'react';
import Header from '../components/Header';

export default function ExploreDrinks() {
  const searchIcon = false;
  return (
    <div>
      <Header title="Explorar Bebidas" searchIcon={ searchIcon } />
      <h6>explorar Ingredientes</h6>
    </div>
  );
}
