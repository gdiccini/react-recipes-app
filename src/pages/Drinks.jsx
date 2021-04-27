import React from 'react';
import Header from '../components/Header';

export default function Drinks() {
  const searchIcon = true;
  return (
    <div>
      <Header title="Bebidas" searchIcon={ searchIcon } />
      <h6>bebidas</h6>
    </div>
  );
}
