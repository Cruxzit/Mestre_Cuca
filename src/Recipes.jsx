import React from "react";
import { Link } from 'react-router-dom';
import recipes from './data/recipes';
// favorites managed on recipe details page only
import { MdRestaurant } from 'react-icons/md';

const Recipes = () => {
  return (
    <main className="recipes-page">
      <h2 className="recipes-title">Receitas</h2>
      <div className="recipes-grid">
        {recipes.map((recipe) => (
          <Link to={`/receitas/${recipe.id}`} key={recipe.id} className="recipe-card-link">
            <div className="recipe-card" role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter') e.currentTarget.click(); }}>
              <div className="recipe-image-container">
                <img src={recipe.image} alt={recipe.title} className="recipe-image" />
              </div>
              <div className="recipe-info">
                <h3 className="recipe-name">{recipe.title}</h3>
                <p className="recipe-desc">{recipe.description}</p>
                <div className="recipe-meta">
                  <span className="recipe-time">⏱ {recipe.time}</span>
                  <span className="recipe-difficulty"><MdRestaurant /> {recipe.difficulty}</span>
                </div>
                <div className="card-actions">
                  <span className="btn-primary">Ver Receita</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Recipes;