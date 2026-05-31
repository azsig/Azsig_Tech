import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: 'rgba(13, 13, 13, 0.8)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255, 102, 0, 0.1)',
      zIndex: 1000
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '80px'
      }}>
        <div style={{ fontWeight: 'bold', fontSize: '1.5rem', letterSpacing: '2px' }}>
          <span className="accent-text">A</span>ZSIG <span className="accent-text">TECH</span>
        </div>
        <div style={{ display: 'flex', gap: '2rem' }} className="mono">
          <a href="#services">Services</a>
          <a href="https://katalog.azsig.my.id/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)' }}>Catalog</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
