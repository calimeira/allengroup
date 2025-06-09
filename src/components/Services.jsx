import React, { useRef, useEffect, useState } from 'react';
import {
  Activity,
  FileText,
  Briefcase,
  Gavel,
  ShieldOff,
} from 'lucide-react';
import './Services.css';
import servicesImg from '../assets/services.png'; // reemplaza por tu imagen real
import decorativoSVG from '../assets/Layer_2.svg';


const servicesData = [
  { icon: Activity, title: 'SCOUTING PERMANENTE', desc: 'Analizamos en forma continua diferentes alternativas en cuanto a prestaciones, alcances de cobertura, mejoras de servicios y costos entre las aseguradoras de primer nivel con las que trabajamos, con el objetivo de brindarle la mejor solución.' },
  { icon: FileText, title: 'GESTIÓN DE SINIESTROS', desc: 'Contamos con un equipo conformado por analistas capacitados por tipo de riesgo, que asesoran y asisten a nuestros clientes en la tramitación del siniestro, intermediando ante la Aseguradora y garantizando la resolución exitosa, dentro de los plazos mínimos previstos por tipo de evento.' },
  { icon: Briefcase, title: 'SOPORTE ADMINISTRATIVO', desc: 'Realizamos atención personalizada a todos nuestros clientes a fin de satisfacer los requerimientos vinculados con la cobertura contratada (gestión de cobranzas, endosos, certificados de cobertura, reintegros ILT y análisis de diferencias, etc.).' },
  { icon: Gavel, title: 'ASESORAMIENTO LEGAL', desc: 'Brindamos asesoramiento legal integral en materia de siniestros, contingencia judicial y normativa de SRT y SSN, a cargo de nuestro staff propio de abogados.' },
  { icon: ShieldOff, title: 'ASESORAMIENTO TÉCNICO', desc: 'Ofrecemos asesoramiento integral en Seguridad e Higiene y Medicina Laboral con el objetivo de reducir la exposición a riesgos, los costos ocultos que el ausentismo laboral genera y ofrecer todas las prestaciones relacionadas a salud ocupacional.' }
];

export default function Services() {
  const sectionRef = useRef(null);
  const [showBounce, setShowBounce] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowBounce(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="services-section"
      style={{ position: 'relative' }}
      ref={sectionRef}
    >
      {/* SVG decorativo arriba a la derecha */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 150,
          zIndex: 2,
          padding: '1rem'
        }}
      >
        <img
          src={decorativoSVG}
          alt="Decorativo"
          className={showBounce ? 'svg-bounce' : ''}
          style={{ width: 248, height: 248 }}
        />
      </div>
      <div className="services-container">
        <div className="services-list">
          <h2 className="services-title">Nuestros Servicios</h2>
          <div className="services-underline"></div>
          {servicesData.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="service-item">
              <div className="service-item__header">
                <Icon size={20} className="service-item__icon" />
                <h3 className="service-item__title">{title}</h3>
              </div>
              <p className="service-item__desc">{desc}</p>
            </div>
          ))}
        </div>
        <div className="services-image">
          <img src={servicesImg} alt="Servicios AllenGroup" />
        </div>
      </div>
    </section>
  );
}
