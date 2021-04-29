import React from 'react';
import Header from '../components/Header';

export default function ExploreFoodByOrigin() {
  const searchIcon = true;
  return (
    <div>
      <Header title="Explorar Origem" searchIcon={ searchIcon } />
      <h6>explorar comidas por origem</h6>
    </div>
  );
}
