import React from 'react';
import Header from '../components/Header';

export default function ExploreFoodsIngredients() {
  const searchIcon = false;
  return (
    <div>
      <Header title="Explorar Ingredientes" searchIcon={ searchIcon } />
      <h6>explorar ingredientes de comida</h6>
    </div>
  );
}
