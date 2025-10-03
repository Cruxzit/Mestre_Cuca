import React from 'react';

const Header = () => {
  return (
    <header className="mestre-header">
      <div className="header-container">
        <div className="logo-section">
          <img src="/logo-mestre-cuca.png" alt="Mestre Cuca Logo" className="logo-img" />
          <h1 className="brand-title">Mestre Cuca</h1>
        </div>
        
        <nav className="main-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home" className="nav-link">Início</a>
            </li>
            <li className="nav-item">
              <a href="#receitas" className="nav-link">Receitas</a>
            </li>
            <li className="nav-item">
              <a href="#categorias" className="nav-link">Categorias</a>
            </li>
            <li className="nav-item">
              <a href="#sobre" className="nav-link">Sobre</a>
            </li>
            <li className="nav-item">
              <a href="#contato" className="nav-link">Contato</a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="search-btn">🔍</button>
          <button className="menu-btn">☰</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
