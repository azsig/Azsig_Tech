import React from 'react';
import { Cpu, Code2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        <div style={{ maxWidth: '800px' }}>
          <div className="mono accent-text" style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>
            [ INDEPENDENT TECHNOLOGY STUDIO ]
          </div>
          <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>
            INTEGRATED <br />
            DIGITAL SOLUTIONS
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text-dim)', marginBottom: '3rem' }}>
            From high-performance web systems to precision hardware engineering. 
            We build the infrastructure for the next generation of industry.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="https://katalog.azsig.my.id/" target="_blank" rel="noopener noreferrer" style={{
              backgroundColor: 'var(--color-primary)',
              color: 'white',
              padding: '1rem 2rem',
              fontWeight: 'bold',
              borderRadius: '2px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <Code2 size={20} /> VIEW CATALOG
            </a>
            <a href="#services" style={{
              border: '1px solid rgba(255, 102, 0, 0.3)',
              color: 'var(--color-text)',
              padding: '1rem 2rem',
              fontWeight: 'bold',
              borderRadius: '2px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
               OUR SERVICES
            </a>
            <a href="#contact" style={{
              border: '1px solid var(--color-primary)',
              color: 'var(--color-primary)',
              padding: '1rem 2rem',
              fontWeight: 'bold',
              borderRadius: '2px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <Cpu size={20} /> WORK WITH US
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative side element */}
      <div style={{
        position: 'absolute',
        right: '-5%',
        bottom: '10%',
        fontSize: '20rem',
        opacity: 0.03,
        fontWeight: 'bold',
        pointerEvents: 'none',
        userSelect: 'none'
      }} className="mono">
        ENG_
      </div>
    </section>
  );
};

export default Hero;
