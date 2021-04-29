import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBarMeals from '../components/SearchBarMeals';

export default function Meals() {
  const searchIcon = true;
  return (
    <div>
      <Header title="Comidas" component={ <SearchBarMeals /> } searchIcon={ searchIcon } />
      <h6>comidas</h6>
      <Footer />
    </div>
  );
}
