import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className="header__logo">
          <img src={logo} alt="AllenGroup" />
        </div>
        <nav className="header__nav">
          <NavLink to="/" className="header__link">Inicio</NavLink>
          <NavLink to="/nosotros" className="header__link">Nosotros</NavLink>
          <NavLink to="/servicios" className="header__link">Servicios</NavLink>
          <NavLink to="/respaldo" className="header__link">Respaldo</NavLink>
        </nav>
      </header>    
    </>
  );
}
