import React from 'react';
import {
  Truck, Building, Shield, Layers, DollarSign, Home, Car, User
} from 'lucide-react';
import './CategoryServices.css';

const empresas = [
  { icon: Building, label: 'Agro' },
  { icon: Car, label: 'Flota' },
  { icon: Building, label: 'Comercio' },
  { icon: Layers, label: 'Consorcio' },
  { icon: Shield, label: 'Caución' },
  { icon: Building, label: 'ART' },
  { icon: Truck, label: 'Transporte' },
  { icon: DollarSign, label: 'Responsabilidad Civil' },
];

const individuos = [
  { icon: Car, label: 'Auto' },
  { icon: Home, label: 'Hogar' },
  { icon: Building, label: 'Moto' },
  { icon: User, label: 'Accidentes Personales' },
];

export default function CategoryServices({ category }) {
  const data = category === 'empresas' ? empresas : individuos;
  const headerText =
    category === 'empresas'
      ? 'TE PODEMOS AYUDAR A PROTEGER TU PATRIMONIO'
      : 'TE PODEMOS AYUDAR A PROTEGER TU BIENESTAR';

  const handleClick = (label) => {
    window.location.href = `/cotizador`;
   {/* window.location.href = `/cotizador/${label.toLowerCase().replace(/\s+/g, '-')}`;*/ }
  };

  return (
    <section className="category">
      <div className="category__header">
        <h2 className="category__title">
          Seguros para {category.charAt(0).toUpperCase() + category.slice(1)}
        </h2>
        <p className="category__subtitle">{headerText}</p>
      </div>
      <div className="category__grid">
        {data.map(({ icon: Icon, label }) => (
          <div key={label} className="category-card" onClick={() => handleClick(label)}>
            <div className="category-card__icon-wrapper">
              <Icon className="category-card__icon" />
            </div>
            <span className="category-card__label">{label.toUpperCase()}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
