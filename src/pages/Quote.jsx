import React from 'react';
import Quote from '../components/Quote';
import Footer from '../components/Footer';
import Banner from '../components/Banner';

export default function QuotePage() {
  return (
    <div>
      <Quote />
        <Banner />
      <Footer />
      {/* Aquí puedes añadir más secciones: Features, Testimonials, Footer, etc. */}
    </div>
  );
}