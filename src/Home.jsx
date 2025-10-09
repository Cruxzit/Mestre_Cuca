import React from 'react';

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
              <button className="btn-primary">Explorar Receitas</button>
              <button className="btn-secondary">Ver Categorias</button>
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
          <div className="recipe-card">
            <img src="/receita1.jpg" alt="Lasanha" className="recipe-image" />
            <div className="recipe-content">
              <h3 className="recipe-title">Lasanha Bolonhesa</h3>
              <p className="recipe-description">Uma deliciosa lasanha com molho bolonhesa caseiro</p>
              <div className="recipe-meta">
                <span className="recipe-time">⏱️ 45 min</span>
                <span className="recipe-difficulty">👨‍🍳 Médio</span>
              </div>
            </div>
          </div>

          <div className="recipe-card">
            <img src="/receita2.jpg" alt="Risotto" className="recipe-image" />
            <div className="recipe-content">
              <h3 className="recipe-title">Risotto de Camarão</h3>
              <p className="recipe-description">Risotto cremoso com camarões frescos e ervas</p>
              <div className="recipe-meta">
                <span className="recipe-time">⏱️ 30 min</span>
                <span className="recipe-difficulty">👨‍🍳 Fácil</span>
              </div>
            </div>
          </div>

          <div className="recipe-card">
            <img src="/receita3.jpg" alt="Bolo de Chocolate" className="recipe-image" />
            <div className="recipe-content">
              <h3 className="recipe-title">Bolo de Chocolate</h3>
              <p className="recipe-description">Bolo fofinho com cobertura de chocolate cremosa</p>
              <div className="recipe-meta">
                <span className="recipe-time">⏱️ 60 min</span>
                <span className="recipe-difficulty">👨‍🍳 Fácil</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className="categories-section">
        <div className="section-header">
          <h2 className="section-title">Categorias</h2>
          <p className="section-subtitle">Explora por tipo de prato</p>
        </div>
        
        <div className="categories-grid">
          <div className="category-card">
            <span className="category-icon">🍝</span>
            <h3 className="category-title">Massas</h3>
            <p className="category-count">24 receitas</p>
          </div>

          <div className="category-card">
            <span className="category-icon">🥩</span>
            <h3 className="category-title">Carnes</h3>
            <p className="category-count">18 receitas</p>
          </div>

          <div className="category-card">
            <span className="category-icon">🍰</span>
            <h3 className="category-title">Sobremesas</h3>
            <p className="category-count">32 receitas</p>
          </div>

          <div className="category-card">
            <span className="category-icon">🥗</span>
            <h3 className="category-title">Saladas</h3>
            <p className="category-count">15 receitas</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
