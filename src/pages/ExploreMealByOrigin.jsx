import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ExploreFoodByOrigin() {
  const searchIcon = true;
  return (
    <div>
      <Header title="Explorar Origem" searchIcon={ searchIcon } />
      <h6>explorar comidas por origem</h6>
      <Footer />
    </div>
  );
}
