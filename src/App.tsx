import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import { Mail, MessageSquare } from 'lucide-react';
import { useLanguage } from './context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer style={{ 
      padding: '4rem 0', 
      borderTop: '1px solid rgba(255, 102, 0, 0.1)',
      backgroundColor: 'rgba(26, 26, 26, 0.5)'
    }}>
      <div className="container">
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '2rem'
        }}>
          <div style={{ maxWidth: '400px' }}>
            <div style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '1rem' }} className="mono">
              <span className="accent-text">A</span>ZSIG <span className="accent-text">TECH</span>
            </div>
            <p style={{ color: 'var(--color-text-dim)', fontSize: '0.9rem' }}>
              {t.footer.desc}
            </p>
          </div>
          
          <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
            <div>
              <h4 style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }} className="accent-text">{t.footer.connect}</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }} className="mono">
                <a href="mailto:yasir_abdulaziz@yahoo.co.id" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
                  <Mail size={16} /> CONTACT
                </a>
                <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
                  <MessageSquare size={16} /> {t.footer.discuss}
                </a>
              </div>
            </div>
            <div>
              <h4 style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }} className="accent-text">{t.footer.location}</h4>
              <p className="mono" style={{ fontSize: '0.85rem', color: 'var(--color-text-dim)' }}>
                {t.footer.remote} <br />
                {t.footer.based}
              </p>
            </div>
          </div>
        </div>
        
        <div style={{ 
          marginTop: '4rem', 
          paddingTop: '2rem', 
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          textAlign: 'center',
          fontSize: '0.75rem',
          color: 'var(--color-text-dim)'
        }} className="mono">
          © {new Date().getFullYear()} AZSIG TECH. SYSTEM_READY // {t.footer.rights}
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  const { t } = useLanguage();
  return (
    <>
      <div className="grid-bg" />
      <Navbar />
      <main>
        <Hero />
        <Services />
        
        <section id="about" style={{ backgroundColor: 'rgba(26, 26, 26, 0.3)' }}>
          <div className="container">
            <div className="responsive-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
              <div>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>{t.about.title}</h2>
                <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                  {t.about.desc}
                </p>
                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }} className="mono">
                  <div>
                    <div className="accent-text" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>100%</div>
                    <div style={{ fontSize: '0.7rem' }}>{t.about.stats.independent}</div>
                  </div>
                  <div>
                    <div className="accent-text" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>FULL</div>
                    <div style={{ fontSize: '0.7rem' }}>{t.about.stats.integration}</div>
                  </div>
                </div>
              </div>
              <div style={{ 
                border: '1px solid var(--color-primary)', 
                padding: '2rem', 
                position: 'relative',
                backgroundColor: 'var(--color-surface)'
              }}>
                <div style={{ 
                  position: 'absolute', 
                  top: '-10px', 
                  left: '20px', 
                  backgroundColor: 'var(--color-bg)', 
                  padding: '0 10px',
                  fontSize: '0.8rem'
                }} className="mono accent-text">{t.about.status.label}</div>
                <div className="mono" style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>
                  <span className="accent-text">&gt;</span> {t.about.status.init}<br />
                  <span className="accent-text">&gt;</span> {t.about.status.assets}<br />
                  <span className="accent-text">&gt;</span> {t.about.status.web}<br />
                  <span className="accent-text">&gt;</span> {t.about.status.iot}<br />
                  <span className="accent-text">&gt;</span> <span style={{ color: '#00ff00' }}>{t.about.status.online.replace('> ', '')}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" style={{ textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{t.ready.title}</h2>
            <p style={{ marginBottom: '3rem', color: 'var(--color-text-dim)' }}>
              {t.ready.desc}
            </p>
            <a href="mailto:yasir_abdulaziz@yahoo.co.id" className="mono" style={{
              display: 'inline-block',
              padding: '1.5rem 3rem',
              border: '2px solid var(--color-primary)',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              transition: 'all 0.3s ease'
            }}>
              {t.ready.button}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;
