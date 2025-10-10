import React from 'react';
import { Link } from 'react-router-dom';
import recipes from './data/recipes';
import FaveButton from './components/FaveButton';
import { useFavorites } from './hooks/useFavorites';

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
	const { isFavorite, toggleFavorite } = useFavorites();

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
								<div className="recipe-card" key={recipe.id}>
									<div className="recipe-image-container">
										<img src={recipe.image} alt={recipe.title} className="recipe-image" />
										<FaveButton
											isLiked={isFavorite(recipe.id)}
											onToggle={() => toggleFavorite(recipe.id)}
											size="small"
											className="fave-button-positioned"
										/>
									</div>
									<div className="recipe-info">
										<h4 className="recipe-name">{recipe.title}</h4>
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
					</section>
				)
			})}
		</main>
	)
}

export default Categorias;
