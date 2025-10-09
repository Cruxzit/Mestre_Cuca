import React from 'react';
import { Link } from 'react-router-dom';
import recipes from './data/recipes';
import { useFavorites } from './hooks/useFavorites';

const Favorites = () => {
  const { getFavoriteRecipes, toggleFavorite, isFavorite, favoritesCount } = useFavorites();
  const favoriteRecipes = getFavoriteRecipes(recipes);

  if (favoritesCount === 0) {
    return (
      <main className="favorites-page">
        <h2 className="favorites-title">Receitas Favoritas</h2>
        <div className="favorites-empty">
          <p>Ainda não tens receitas favoritas.</p>
          <p>Explora as nossas receitas e adiciona as que mais gostas!</p>
          <Link to="/receitas" className="btn-primary">Ver Receitas</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="favorites-page">
      <h2 className="favorites-title">
        Receitas Favoritas ({favoritesCount})
      </h2>
      <div className="recipes-grid">
        {favoriteRecipes.map((recipe) => (
          <div className="recipe-card" key={recipe.id}>
            <div className="recipe-image-container">
              <img src={recipe.image} alt={recipe.title} className="recipe-image" />
              <button 
                className={`favorite-btn ${isFavorite(recipe.id) ? 'favorite-active' : ''}`}
                onClick={() => toggleFavorite(recipe.id)}
                aria-label="Remover dos favoritos"
              >
                ❤️
              </button>
            </div>
            <div className="recipe-info">
              <h3 className="recipe-name">{recipe.title}</h3>
              <p className="recipe-desc">{recipe.description}</p>
              <div className="recipe-meta">
                <span className="recipe-time">⏱ {recipe.time}</span>
                <span className="recipe-difficulty">Dificuldade: {recipe.difficulty}</span>
              </div>
              <Link to={`/receitas/${recipe.id}`} className="btn-primary">Ver Receita</Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Favorites;