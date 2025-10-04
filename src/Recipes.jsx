import React from "react";
import { Link } from 'react-router-dom';
import recipes from './data/recipes';

const Recipes = () => (
  <main className="recipes-page">
    <h2 className="recipes-title">Receitas</h2>
    <div className="recipes-grid">
      {recipes.map((recipe) => (
        <div className="recipe-card" key={recipe.id}>
          <img src={recipe.image} alt={recipe.title} className="recipe-image" />
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

export default Recipes;