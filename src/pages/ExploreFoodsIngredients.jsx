import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import '../styles/ExploreIngredients.css';

export default function ExploreFoodsIngredients() {
  const searchIcon = false;
  const itemCardMax = 12;
  const [loading, setLoading] = useState(true);
  const [ingredients, setIngredients] = useState([]);

  const getIngredients = async () => {
    const ingredientListAPI = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
    const ingredientList = await fetch(ingredientListAPI)
      .then((resp) => resp.json())
      .then((json) => json.meals);
    setIngredients(ingredientList);
    setLoading(false);
  };

  useEffect(() => {
    getIngredients();
  }, []);

  return (
    <div>
      <Header title="Explorar Ingredientes" searchIcon={ searchIcon } />
      <main className="ingredientList">
        {loading ? <Loading /> : ingredients
          .filter((_item, index) => index < itemCardMax)
          .map((item, index) => (
            <div
              key={ item.strIngredient }
              data-testid={ `${index}-ingredient-card` }
              className="ingredient-card"
            >
              <img
                src={ `https://www.themealdb.com/images/ingredients/${item.strIngredient}-Small.png` }
                alt={ item.strIngredient }
                data-testid={ `${index}-card-img` }
              />
              <p data-testid={ `${index}-card-name` }>{item.strIngredient}</p>
            </div>
          ))}
      </main>
      <Footer />
    </div>
  );
}
