import React from 'react';
import './CTASection.css';
import backgroundImage from '../assets/fondo-dark.png'; // Asegúrate de tener esta imagen en la carpeta assets

const CtaSection = () => {
  return (
    <section className="cta-section">
      {/* Fondo con imagen y overlay */}
      <div className="cta-background">
        <img src={backgroundImage} alt="Fondo" className="cta-background-image" />

      </div>
      
      {/* Contenido flotante */}
      <div className="container">
        <div className="cta-content-container">
          <div className="cta-content">
            <h3 className="cta-title">¿Cuál es la cobertura más adecuada para mí?</h3>
            <p className="cta-text">
              Un productor asesor puede brindarte toda la información necesaria para que puedas contratar con seguridad este producto o el que mejor se adapte a tus necesidades.
            </p>
            <div className="cta-button-container">
              <a href="/contacta-a-un-productor/" className="cta-button" title="Consultanos">
                Consultanos
                <span className="button-icon">→</span>
              </a>
            </div>
          </div>
          
          </div>
        </div>

    </section>
  );
};

export default CtaSection;