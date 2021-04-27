import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Foods() {
  const searchIcon = true;
  return (
    <div>
      <Header title="Comidas" searchIcon={ searchIcon } />
      <h6>comidas</h6>
      <Footer />
    </div>
  );
}
