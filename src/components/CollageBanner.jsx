import React from 'react';
import './CollageBanner.css';
import logo from '../assets/logo-dark.png';
import collage from '../assets/people2.png';

export default function CollageBlock() {
  return (
<section className="collage-block">
  <div className="collage-block__image-container">
    <img src={collage} alt="Collage AllenGroup" className="collage-block__image" />
  </div>
  <div className="collage-block__content">
    <img src={logo} alt="AllenGroup logo" className="collage-block__logo" />
    <p className="collage-block__slogan">
      <span className="highlight">Lo mejor de la vida</span> es vivirla sin preocupaciones
    </p>
    <p className="collage-block__subtext">
      Joven, dinámica y confiable: así somos.<br />
      Así te protegemos. <strong>#SegurosQueInspiran</strong>
    </p>
  </div>
</section>


  );
}