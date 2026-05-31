import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import { Mail, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => (
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
            Azsig Tech is an Independent Technology Studio providing integrated digital solutions. 
            We specialize in engineering robust web systems and innovative IoT devices.
          </p>
        </div>
        
        <div style={{ display: 'flex', gap: '4rem' }}>
          <div>
            <h4 style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }} className="accent-text">CONNECT</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }} className="mono">
              <a href="mailto:contact@azsig.tech" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
                <Mail size={16} /> CONTACT@AZSIG.TECH
              </a>
              <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
                <MessageSquare size={16} /> DISCUSS PROJECT
              </a>
            </div>
          </div>
          <div>
            <h4 style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }} className="accent-text">LOCATION</h4>
            <p className="mono" style={{ fontSize: '0.85rem', color: 'var(--color-text-dim)' }}>
              REMOTE / INDEPENDENT <br />
              Indonesian Based
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
        © {new Date().getFullYear()} AZSIG TECH. SYSTEM_READY // ALL RIGHTS RESERVED.
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <>
      <div className="grid-bg" />
      <Navbar />
      <main>
        <Hero />
        <Services />
        
        <section id="about" style={{ backgroundColor: 'rgba(26, 26, 26, 0.3)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
              <div>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>OUR PHILOSOPHY</h2>
                <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                  At Azsig Tech, we believe that technology should be a seamless extension of human capability. 
                  Our approach combines rigorous engineering principles with a minimalist aesthetic to deliver solutions that are as powerful as they are intuitive.
                </p>
                <div style={{ display: 'flex', gap: '2rem' }} className="mono">
                  <div>
                    <div className="accent-text" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>100%</div>
                    <div style={{ fontSize: '0.7rem' }}>INDEPENDENT</div>
                  </div>
                  <div>
                    <div className="accent-text" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>FULL</div>
                    <div style={{ fontSize: '0.7rem' }}>INTEGRATION</div>
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
                }} className="mono accent-text">STATUS: ACTIVE</div>
                <div className="mono" style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>
                  <span className="accent-text">&gt;</span> Initializing system...<br />
                  <span className="accent-text">&gt;</span> Loading digital assets...<br />
                  <span className="accent-text">&gt;</span> Deploying web solutions...<br />
                  <span className="accent-text">&gt;</span> Calibrating IoT nodes...<br />
                  <span className="accent-text">&gt;</span> <span style={{ color: '#00ff00' }}>ONLINE</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" style={{ textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>READY TO BUILD?</h2>
            <p style={{ marginBottom: '3rem', color: 'var(--color-text-dim)' }}>
              Let's discuss how Azsig Tech can help scale your technology infrastructure.
            </p>
            <a href="mailto:contact@azsig.tech" className="mono" style={{
              display: 'inline-block',
              padding: '1.5rem 3rem',
              border: '2px solid var(--color-primary)',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              transition: 'all 0.3s ease'
            }}>
              INITIALIZE_COMMUNICATION
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;
