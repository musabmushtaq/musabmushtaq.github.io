import type { PortfolioData } from '../data/portfolio';

interface TimelineProps {
  data: PortfolioData;
}

export const Timeline: React.FC<TimelineProps> = ({ data }) => {
  return (
    <div style={{ padding: 'clamp(1rem, 6vw, 3rem) 0', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.2rem)', marginBottom: '2rem' }}>
        <span className="gradient-text">Experience</span>
      </h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative' }}>
        {data.experience.map((exp, index) => {
          const isLast = index === data.experience.length - 1;
          
          return (
            <div key={exp.id} style={{ display: 'flex', gap: 'clamp(0.75rem, 3vw, 1.25rem)', position: 'relative', zIndex: 1 }}>
              {/* Timeline node column with segment line */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, position: 'relative' }}>
                {/* Timeline node */}
                <div style={{ 
                  width: 'clamp(30px, 8vw, 38px)', 
                  height: 'clamp(30px, 8vw, 38px)', 
                  borderRadius: '50%', 
                  background: 'var(--bg-secondary)', 
                  border: '2px solid var(--accent-lavender)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 10px rgba(177, 156, 217, 0.15)',
                  zIndex: 2
                }}>
                  <div style={{ width: 'clamp(6px, 2vw, 8px)', height: 'clamp(6px, 2vw, 8px)', borderRadius: '50%', background: 'var(--accent-lavender)' }}></div>
                </div>

                {/* Line segment going down to next node */}
                {!isLast && (
                  <div style={{ 
                    position: 'absolute', 
                    top: 'clamp(30px, 8vw, 38px)', 
                    bottom: '-1.5rem', /* Bridges the 1.5rem gap to the next item */
                    width: '2px', 
                    background: 'var(--border-color)',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 1
                  }}></div>
                )}
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
          );
        })}
      </div>
    </div>
  );
};
