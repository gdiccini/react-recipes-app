import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer data-testid="footer">
      <Link to="/bebidas">
        <img src="/drinkIcon.svg" alt="drinks icon" data-testid="drinks-bottom-btn" />
      </Link>
      <Link to="/explorar">
        <img src="/exploreIcon.svg" alt="explore icon" data-testid="explore-bottom-btn" />
      </Link>
      <Link to="/comidas">
        <img src="/mealIcon.svg" alt="meal icon" data-testid="food-bottom-btn" />
      </Link>
    </footer>
  );
}

export default Footer;
