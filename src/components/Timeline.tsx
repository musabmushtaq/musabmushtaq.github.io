import type { PortfolioData } from '../data/portfolio';

interface TimelineProps {
  data: PortfolioData;
}

export const Timeline: React.FC<TimelineProps> = ({ data }) => {
  return (
    <div className="animate-fade-in" style={{ padding: '1rem 0' }}>
      <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.2rem)', marginBottom: '2rem' }}>
        My <span className="gradient-text">Experience</span>
      </h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative' }}>
        {/* Vertical line */}
        <div style={{ 
          position: 'absolute', 
          left: '18px', 
          top: '0', 
          bottom: '0', 
          width: '2px', 
          background: 'var(--border-color)',
          zIndex: 0
        }}></div>

        {data.experience.map((exp) => (
          <div key={exp.id} style={{ display: 'flex', gap: '1.25rem', position: 'relative', zIndex: 1 }}>
            {/* Timeline node */}
            <div style={{ 
              width: '38px', 
              height: '38px', 
              borderRadius: '50%', 
              background: 'var(--bg-secondary)', 
              border: '2px solid var(--accent-lavender)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              boxShadow: '0 0 10px rgba(177, 156, 217, 0.15)'
            }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-lavender)' }}></div>
            </div>
            
            {/* Content box */}
            <div className="glass-panel" style={{ padding: '1.5rem', flexGrow: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '0.75rem', gap: '0.75rem' }}>
                <div>
                  <h3 style={{ fontSize: 'clamp(1.1rem, 3vw, 1.25rem)', marginBottom: '0.25rem' }}>{exp.role}</h3>
                  <h4 style={{ color: 'var(--accent-lavender-light)', fontSize: 'clamp(0.9rem, 2.5vw, 1rem)', fontWeight: '500' }}>{exp.company}</h4>
                </div>
                <div style={{ 
                  background: 'var(--bg-tertiary)', 
                  padding: '4px 10px', 
                  borderRadius: 'var(--radius-sm)', 
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)'
                }}>
                  {exp.duration}
                </div>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
