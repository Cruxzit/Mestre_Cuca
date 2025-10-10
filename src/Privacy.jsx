import React from 'react';
import { Link } from 'react-router-dom';
import { MdLock, MdDescription, MdSettings, MdStorage, MdSecurity, MdVerifiedUser, MdCookie, MdLinkOff, MdEmail } from 'react-icons/md';

const Privacy = () => {
  return (
    <main className="legal-page">
      <div className="legal-hero">
        <h1 className="legal-hero-title">Política de Privacidade</h1>
        <p className="legal-hero-subtitle">
          A sua privacidade é importante para nós. Saiba como protegemos os seus dados.
        </p>
        <div className="legal-updated">Última atualização: 10 de outubro de 2025</div>
      </div>

      <div className="legal-container">
        <div className="legal-grid">
          <div className="legal-card">
            <div className="legal-card-icon"><MdLock /></div>
            <h2 className="legal-card-title">1. Introdução</h2>
            <p>
              O Mestre Cuca está comprometido em proteger a sua privacidade. 
              Esta política explica como recolhemos, usamos e protegemos as suas informações.
            </p>
          </div>

          <div className="legal-card">
            <div className="legal-card-icon"><MdDescription /></div>
            <h2 className="legal-card-title">2. Informações Recolhidas</h2>
            <div className="legal-card-section">
              <h3>Informações Voluntárias</h3>
              <ul>
                <li>Email da newsletter</li>
                <li>Dados do formulário de contacto</li>
                <li>Receitas favoritas (local)</li>
              </ul>
            </div>
            <div className="legal-card-section">
              <h3>Informações Automáticas</h3>
              <ul>
                <li>Tipo de navegador</li>
                <li>Endereço IP</li>
                <li>Cookies essenciais</li>
              </ul>
            </div>
          </div>

          <div className="legal-card">
            <div className="legal-card-icon"><MdSettings /></div>
            <h2 className="legal-card-title">3. Uso das Informações</h2>
            <ul>
              <li>Envio de newsletters e receitas</li>
              <li>Resposta a questões e suporte</li>
              <li>Melhoria do website</li>
              <li>Personalização da experiência</li>
              <li>Cumprimento de obrigações legais</li>
            </ul>
          </div>

          <div className="legal-card highlight">
            <div className="legal-card-icon"><MdStorage /></div>
            <h2 className="legal-card-title">4. Armazenamento Local</h2>
            <p>
              Utilizamos o armazenamento local do navegador (Local Storage) para guardar:
            </p>
            <ul>
              <li>Receitas favoritas selecionadas</li>
              <li>Rascunhos de formulários</li>
              <li>Preferências de subscrição</li>
            </ul>
            <p className="legal-note">
              Estes dados ficam apenas no seu dispositivo e não são enviados para os nossos servidores.
            </p>
          </div>

          <div className="legal-card">
            <div className="legal-card-icon"><MdSecurity /></div>
            <h2 className="legal-card-title">5. Segurança</h2>
            <p>
              Implementamos medidas de segurança adequadas para proteger as suas informações contra 
              acesso não autorizado, alteração ou destruição.
            </p>
          </div>

          <div className="legal-card">
            <div className="legal-card-icon"><MdVerifiedUser /></div>
            <h2 className="legal-card-title">6. Os Seus Direitos (RGPD)</h2>
            <div className="legal-rights-grid">
              <div className="legal-right">
                <strong>Acesso</strong>
                <span>aos seus dados</span>
              </div>
              <div className="legal-right">
                <strong>Correção</strong>
                <span>de dados imprecisos</span>
              </div>
              <div className="legal-right">
                <strong>Eliminação</strong>
                <span>dos seus dados</span>
              </div>
              <div className="legal-right">
                <strong>Portabilidade</strong>
                <span>dos dados</span>
              </div>
              <div className="legal-right">
                <strong>Oposição</strong>
                <span>ao processamento</span>
              </div>
              <div className="legal-right">
                <strong>Retirar</strong>
                <span>consentimento</span>
              </div>
            </div>
          </div>

          <div className="legal-card">
            <div className="legal-card-icon"><MdCookie /></div>
            <h2 className="legal-card-title">7. Cookies</h2>
            <p>
              Utilizamos apenas cookies essenciais para o funcionamento do site. 
              Não usamos cookies de rastreamento ou publicidade de terceiros.
            </p>
          </div>

          <div className="legal-card">
            <div className="legal-card-icon"><MdLinkOff /></div>
            <h2 className="legal-card-title">8. Links para Terceiros</h2>
            <p>
              O nosso site pode conter links externos. Não somos responsáveis pelas práticas 
              de privacidade desses sites.
            </p>
          </div>

          <div className="legal-card contact-card">
            <div className="legal-card-icon"><MdEmail /></div>
            <h2 className="legal-card-title">Contacto</h2>
            <p>Questões sobre privacidade? Entre em contacto:</p>
            <div className="contact-info">
              <div className="contact-item">
                <strong>Email:</strong> mestrecuca@gmail.com
              </div>
              <div className="contact-item">
                <strong>Telefone:</strong> +351 123 456 789
              </div>
              <div className="contact-item">
                <Link to="/contact" className="legal-link">Formulário de Contacto →</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="legal-footer">
          <Link to="/" className="btn-secondary">← Voltar ao Início</Link>
          <Link to="/terms" className="btn-outline">Ver Termos e Condições</Link>
        </div>
      </div>
    </main>
  )
}

export default Privacy;
