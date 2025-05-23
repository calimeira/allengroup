import React from 'react';
import './Hero.css';
import bgImage from '../assets/hero.png';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__banner">
        Brindamos soluciones de
        <span className="hero__highlight-light"> seguros ágiles y personalizadas </span>,
        conectando a las personas con una protección
        <span className="hero__highlight-blue"> real y confiable.</span>
      </div>
      <img src={bgImage} alt="Hero" className="hero__image" />
    </section>
  );
}