import React from 'react';

// src/pages/Home.jsx

const Nosotros = () => (
    <div>
        <section
            style={{
                background: 'linear-gradient(135deg, #0072ff 0%, #00c6ff 100%)',
                color: '#fff',
                padding: '80px 20px',
                textAlign: 'center',
            }}
        >
            <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>
                Bienvenido a AllenGroup Insurance
            </h1>
            <p style={{ fontSize: '1.5rem', marginBottom: '30px' }}>
                Protege tu futuro hoy con nuestros seguros personalizados.
            </p>
            <button
                style={{
                    background: '#fff',
                    color: '#0072ff',
                    border: 'none',
                    padding: '15px 40px',
                    borderRadius: '30px',
                    fontSize: '1.2rem',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                }}
            >
                Cotiza ahora
            </button>
        </section>
    </div>
);

export default Nosotros;
