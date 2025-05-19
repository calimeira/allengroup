import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        ALLEN GROUP. Copyright © 2020<br />
        Av. Cabildo 2230, Pisos 11 y 12, CABA (C1428AAR). Tel: 0810-444-5550
      </div>
      <div className="footer__social">
        Allen Group Seguros · @allengroupAR · @allen.group
      </div>
      <div className="footer__legal">
        Términos y Condiciones · Data Fiscal ·
        <br /> www.ssn.gob.ar / 0-800-666-8400 / Nº de inscripción SSN: 748
      </div>
    </footer>
  );
}