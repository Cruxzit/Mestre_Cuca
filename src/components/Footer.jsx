import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mestre-footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src="/logo-mestre-cuca.png" alt="Mestre Cuca" className="footer-logo" />
          <p className="footer-desc">Receitas simples e deliciosas para todas as ocasiões.</p>
        </div>

        <div className="footer-links">
          <h4>Links</h4>
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/receitas">Receitas</Link></li>
            <li><a href="#categorias">Categorias</a></li>
            <li><a href="#sobre">Sobre</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contacto</h4>
          <p>email: contacto@mestrecuca.pt</p>
          <p>Tel: +351 912 345 678</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Mestre Cuca. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
