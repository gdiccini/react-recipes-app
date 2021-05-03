import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/DoneRecipes.css';

export default function DoneRecipes() {
  const searchIcon = false;

  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const [filteredRecipes, setFilteredRecipes] = useState(doneRecipes);

  const handleFilter = ({ target }) => {
    switch (target.innerText) {
    default:
      setFilteredRecipes(doneRecipes
        .filter(({ type }) => type.includes('')));
      break;
    case 'Food':
      setFilteredRecipes(doneRecipes
        .filter(({ type }) => type.includes('comida')));
      break;
    case 'Drinks':
      setFilteredRecipes(doneRecipes
        .filter(({ type }) => type.includes('bebida')));
    }
  };

  const copyToCliboard = ({ type, id }) => {
    const delay = 1750;
    navigator.clipboard.writeText(`http://localhost:3000/${type}s/${id}`);
    setTimeout(setIsLinkCopied, delay, false);
    setIsLinkCopied(true);
  };

  return (
    <section>
      <Header title="Receitas Feitas" searchIcon={ searchIcon } />

      <div>
        <button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ handleFilter }
        >
          All
        </button>

        <button
          type="button"
          data-testid="filter-by-food-btn"
          onClick={ handleFilter }
        >
          Food
        </button>

        <button
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ handleFilter }
        >
          Drinks
        </button>
      </div>

      {
        filteredRecipes.map((recipe, index) => (
          <div key={ recipe.id }>
            <Link to={ `/${recipe.type}s/${recipe.id}` }>
              <img
                className="recipe-img"
                data-testid={ `${index}-horizontal-image` }
                src={ recipe.image }
                alt={ recipe.name }
              />
            </Link>

            <p
              data-testid={ `${index}-horizontal-top-text` }
            >
              {`${recipe.alcoholicOrNot}` || `${recipe.area} - ${recipe.category}`}
            </p>

            <Link to={ `/${recipe.type}s/${recipe.id}` }>
              <h4 data-testid={ `${index}-horizontal-name` }>{recipe.name}</h4>
            </Link>

            <p data-testid={ `${index}-horizontal-done-date` }>{recipe.doneDate}</p>

            <button
              type="button"
              onClick={ () => copyToCliboard(recipe) }
            >
              <img
                data-testid={ `${index}-horizontal-share-btn` }
                src="/shareIcon.svg"
                alt="Compartilhar receita"
              />
            </button>

            {
              recipe.tags.map((tag, indexTag) => indexTag < 2 && (
                <div
                  key={ tag }
                  data-testid={ `${index}-${tag}-horizontal-tag` }
                >
                  {tag}
                </div>
              ))
            }
          </div>
        ))
      }

      { isLinkCopied && (
        <p>Link copiado!</p>
      )}
    </section>
  );
}
