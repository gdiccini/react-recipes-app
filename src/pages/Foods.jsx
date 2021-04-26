import React from 'react';
import Header from '../components/Header';

export default function Foods() {
  const searchIcon = true;
  return (
    <div>
      <Header title="Comidas" searchIcon={ searchIcon } />
      <h6>comidas</h6>
    </div>
  );
}
