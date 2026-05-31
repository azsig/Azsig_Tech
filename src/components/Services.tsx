import React from 'react';
import { Layout, Database, Cloud, Cpu, CircuitBoard, Smartphone } from 'lucide-react';

const ServiceCard: React.FC<{
  title: string;
  description: string;
  icons: React.ReactNode[];
  items: string[];
}> = ({ title, description, icons, items }) => (
  <div style={{
    backgroundColor: 'var(--color-surface)',
    padding: '3rem',
    border: '1px solid rgba(255, 102, 0, 0.1)',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden'
  }} className="service-card">
    <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
      {icons.map((icon, index) => (
        <div key={index} className="accent-text">{icon}</div>
      ))}
    </div>
    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{title}</h3>
    <p style={{ color: 'var(--color-text-dim)', marginBottom: '2rem' }}>{description}</p>
    <ul style={{ listStyle: 'none' }}>
      {items.map((item, index) => (
        <li key={index} style={{ 
          marginBottom: '0.5rem', 
          display: 'flex', 
          alignItems: 'center',
          gap: '0.75rem',
          fontSize: '0.9rem'
        }} className="mono">
          <span style={{ color: 'var(--color-primary)' }}>&gt;</span> {item}
        </li>
      ))}
    </ul>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services">
      <div className="container">
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>CORE CAPABILITIES</h2>
          <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--color-primary)' }}></div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
          <ServiceCard 
            title="Web Development"
            description="High-performance, scalable web applications and cloud infrastructure designed for modern business needs."
            icons={[<Layout size={24} />, <Database size={24} />, <Cloud size={24} />]}
            items={[
              "Custom Web Applications",
              "System Integration",
              "Cloud Architecture",
              "Scalable Backend Systems"
            ]}
          />
          <ServiceCard 
            title="IoT & Automation"
            description="Precision hardware design and embedded systems that bridge the gap between physical and digital worlds."
            icons={[<Cpu size={24} />, <CircuitBoard size={24} />, <Smartphone size={24} />]}
            items={[
              "Embedded Systems Design",
              "Custom PCB & Hardware",
              "Smart Device Protocols",
              "Industrial Automation"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
