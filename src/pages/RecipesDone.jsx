import React from 'react';
import Header from '../components/Header';

export default function RecipesDone() {
  const searchIcon = false;
  return (
    <div>
      <Header title="Receitas Feitas" searchIcon={ searchIcon } />
      <h6>receitas feitas</h6>
    </div>
  );
}
