import React from 'react';
import { useParams, Link } from 'react-router-dom';
import recipes from './data/recipes';
import { MdRestaurant } from 'react-icons/md';

const categoryMap = {
  carne: 'Pratos de Carne',
  peixe: 'Peixes e Mariscos',
  sobremesa: 'Sobremesas',
  'pequeno-almoco': 'Pequeno-almoço'
}

const CategoriaDetalhe = () => {
  const { slug } = useParams();
  const title = categoryMap[slug] || 'Categoria';

  // Filtrar receitas que pertençam a essa categoria (basico - ids usados no config)
  const idSets = {
    carne: [1, 4, 7, 15, 16, 21, 19],
    peixe: [5, 6, 13],
    sobremesa: [3, 12, 20],
    'pequeno-almoco': [11, 20]
  }

  const items = recipes.filter(r => (idSets[slug] || []).includes(r.id))

  return (
    <main className="recipes-page">
      <h2 className="recipes-title">{title}</h2>
      <div className="recipes-grid">
        {items.map(r => (
          <div className="recipe-card" key={r.id}>
            <img src={r.image} alt={r.title} className="recipe-image" />
            <div className="recipe-info">
              <h3 className="recipe-name">{r.title}</h3>
              <p className="recipe-desc">{r.description}</p>
              <div className="recipe-meta">
                <span className="recipe-time">⏱ {r.time}</span>
                <span className="recipe-difficulty"><MdRestaurant /> {r.difficulty}</span>
              </div>
              <Link to={`/receitas/${r.id}`} className="btn-primary">Ver Receita</Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default CategoriaDetalhe;
