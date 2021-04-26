import React from 'react';
import Header from '../components/Header';

export default function FavoriteRecipes() {
  const searchIcon = false;
  return (
    <div>
      <Header title="Receitas Favoritas" searchIcon={ searchIcon } />
      <h6>receitas favoritas</h6>
    </div>
  );
}
