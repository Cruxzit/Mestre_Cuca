import React from 'react';
import { Link } from 'react-router-dom';
import recipes from './data/recipes';
// favorites managed on recipe details page only
import { MdRestaurant } from 'react-icons/md';

const categoryConfig = [
	{
		key: 'carne',
		title: 'Pratos de Carne',
		ids: [1, 4, 7, 15, 16, 21, 19]
	},
	{
		key: 'peixe',
		title: 'Peixes e Mariscos',
		ids: [5, 6, 13]
	},
	{
		key: 'sobremesa',
		title: 'Sobremesas',
		ids: [3, 12, 20]
	},
	{
		key: 'pequeno-almoco',
		title: 'Pequeno-almoço',
		ids: [11, 20]
	}
]

const Categorias = () => {
	return (
		<main className="categories-page">
			<h2 className="categories-title">Categorias</h2>

			{categoryConfig.map(cat => {
				const items = recipes.filter(r => cat.ids.includes(r.id))
				if (items.length === 0) return null

				return (
					<section className="category-section" key={cat.key} aria-labelledby={`cat-${cat.key}`}>
						<h3 id={`cat-${cat.key}`}>{cat.title}</h3>
						<div className="recipes-grid">
							{items.map(recipe => (
								<Link to={`/receitas/${recipe.id}`} key={recipe.id} className="recipe-card-link">
									<div className="recipe-card" role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter') e.currentTarget.click(); }}>
											<div className="recipe-image-container">
												<img src={recipe.image} alt={recipe.title} className="recipe-image" />
											</div>
										<div className="recipe-info">
											<h4 className="recipe-name">{recipe.title}</h4>
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
					</section>
				)
			})}
		</main>
	)
}

export default Categorias;
