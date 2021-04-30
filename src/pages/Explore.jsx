import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Explore.css';

export default function Explore() {
  const searchIcon = false;
  return (
    <div>
      <Header title="Explorar" searchIcon={ searchIcon } />
      <div className="Explore">
        <Link to="/explorar/comidas">
          <button type="button" data-testid="explore-food">Explorar Comidas</button>
        </Link>
        <Link to="/explorar/bebidas">
          <button type="button" data-testid="explore-drinks">Explorar Bebidas</button>
        </Link>
        <Footer />
      </div>
      <Footer />
    </div>
  );
}
