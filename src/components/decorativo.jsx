import React from 'react';
import decorativoSVG from '../assets/Layer_1.svg'; // Cambia el nombre si tu SVG es otro

export default function DecorativeSection({ children, svgSize = 160 }) {
  return (
    <section style={{ position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 100,
          zIndex: 2,
          padding: '1rem'
        }}
      >
        <img src={decorativoSVG} alt="Decorativo" style={{ width: svgSize, height: svgSize }} />
      </div>
      {children}
    </section>
  );
}