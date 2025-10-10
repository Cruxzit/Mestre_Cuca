import React from 'react';

export default function NewsletterModal({ open, onClose, email }) {
  if (!open) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <h3 className="modal-title">Subscrição Confirmada</h3>
        
        <p className="modal-message">
          O email <strong>{email}</strong> foi adicionado à nossa newsletter.
        </p>
        <p className="modal-submessage">
          Receberá receitas e novidades semanalmente.
        </p>

        <div className="modal-actions">
          <button className="btn-modal-close" onClick={onClose}>
            Fechar
          </button>
        </div>
      </div>
    </div>
  )
}
