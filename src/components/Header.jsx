import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../hooks/useFavorites';

const Header = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const { favoritesCount } = useFavorites();

  useEffect(() => {
    function handleOutside(e) {
      if (open && menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, [open]);

  // Fecha o menu com Escape
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape' && open) setOpen(false);
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  // Alterna uma classe no root para permitir que o conteúdo principal seja reduzido quando o menu abre
  useEffect(() => {
    const root = document.documentElement;
    if (open) root.classList.add('menu-open');
    else root.classList.remove('menu-open');
    return () => root.classList.remove('menu-open');
  }, [open]);

  function handleLinkClick() {
    setOpen(false);
  }

  return (
    <header className="mestre-header">
      <div className="header-container">
        <div className="logo-section">
          <img src="/logo-mestre-cuca.png" alt="Mestre Cuca Logo" className="logo-img" />
          <h1 className="brand-title">Mestre Cuca</h1>
        </div>

        {/* overlay que fecha o menu quando clicado */}
        {open && <div className="menu-overlay" onClick={() => setOpen(false)} aria-hidden="true" />}

        <nav className={`main-nav ${open ? 'open' : ''}`} ref={menuRef} aria-expanded={open}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={handleLinkClick}>Início</Link>
            </li>
            <li className="nav-item">
              <Link to="/receitas" className="nav-link" onClick={handleLinkClick}>Receitas</Link>
            </li>
            <li className="nav-item">
              <Link to="/categorias" className="nav-link" onClick={handleLinkClick}>Categorias</Link>
            </li>
            <li className="nav-item">
              <Link to="/favoritos" className="nav-link" onClick={handleLinkClick}>
                Favoritos
                <span className="fav-badge" aria-hidden>{favoritesCount}</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" onClick={handleLinkClick}>Contacto</Link>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <button
            className={`menu-btn ${open ? 'is-open' : ''}`}
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen(o => !o)}
          >
            <span className="hamburger">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;