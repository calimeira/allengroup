import React, { useState } from 'react';
import { Paperclip, Send, X } from 'lucide-react';
import './WhatsappChat.css';
import whatsappIcon from '../assets/WhatsApp.png'; // logo oficial con teléfono
import logo from '../assets/logo-ag.png'; // tu logo de empresa

export default function WhatsappChat() {
  const [open, setOpen] = useState(false);
  const whatsappLink = 'https://wa.me/549XXXXXXXXXX'; // reemplazar

  return (
    <div className="whatsapp-widget">
      {open && (
        <div className="whatsapp-chat">
          <div className="chat-header">
            <div className="chat-header__info">
              <img src={logo} alt="Logo" className="chat-logo" />
              <span className="chat-title">AllenGroup</span>
            </div>
            <button className="close-btn" onClick={() => setOpen(false)}>
              <X size={18} color="#fff" />
            </button>
          </div>
          <div className="chat-body">
            <div className="chat-message">
              <p>¡Hola! ¿Te puedo ayudar con algo?</p>
            </div>
          </div>
          <form
            className="chat-input"
            onSubmit={(e) => {
              e.preventDefault();
              window.open(whatsappLink, '_blank');
            }}
          >
            <Paperclip size={20} color="#555" className="attach-icon" />
            <input
              type="text"
              placeholder="Escribe un mensaje"
              className="input-field"
              onClick={() => window.open(whatsappLink, '_blank')}
              readOnly
            />
            <button type="submit" className="send-btn">
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
      <button className="whatsapp-button" onClick={() => setOpen(!open)}>
        <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-logo" />
        <span className="notification-dot">1</span>
      </button>
    </div>
  );
}
