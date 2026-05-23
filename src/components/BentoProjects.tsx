import type { PortfolioData } from '../data/portfolio';

interface BentoProjectsProps {
  data: PortfolioData;
}

export const BentoProjects: React.FC<BentoProjectsProps> = ({ data }) => {
  return (
    <div style={{ padding: 'clamp(1rem, 6vw, 3rem) 0' }}>
      <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.2rem)', marginBottom: '2rem' }}>
        <span className="gradient-text">Projects</span>
      </h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '1.5rem',
        gridAutoRows: 'minmax(220px, auto)'
      }}>
        {data.projects.map((project) => {
          return (
            <div 
              key={project.id} 
              className="bento-card"
              style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ flexGrow: 1 }}>
                <h3 style={{ fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', marginBottom: '0.75rem' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', fontSize: '0.95rem', lineHeight: '1.5' }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      style={{ 
                        background: 'rgba(255,255,255,0.04)', 
                        padding: '3px 8px', 
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.75rem',
                        color: 'var(--accent-lavender-light)',
                        border: '1px solid rgba(255,255,255,0.04)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: 'var(--text-primary)',
                      fontSize: '0.85rem',
                      fontWeight: '500'
                    }}
                  >
                    Live Demo ↗
                  </a>
                )}
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: 'var(--text-secondary)',
                      fontSize: '0.85rem'
                    }}
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
