import React from 'react';
import './Respaldo.css';
import logo1 from '../assets/image.png';


export default function Respaldo() {
  return (
    <section className="respaldo">
      <h2 className="respaldo__title">Respaldo</h2>
      <p className="respaldo__desc">
        Consolidamos alianzas estratégicas con las compañías aseguradoras nacionales e internacionales líderes,
        que nos permiten ofrecer las condiciones de mercado más competitivas.
      </p>
      <div className="respaldo__slider">
        <img src={logo1} alt="Aseguradora 1" />
        <img src={logo1} alt="Aseguradora 2" />
        <img src={logo1} alt="Aseguradora 3" />
        <img src={logo1} alt="Aseguradora 4" />
        <img src={logo1} alt="Aseguradora 5" />
                <img src={logo1} alt="Aseguradora 1" />
        <img src={logo1} alt="Aseguradora 2" />
        <img src={logo1} alt="Aseguradora 3" />
        <img src={logo1} alt="Aseguradora 4" />
        <img src={logo1} alt="Aseguradora 5" />
                <img src={logo1} alt="Aseguradora 1" />
        <img src={logo1} alt="Aseguradora 2" />
        <img src={logo1} alt="Aseguradora 3" />
        <img src={logo1} alt="Aseguradora 4" />
        <img src={logo1} alt="Aseguradora 5" />
      </div>
    </section>
  );
}