import React, { useState } from 'react';
import {
  Truck, Building, Shield, Layers, DollarSign, Home, Car, User
} from 'lucide-react';
import './Quote.css';
import FormAgro from './Forms/Agro';
import FormAuto from './Forms/Auto';
import FormHogar from './Forms/Hogar';

const services = [
  { icon: Building, label: 'Agro', type: 'empresas', form: <FormAgro /> },
  { icon: Car, label: 'Flota', type: 'empresas', form: <FormAgro /> },
  { icon: Layers, label: 'Consorcio', type: 'empresas', form: <FormAgro /> },
  { icon: Shield, label: 'Caución', type: 'empresas', form: <FormAgro /> },
  { icon: DollarSign, label: 'RC', type: 'empresas', form: <FormAgro /> },
  { icon: Home, label: 'Hogar', type: 'individuos', form: <FormHogar /> },
  { icon: Car, label: 'Auto', type: 'individuos', form: <FormAuto /> },
  { icon: User, label: 'AP', type: 'individuos', form: <FormAuto /> },
];

export default function QuotePage() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="quote-page">
      <h2 className="quote-title">Cotizá tu seguro</h2>
      <div className="quote-icons">
        {services.map(({ icon: Icon, label, type }, index) => (
          <div
            key={index}
            className={`quote-icon ${type === 'empresas' ? 'dark' : 'primary'} ${selected === index ? 'selected' : ''}`}
            onClick={() => setSelected(index)}
          >
            <div className="quote-icon-circle">
              <Icon size={20} />
            </div>
            <span>{label}</span>
          </div>
        ))}
      </div>
      <div className="quote-form-container">
        <div className="quote-form">
          {selected !== null && services[selected].form}
        </div>
      </div>
    </div>
  );
}
