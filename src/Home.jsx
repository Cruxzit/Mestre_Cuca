import React from 'react';
import { Link } from 'react-router-dom';
import recipes from './data/recipes';
import { GiSteak, GiFishCooked, GiCakeSlice, GiCoffeeCup } from 'react-icons/gi';
import { MdAccessTime, MdRestaurant } from 'react-icons/md';

const Home = () => {
  return (
    <main className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div>
          <div className="hero-content">
            <h1 className="hero-title">Bem-vindos ao Mestre Cuca</h1>
            <p className="hero-subtitle">
              Descobre receitas incríveis e transforma a tua cozinha num verdadeiro paraíso gastronómico
            </p>
            <div className="hero-buttons">
              <Link to="/receitas" className="btn-primary">Explorar Receitas</Link>
              <Link to="/categorias" className="btn-secondary">Ver Categorias</Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="/hero-cooking.jpg" alt="Cozinhando" className="hero-img" />
          </div>
        </div>
      </section>

      {/* Receitas em Destaque */}
      <section className="featured-section">
        <div className="section-header">
          <h2 className="section-title">Receitas em Destaque</h2>
          <p className="section-subtitle">As receitas mais populares da semana</p>
        </div>
        
        <div className="recipes-grid">
          <Link to="/receitas/1" className="recipe-card recipe-card-link">
            <img src="/receita1.jpg" alt="Lasanha" className="recipe-image" />
            <div className="recipe-content">
              <h3 className="recipe-title">Lasanha Bolonhesa</h3>
              <p className="recipe-description">Uma deliciosa lasanha com molho bolonhesa caseiro</p>
              <div className="recipe-meta">
                <span className="recipe-time"><MdAccessTime /> 45 min</span>
                <span className="recipe-difficulty"><MdRestaurant /> Médio</span>
              </div>
            </div>
          </Link>

          <Link to="/receitas/2" className="recipe-card recipe-card-link">
            <img src="/receita2.jpg" alt="Risotto" className="recipe-image" />
            <div className="recipe-content">
              <h3 className="recipe-title">Risotto de Camarão</h3>
              <p className="recipe-description">Risotto cremoso com camarões frescos e ervas</p>
              <div className="recipe-meta">
                <span className="recipe-time"><MdAccessTime /> 30 min</span>
                <span className="recipe-difficulty"><MdRestaurant /> Fácil</span>
              </div>
            </div>
          </Link>

          <Link to="/receitas/3" className="recipe-card recipe-card-link">
            <img src="/receita3.jpg" alt="Bolo de Chocolate" className="recipe-image" />
            <div className="recipe-content">
              <h3 className="recipe-title">Bolo de Chocolate</h3>
              <p className="recipe-description">Bolo fofinho com cobertura de chocolate cremosa</p>
              <div className="recipe-meta">
                <span className="recipe-time"><MdAccessTime /> 60 min</span>
                <span className="recipe-difficulty"><MdRestaurant /> Fácil</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Categorias */}
      <section className="categories-section">
        <div className="section-header">
          <h2 className="section-title">Categorias</h2>
          <p className="section-subtitle">Explora por tipo de prato</p>
        </div>
        
        <div className="categories-grid">
          {/* Sincronizado com CategoriaDetalhe */}
          {(() => {
            const idSets = {
              carne: [1, 4, 7, 15, 16, 21, 19],
              peixe: [5, 6, 13],
              sobremesa: [3, 12, 20],
              'pequeno-almoco': [11, 20]
            };

            const config = [
              { key: 'carne', icon: <GiSteak />, title: 'Pratos de Carne' },
              { key: 'peixe', icon: <GiFishCooked />, title: 'Peixes e Mariscos' },
              { key: 'sobremesa', icon: <GiCakeSlice />, title: 'Sobremesas' },
              { key: 'pequeno-almoco', icon: <GiCoffeeCup />, title: 'Pequeno-almoço' }
            ];

            return config.map(cat => {
              const count = recipes.filter(r => (idSets[cat.key] || []).includes(r.id)).length;
              return (
                <Link to={`/categorias/${cat.key}`} className="category-card" key={cat.key}>
                  <span className="category-icon">{cat.icon}</span>
                  <h3 className="category-title">{cat.title}</h3>
                  <p className="category-count">{count} receitas</p>
                </Link>
              )
            })
          })()}
        </div>
      </section>
    </main>
  );
};

export default Home;
