import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="AllenGroup" />
      </div>
      <nav className="header__nav">
        <NavLink to="/" className="header__link">
          Inicio
        </NavLink>
        <NavLink to="/nosotros" className="header__link">
          Nosotros
        </NavLink>
        <NavLink to="/servicios" className="header__link">
          Servicios
        </NavLink>
        <NavLink to="/respaldo" className="header__link">
          Respaldo
        </NavLink>
      </nav>
    </header>
  );
}