import React from 'react'
import { Link } from 'react-router-dom'
import { MdErrorOutline, MdHome } from 'react-icons/md'

export default function NotFound(){
  return (
    <main className="notfound-page">
      <div className="notfound-container">
        <div className="notfound-icon">
          <MdErrorOutline />
        </div>
        <h1 className="notfound-title">404</h1>
        <h2 className="notfound-subtitle">Página não encontrada</h2>
        <p className="notfound-text">
          Desculpe, não conseguimos encontrar a página que procura.
          <br />
          Talvez ela tenha sido movida ou não existe mais.
        </p>
        <div className="notfound-actions">
          <Link to="/" className="btn-primary">
            <MdHome style={{marginRight:8}} />
            Voltar ao Início
          </Link>
        </div>
      </div>
    </main>
  )
}
