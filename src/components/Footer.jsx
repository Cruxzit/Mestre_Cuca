import React from 'react'

export default function Footer() {
  return (
    <footer className="simple-footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo-section">
              <img src="/logo-mestre-cuca.png" alt="Mestre Cuca Logo" className="footer-logo-img" />
              <h3>Mestre Cuca</h3>
            </div>
            <p>Receitas tradicionais portuguesas</p>
          </div>

          <div className="footer-links">
            <h4>Navegação</h4>
            <ul>
              <li><a href="/">Início</a></li>
              <li><a href="/receitas">Receitas</a></li>
              <li><a href="#">Sobre</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </div>

          <div className="footer-categories">
            <h4>Categorias</h4>
            <ul>
              <li><a href="#">Entradas</a></li>
              <li><a href="#">Pratos Principais</a></li>
              <li><a href="#">Sobremesas</a></li>
              <li><a href="#">Bebidas</a></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4>Newsletter</h4>
            <p>Recebe receitas semanais</p>
            <form className="newsletter-form">
              <input type="email" placeholder="O seu email" />
              <button type="submit">Subscrever</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Mestre Cuca. Todos os direitos reservados.</p>
          <div className="footer-legal">
            <a href="#">Privacidade</a>
            <a href="#">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
