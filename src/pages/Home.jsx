import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import CategoryServices from '../components/CategoryServices';

export default function Home() {
  return (
    <div>
      <Hero />
        <Services />
        <CategoryServices category="empresas" />
        <CategoryServices category="individuos" />
      {/* Aquí puedes añadir más secciones: Features, Testimonials, Footer, etc. */}
    </div>
  );
}