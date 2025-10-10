import React from 'react';

const ContactModal = ({ isOpen, onClose, contactName }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">Mensagem Enviada!</h2>
        <p className="modal-message">
          Obrigado pelo seu contacto, <strong>{contactName}</strong>!
        </p>
        <p className="modal-submessage">
          Recebemos a sua mensagem e entraremos em contacto em breve.
        </p>
        <div className="modal-actions">
          <button className="btn-modal-close" onClick={onClose}>
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
