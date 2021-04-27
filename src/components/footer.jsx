import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

function Footer() {
  return (
    <footer data-testid="footer">
      <Link to="/bebidas" data-testid="drinks-bottom-btn">
        <img src="/drinkIcon.svg" alt="drinks icon" />
      </Link>
      <Link to="/explorar" data-testid="explore-bottom-btn">
        <img src="/exploreIcon.svg" alt="explore icon" />
      </Link>
      <Link to="/comidas" data-testid="food-bottom-btn">
        <img src="/mealIcon.svg" alt="meal icon" />
      </Link>
    </footer>
  );
}

export default Footer;
