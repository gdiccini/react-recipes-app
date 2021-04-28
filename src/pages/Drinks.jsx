import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Drinks() {
  const searchIcon = true;
  return (
    <div>
      <Header title="Bebidas" searchIcon={ searchIcon } />
      <h6>bebidas</h6>
      <Footer />
    </div>
  );
}
