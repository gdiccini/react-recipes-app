import React from 'react';
import Header from '../components/Header';

export default function Profile() {
  const searchIcon = false;
  return (
    <div>
      <Header title="Perfil" searchIcon={ searchIcon } />
    </div>
  );
}
