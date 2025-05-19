import React from 'react';
import './Hero.css';
import bgImage from '../assets/hero.png';

export default function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
   {/*   <h1 className="hero__title">Bienvenido a AllenGroup Insurance</h1>
      <p className="hero__subtitle">
        Protege tu futuro hoy con nuestros seguros personalizados.
      </p>
      <button className="hero__cta">Cotiza ahora</button>*/}
    </section>
  );
}