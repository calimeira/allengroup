import React from 'react';
import './CategoryServices.css';

const PERSONAS = [
  { label: 'Automotor', href: '/cotizador/automotor', img: 'https://webinstitucional.blob.core.windows.net/master/2023/08/automotores-prod.svg' },
  { label: 'Moto', href: '/cotizador/moto', img: 'https://webinstitucional.blob.core.windows.net/master/2023/08/motos-prod.svg' },
  { label: 'Embarcaciones', href: '/cotizador/embarcaciones', img: 'https://webinstitucional.blob.core.windows.net/master/2023/08/embarcaciones-prod.svg' },
  { label: 'Hogar', href: '/cotizador/hogar', img: 'https://webinstitucional.blob.core.windows.net/master/2023/08/hogar-prod.svg' },
  { label: 'Incendio', href: '/cotizador/incendio', img: 'https://webinstitucional.blob.core.windows.net/master/2023/08/incencio-prod.svg' },
  { label: 'Alquiler Garantizado', href: '/cotizador/alquiler-garantizado', img: 'https://webinstitucional.blob.core.windows.net/master/2023/08/alquiler-prod.svg' },
  { label: 'Accidentes Personales', href: '/cotizador/accidentes-personales', img: 'https://webinstitucional.blob.core.windows.net/master/2023/08/accidentes-prod.svg' },
  { label: 'Vida', href: '/cotizador/vida', img: 'https://webinstitucional.blob.core.windows.net/master/2023/08/vida-prod.svg' },
  { label: 'Sepelio', href: '/cotizador/sepelio', img: 'https://webinstitucional.blob.core.windows.net/master/2023/08/Group-prod.svg' },
  { label: 'Robo', href: '/cotizador/robo', img: 'https://webinstitucional.blob.core.windows.net/master/2023/08/imagenrobo.png' },
  { label: 'Mala Praxis', href: '/cotizador/mala-praxis', img: 'https://webinstitucional.blob.core.windows.net/master/2023/08/mala_praxis-prod.svg' },
];
const EMPRESAS = [
  { label: 'Flota Automotor', href: '/cotizador/flota-automotor', img: 'https://webinstitucional.blob.core.windows.net/master/2023/08/Button__Flota_Automotor-64ef3395d999b-200x117.png' },
  { label: 'Vida Colectivo', href: '/cotizador/vida-colectivo', img: 'https://webinstitucional.blob.core.windows.net/master/2023/08/vida_colectivo-prod.svg' },
  { label: 'Accidentes Personales', href: '/cotizador/accidentes-personales-colectivo', img: 'https://webinstitucional.blob.core.windows.net/master/2023/08/accidentes_personales-prod.svg' },
  { label: 'Riesgos Agropecuarios', href: '/cotizador/riesgos-agropecuarios', img: 'https://webinstitucional.blob.core.windows.net/master/2023/08/agroseguro.png' },
  { label: 'Comercio', href: '/cotizador/comercio', img: 'https://webinstitucional.blob.core.windows.net/master/2023/08/integral_comercio-prod.svg' },
  { label: 'Todo Riesgo Operativo', href: '/cotizador/todo-riesgo-operativo', img: 'https://webinstitucional.blob.core.windows.net/master/2023/08/todo_riesgo_operativo-prod.svg' },
  { label: 'Seguro Técnico', href: '/cotizador/seguro-tecnico', img: 'https://webinstitucional.blob.core.windows.net/master/2023/08/segurotecnico.png' },
  { label: 'Transporte', href: '/cotizador/transporte', img: 'https://webinstitucional.blob.core.windows.net/master/2023/08/transporte-prod.svg' },
  { label: 'Responsabilidad Civil', href: '/cotizador/responsabilidad-civil', img: 'https://webinstitucional.blob.core.windows.net/master/2023/08/accidentespersonales.png' },
  { label: 'Consorcio', href: '/cotizador/consorcio', img: 'https://webinstitucional.blob.core.windows.net/master/2023/08/integral_consorcio-prod.svg' },
  { label: 'Caución', href: '/cotizador/caucion', img: 'https://webinstitucional.blob.core.windows.net/master/2023/08/caucion-prod.svg' },
  { label: 'Incendio', href: '/cotizador/incendio-empresas', img: 'https://webinstitucional.blob.core.windows.net/master/2023/08/Button__Incendio_empresas-64ef33c0a72a6-200x117.png' },
  { label: 'Sepelio Colectivo', href: '/cotizador/sepelio-colectivo', img: 'https://webinstitucional.blob.core.windows.net/master/2023/08/sepelio_colectivo-prod.svg' },
];

function ServiceSection({ title, subtitle, items, moreLink, showUnderline }) {
  return (
    <section className="bloque list-articles bg-white px-3">
      <div className="container">
        <header>
          <h2 className="section-title">{title}</h2>
          {showUnderline && <div className="services-underline"></div>}
          <h3 className="section-subtitle light-blue">{subtitle}</h3>
        </header>
        <div className="row services-row mb-4">
          {items.map((item, idx) => (
            <div key={idx} className="column col-lg-4 col-md-6 col-sm-12">
              <a href={item.href} className="service-card-link">
                <div className="service-card">
                  <div className="service-text">
                    <h4>{item.label}</h4>
                  </div>
                  <div className="service-image">
                    <img src={item.img} alt={item.label} />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function CategoryServices() {
  return (
    <>
      <ServiceSection
        title="Conocé más de nuestros productos"
        subtitle="Seguros para personas y profesionales"
        items={PERSONAS}
        moreLink="/seguros-para-personas-y-profesionales"
        showUnderline={true}
      />
      <hr className="section-divider" />
      <ServiceSection
        subtitle="Seguros para empresas"
        items={EMPRESAS}
        moreLink="/seguros-para-empresas"
        showUnderline={false}
      />
    </>
  );
}