import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import CategoryServices from '../components/CategoryServices';
import Respaldo from '../components/Respaldo';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Hero />
        <Services />
        <CategoryServices category="empresas" />
        <CategoryServices category="individuos" />
        <Respaldo />
        <Footer />
      {/* Aquí puedes añadir más secciones: Features, Testimonials, Footer, etc. */}
    </div>
  );
}