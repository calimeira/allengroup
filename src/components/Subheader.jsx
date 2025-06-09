import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

export default function Subheader() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`subheader ${scrolled ? 'hidden' : ''}`}>
      <div className="subheader__options">
        <button className="subheader__button" onClick={() => navigate('/cotizador')}>
          Seguros para Empresas
        </button>
        <button className="subheader__button" onClick={() => navigate('/cotizador')}>
          Seguros para Individuos
        </button>
      </div>
    </div>
  );
}
