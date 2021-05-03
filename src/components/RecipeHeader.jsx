import { shape } from 'prop-types';
import React, { useEffect, useState } from 'react';
import '../styles/RecipeHeader.css';

export default function RecipeHeader({ recipe, url }) {
  const { strAlcoholic, strCategory } = recipe;

  const alcoholicOrNot = strAlcoholic || '';
  const area = recipe.strArea || '';
  const category = strCategory || '';
  const id = recipe.idMeal || recipe.idDrink;
  const image = recipe.strMealThumb || recipe.strDrinkThumb;
  const name = recipe.strMeal || recipe.strDrink;
  const type = recipe.idMeal ? 'comida' : 'bebida';

  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  const verifyFavorite = favoriteRecipes.some((favorite) => favorite.id === id);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLinkCopied, setIsLinkCopied] = useState(false);

  useEffect(() => {
    setIsFavorite(verifyFavorite);
  }, [verifyFavorite]);

  const toggleFavorite = () => {
    if (isFavorite) {
      const removeFromFavorites = favoriteRecipes
        .filter((favorite) => favorite.id !== id);

      localStorage.setItem('favoriteRecipes', JSON.stringify(removeFromFavorites));
    } else {
      const newFavorite = {
        alcoholicOrNot,
        area,
        category,
        id,
        image,
        name,
        type,
      };

      localStorage
        .setItem('favoriteRecipes', JSON.stringify([...favoriteRecipes, newFavorite]));
    }
    setIsFavorite(!isFavorite);
  };

  const copyToCliboard = () => {
    const delay = 1750;
    navigator.clipboard.writeText(`http://localhost:3000${url}`);
    setTimeout(setIsLinkCopied, delay, false);
    setIsLinkCopied(true);
  };

  return (
    <header className="recipe-header">
      <img
        data-testid="recipe-photo"
        src={ image }
        alt={ name }
      />

      <h3 data-testid="recipe-title">{ name }</h3>

      <div className="btn-container">
        <button
          type="button"
          className="share-btn"
          onClick={ copyToCliboard }
        >
          <img
            data-testid="share-btn"
            src="/shareIcon.svg"
            alt="Compartilhar esta receita"
          />
        </button>

        <button
          type="button"
          onClick={ toggleFavorite }
          className="favorite-btn"
        >
          <img
            data-testid="favorite-btn"
            src={ isFavorite ? '/blackHeartIcon.svg' : '/whiteHeartIcon.svg' }
            alt="Favoritar receita"
          />
        </button>
        { isLinkCopied && <span>Link copiado!</span> }
      </div>

      <p data-testid="recipe-category">
        { strAlcoholic || strCategory }
      </p>
    </header>
  );
}

RecipeHeader.propTypes = {
  recipe: shape({}),
}.isRequired;
