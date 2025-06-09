import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import CategoryServices from '../components/CategoryServices';
import Respaldo from '../components/Respaldo';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import CollageBanner from '../components/CollageBanner';
import Separator from '../components/Separator';
import WhatsappChat from '../components/WhatsappChat';
import DecorativeSection from '../components/decorativo';

export default function Home() {
  return (
    <div>
      <Hero />
      <Separator />
              <Respaldo />
      <Separator />
              <Services />
      <DecorativeSection/>
                      <CategoryServices category="empresas" />
        <CategoryServices category="individuos" />
        <CollageBanner />
                    <Banner />
        <WhatsappChat />
  


        <Footer />
      {/* Aquí puedes añadir más secciones: Features, Testimonials, Footer, etc. */}
    </div>
  );
}