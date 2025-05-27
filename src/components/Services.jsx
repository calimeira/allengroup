import React from 'react';
import { Activity, FileText, Briefcase, Gavel, ShieldOff } from 'lucide-react';
import './Services.css';

const servicesData = [
  { icon: Activity, title: 'SCOUTING PERMANENTE', desc: 'Analizamos en forma continua diferentes alternativas en cuanto a prestaciones, alcances de cobertura, mejoras de servicios y costos entre las aseguradoras de primer nivel con las que trabajamos, con el objetivo de brindarle la mejor solución.' },
  { icon: FileText, title: 'GESTIÓN DE SINIESTROS', desc: 'Contamos con un equipo conformado por analistas capacitados por tipo de riesgo, que asesoran y asisten a nuestros clientes en la tramitación del siniestro, intermediando ante la Aseguradora y garantizando la resolución exitosa, dentro de los plazos mínimos previstos por tipo de evento.' },
  { icon: Briefcase, title: 'SOPORTE ADMINISTRATIVO', desc: 'Realizamos atención personalizada a todos nuestros clientes a fin de satisfacer los requerimientos vinculados con la cobertura contratada (gestión de cobranzas, endosos, certificados de cobertura, reintegros ILT y análisis de diferencias, etc.).' },
  { icon: Gavel, title: 'ASESORAMIENTO LEGAL', desc: 'Brindamos asesoramiento legal integral en materia de siniestros, contingencia judicial y normativa de SRT y SSN, a cargo de nuestro staff propio de abogados.' },
  { icon: ShieldOff, title: 'ASESORAMIENTO TÉCNICO', desc: 'Ofrecemos asesoramiento integral en Seguridad e Higiene y Medicina Laboral con el objetivo de reducir la exposición a riesgos, los costos ocultos que el ausentismo laboral genera y ofrecer todas las prestaciones relacionadas a salud ocupacional.' }
];

export default function Services() {
  return (
    <section className="services-section">
      <div className="services-header">
        <h2 className="services-title">Nuestros Servicios</h2>
        <div className="services-underline"></div>
      </div>
      <div className="services">
        {servicesData.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="service-card">
            <Icon size={36} className="service-card__icon" />
            <h3 className="service-card__title">{title}</h3>
            <p className="service-card__desc">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}