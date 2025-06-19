import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-column">
            <div className="footer-logo">
              <span className="logo-text">ALLEN GROUP</span>
              <span className="logo-subtext">Seguros</span>
            </div>
            <div className="footer-info">
              <p>Av. Cabildo 2230, Pisos 11 y 12</p>
              <p>CABA (C1428AAR)</p>
              <p>Tel: 0810-444-5550</p>
            </div>
            <div className="footer-social">
              <h4>Síguenos</h4>
              <div className="social-icons">
                <a href="#" className="social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325v21.351C0 23.407 0.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463 0.099 2.795 0.143v3.24l-1.918 0.001c-1.504 0-1.795 0.715-1.795 1.763v2.313h3.587l-0.467 3.622h-3.12V24h6.116c0.73 0 1.323-0.593 1.323-1.325V1.325C24 0.593 23.407 0 22.675 0z"/>
                  </svg>
                </a>
                <a href="#" className="social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584 0.012 4.85 0.07 3.252 0.148 4.771 1.691 4.919 4.919 0.058 1.265 0.069 1.645 0.069 4.849 0 3.205-0.012 3.584-0.069 4.849-0.149 3.225-1.664 4.771-4.919 4.919-1.266 0.058-1.644 0.07-4.85 0.07-3.204 0-3.584-0.012-4.849-0.07-3.26-0.149-4.771-1.699-4.919-4.92-0.058-1.265-0.07-1.644-0.07-4.849 0-3.204 0.013-3.583 0.07-4.849 0.149-3.227 1.664-4.771 4.919-4.919 1.266-0.058 1.645-0.07 4.849-0.070zM12 0C8.741 0 8.333 0.014 7.053 0.072 2.695 0.272 0.273 2.69 0.072 7.052 0.014 8.333 0 8.741 0 12c0 3.259 0.014 3.668 0.072 4.948 0.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-0.014 4.948-0.072 4.354-0.2 6.782-2.618 6.979-6.98C23.986 15.668 24 15.259 24 12c0-3.259-0.014-3.667-0.072-4.947-0.196-4.354-2.617-6.78-6.979-6.981C15.668 0.014 15.259 0 12 0zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zM12 16c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zM18.406 4.155c-0.796 0-1.441 0.645-1.441 1.44s0.645 1.44 1.441 1.44c0.795 0 1.439-0.645 1.439-1.44s-0.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M23.954 4.569c-0.885 0.389-1.83 0.654-2.825 0.775 1.014-0.611 1.794-1.574 2.163-2.723-0.951 0.555-2.005 0.959-3.127 1.184-0.896-0.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 0.39 0.045 0.765 0.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-0.427 0.722-0.666 1.561-0.666 2.475 0 1.71 0.87 3.213 2.188 4.096-0.807-0.026-1.566-0.248-2.228-0.616v0.061c0 2.385 1.693 4.374 3.946 4.827-0.413 0.111-0.849 0.171-1.296 0.171-0.314 0-0.615-0.03-0.916-0.086 0.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-0.39 0-0.779-0.023-1.17-0.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.503 14-14 0-0.221-0.004-0.434-0.012-0.645 0.961-0.689 1.8-1.56 2.46-2.548l-0.047-0.02z"/>
                  </svg>
                </a>
                <a href="#" className="social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zM5 8H0v16h5V8zM24 8h-5v16h5v-8.75c0-4.5-3.9-8.25-8.5-8.25-1.33 0-2.6 0.3-3.75 0.9V8H7C7 9.1 7.9 10 9 10h2v7.5h-3V24h5v-6.5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5V24H24v-7.5c0-4.1-3.4-7.5-7.5-7.5s-7.5 3.4-7.5 7.5V24H24V8z"/>
                  </svg>
                </a>
                <a href="#" className="social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-0.246-11.631-0.245-15.23 0-3.897 0.266-4.356 2.62-4.385 8.816 0.029 6.185 0.484 8.549 4.385 8.816 3.6 0.245 11.626 0.246 15.23 0 3.897-0.266 4.356-2.62 4.385-8.816-0.029-6.185-0.484-8.549-4.385-8.816zM8 17.378v-10.757l8 5.378-8 5.379z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-column">
            <h3>Productos</h3>
            <ul className="footer-links">
              <li><a href="#">Automotores</a></li>
              <li><a href="#">Hogar</a></li>
              <li><a href="#">Vida</a></li>
              <li><a href="#">Comercio</a></li>
              <li><a href="#">Empresas</a></li>
              <li><a href="#">Responsabilidad Civil</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Recursos</h3>
            <ul className="footer-links">
              <li><a href="#">Preguntas Frecuentes</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Calculadora de Seguros</a></li>
              <li><a href="#">Centro de Ayuda</a></li>
              <li><a href="#">Siniestros</a></li>
              <li><a href="#">Sucursales</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Contacto</h3>
            <ul className="footer-contact">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span>contacto@allengroup.com</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                <span>0810-444-5550</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span>Av. Cabildo 2230, Pisos 11 y 12, CABA</span>
              </li>
            </ul>
            
            <div className="footer-newsletter">
              <h3>Recibí novedades</h3>
              <form className="newsletter-form">
                <input type="email" placeholder="Tu email" required />
                <button type="submit">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-legal">
            <p>Allen Group Seguros · @allengroupAR · @allen.group</p>
            <div className="legal-links">
              <a href="#">Términos y Condiciones</a>
              <a href="#">Data Fiscal</a>
              <a href="#">Política de Privacidad</a>
            </div>
            <p>www.ssn.gob.ar / 0-800-666-8400 / Nº de inscripción SSN: 748</p>
          </div>
          
          <div className="footer-copyright">
            <p>ALLEN GROUP. Copyright © {new Date().getFullYear()} Todos los derechos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;