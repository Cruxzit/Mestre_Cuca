import React from 'react';
import { useParams, Link } from 'react-router-dom';
import recipes from './data/recipes';
import { useFavorites } from './hooks/useFavorites';
import FaveButton from './components/FaveButton';

const RecipeDetalhes = () => {
  const { id } = useParams();
  const recipeId = Number(id);
  const recipe = recipes.find((r) => r.id === recipeId);
  const { toggleFavorite, isFavorite } = useFavorites();

  if (!recipe) {
    return (
      <main className="recipe-detail">
        <h2>Receita não encontrada</h2>
        <Link to="/receitas" className="btn-primary">Voltar às receitas</Link>
      </main>
    );
  }

  return (
    <main className="recipe-detail">
      <div className="detail-header">
        <h2>{recipe.title}</h2>
        <div className="detail-header-actions">
          <FaveButton 
            isLiked={isFavorite(recipe.id)}
            onToggle={() => toggleFavorite(recipe.id)}
            size="large"
            className="fave-button-header-action"
          >
            {isFavorite(recipe.id) ? 'Favorito' : 'Adicionar aos Favoritos'}
          </FaveButton>
          <Link to="/receitas" className="btn-secondary">← Voltar</Link>
        </div>
      </div>
      <img src={recipe.image} alt={recipe.title} className="detail-image" />
      <p className="detail-description">{recipe.description}</p>

      <div className="detail-meta">
        <span>⏱ {recipe.time}</span>
        <span>Dificuldade: {recipe.difficulty}</span>
      </div>

      {recipe.ingredients && (
        <section className="detail-ingredients">
          <h3>Ingredientes</h3>
          <ul>
            {recipe.ingredients.map((ing, idx) => (
              <li key={idx}>{ing}</li>
            ))}
          </ul>
        </section>
      )}

      {recipe.instructions && (
        <section className="detail-instructions">
          <h3>Preparação</h3>
          <ol>
            {recipe.instructions.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        </section>
      )}
    </main>
  );
};

export default RecipeDetalhes;
