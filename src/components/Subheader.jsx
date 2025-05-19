import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

export default function Subheader() {
  const navigate = useNavigate();

  return (
    <div className="subheader">
      <div className="subheader__options">
        <button
          className="subheader__button"
          onClick={() => navigate('/empresas')}>
          Seguros para Empresas
        </button>
        <button
          className="subheader__button"
          onClick={() => navigate('/individuos')}>
          Seguros para Individuos
        </button>
      </div>
    </div>
  );
}