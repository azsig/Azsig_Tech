import React from 'react';
import logo from '../logo-azsig-wordmark.png';
import { useLanguage } from '../context/LanguageContext';
import { Languages } from 'lucide-react';

const Navbar: React.FC = () => {
  const { lang, t, toggleLanguage } = useLanguage();

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: 'rgba(13, 13, 13, 0.9)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255, 102, 0, 0.1)',
      zIndex: 1000
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: '80px',
        flexWrap: 'wrap',
        padding: '0.5rem 1.5rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src={logo} 
            alt="Azsig Tech" 
            style={{ 
              height: '40px', 
              width: 'auto',
              filter: 'invert(1) hue-rotate(180deg) brightness(1.2)', // Fix visibility on dark background
            }} 
          />
        </div>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', fontSize: '0.9rem' }} className="mono nav-links">
          <a href="#services">{t.nav.services}</a>
          <a href="https://katalog.azsig.my.id/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)' }}>{t.nav.catalog}</a>
          <a href="#about">{t.nav.about}</a>
          <a href="#contact">{t.nav.contact}</a>
          <button 
            onClick={toggleLanguage}
            style={{
              background: 'rgba(255, 102, 0, 0.1)',
              border: '1px solid var(--color-primary)',
              color: 'var(--color-primary)',
              padding: '0.25rem 0.5rem',
              cursor: 'pointer',
              fontSize: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              textTransform: 'uppercase',
              fontWeight: 'bold'
            }}
            aria-label="Toggle Language"
          >
            <Languages size={14} /> {lang === 'en' ? 'ID' : 'EN'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
