// Hero.js
import React from 'react';
import './Hero.css';
import bgImage from '../assets/hero.png';
import Respaldo from './Respaldo'; // Import Respaldo component if needed

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero__content">
          <div className="hero__banner">
            <p className="hero__text">
              Brindamos soluciones de
              <span className="hero__highlight-light"> seguros ágiles y personalizadas</span>, 
              conectando a las personas con una protección
              <span className="hero__highlight-blue"> real y confiable.</span>
            </p>
          </div>
          <div className="hero__image-wrapper">
            <img src={bgImage} alt="Hero" className="hero__image" />
          </div>
        </div>
      </section>

      <Respaldo /> 
    </>
  );
}
