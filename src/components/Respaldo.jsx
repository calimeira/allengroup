import React from 'react';
import './Respaldo.css';
import brand1 from '../assets/allianz.png';
import brand2 from '../assets/asociart.png';
import brand3 from '../assets/berkley.png';
import brand4 from '../assets/chubb.png';
import brand5 from '../assets/galeno-art.png';
import brand6 from '../assets/colon.png';
import brand7 from '../assets/experta-art.png';
import brand8 from '../assets/federacionpatronal.png';
import brand9 from '../assets/galeno-seguros.png';
import brand10 from '../assets/experta-seguros.png';

const brands = [
  { src: brand1, alt: 'Allianz' },
  { src: brand2, alt: 'Asociart' },
  { src: brand3, alt: 'Berkley' },
  { src: brand4, alt: 'Chubb' },
  { src: brand5, alt: 'Galeno ART' },
  { src: brand6, alt: 'Colón' },
  { src: brand7, alt: 'Experta ART' },
  { src: brand8, alt: 'Federación Patronal' },
  { src: brand9, alt: 'Galeno Seguros' },
  { src: brand10, alt: 'Experta Seguros' },
];

export default function Respaldo() {
  return (
    <section className="respaldo">
      <div className="respaldo__box">
        <div className="respaldo__slider">
          <div className="respaldo__slider-track">
            {brands.concat(brands).map((brand, index) => (
              <img key={index} src={brand.src} alt={brand.alt} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
