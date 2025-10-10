import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NewsletterModal from './NewsletterModal'

const NEWSLETTER_KEY = 'mestre-cuca-newsletter'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [processing, setProcessing] = useState(false)
  const timerRef = useRef(null)

  function handleSubmit(e) {
    e.preventDefault()
    if (!email) return
    setProcessing(true)
      try {
      const existing = JSON.parse(localStorage.getItem(NEWSLETTER_KEY) || '[]')
      if (!existing.includes(email)) {
        existing.push(email)
        localStorage.setItem(NEWSLETTER_KEY, JSON.stringify(existing))
      }
      // abrir modal com delay de 1s
      if (timerRef.current) clearTimeout(timerRef.current)
      timerRef.current = setTimeout(() => {
        setModalOpen(true)
        setProcessing(false)
      }, 1000)
    } catch (err) {
      console.error('Erro ao subscrever newsletter:', err)
        // mesmo em erro, mostrar modal após delay para UX consistente
        if (timerRef.current) clearTimeout(timerRef.current)
        timerRef.current = setTimeout(() => {
          setModalOpen(true)
          setProcessing(false)
        }, 1000)
    }
  }

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
        timerRef.current = null
      }
    }
  }, [])

  return (
    <>
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
                <li><Link to="/">Início</Link></li>
                <li><Link to="/receitas">Receitas</Link></li>
                <li><Link to="/contact">Contacto</Link></li>
              </ul>
            </div>

            <div className="footer-categories">
              <h4>Categorias</h4>
              <ul>
                <li><Link to="/categorias/carne">Pratos de Carne</Link></li>
                <li><Link to="/categorias/peixe">Pratos de Peixe e Mariscos</Link></li>
                <li><Link to="/categorias/sobremesa">Sobremesas</Link></li>
                <li><Link to="/categorias/pequeno-almoco">Pequeno-almoço</Link></li>
              </ul>
            </div>

            <div className="footer-newsletter">
              <h4>Newsletter</h4>
              <p>Recebe receitas semanais</p>
              <form className="newsletter-form" onSubmit={handleSubmit}>
                <input type="email" placeholder="O seu email" value={email} onChange={(e) => setEmail(e.target.value)} />
                      <button type="submit" disabled={processing}>{processing ? 'A processar...' : 'Subscrever'}</button>
              </form>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 Mestre Cuca. Todos os direitos reservados.</p>
            <div className="footer-legal">
              <Link to="/privacy">Privacidade</Link>
              <Link to="/terms">Termos</Link>
            </div>
          </div>
        </div>
      </footer>
      <NewsletterModal open={modalOpen} onClose={() => setModalOpen(false)} email={email} />
    </>
  )
}
