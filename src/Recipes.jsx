import React from "react";
import { Link } from 'react-router-dom';
import recipes from './data/recipes';
import { useFavorites } from './hooks/useFavorites';
import FaveButton from './components/FaveButton';

const Recipes = () => {
  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    <main className="recipes-page">
      <h2 className="recipes-title">Receitas</h2>
      <div className="recipes-grid">
        {recipes.map((recipe) => (
          <div className="recipe-card" key={recipe.id}>
            <div className="recipe-image-container">
              <img src={recipe.image} alt={recipe.title} className="recipe-image" />
              <FaveButton 
                isLiked={isFavorite(recipe.id)}
                onToggle={() => toggleFavorite(recipe.id)}
                size="medium"
                className="fave-button-positioned fave-button-top-right"
              />
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

export default Recipes;