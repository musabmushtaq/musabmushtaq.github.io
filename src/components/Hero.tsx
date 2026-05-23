import type { PortfolioData } from '../data/portfolio';
import type { TabType } from './Navigation';

interface HeroProps {
  data: PortfolioData;
  setActiveTab: (tab: TabType) => void;
}

export const Hero: React.FC<HeroProps> = ({ data, setActiveTab }) => {
  return (
    <div className="animate-fade-in" style={{ padding: 'clamp(2rem, 8vw, 4rem) 0', maxWidth: '800px' }}>
      <h1 style={{ fontSize: 'clamp(2.2rem, 6vw, 3rem)', marginBottom: '0.75rem', lineHeight: '1.1' }}>
        Hi, I'm <span className="gradient-text">{data.name}</span>
      </h1>
      <h2 style={{ fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', color: 'var(--text-secondary)', marginBottom: '1.5rem', fontWeight: '500' }}>
        {data.role}
      </h2>
      <p style={{ fontSize: 'clamp(1rem, 2vw, 1.1rem)', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '600px', lineHeight: '1.6' }}>
        {data.bio}
      </p>
      
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <button 
          onClick={() => setActiveTab('projects')}
          style={{ 
            background: 'var(--accent-gradient)',
            color: '#fff',
            padding: '10px 20px',
            borderRadius: 'var(--radius-md)',
            fontWeight: '600',
            fontSize: '0.95rem',
            boxShadow: '0 4px 14px rgba(177, 156, 217, 0.4)',
            cursor: 'pointer'
          }}
        >
          View Work
        </button>
        <a 
          href={data.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{ 
            background: 'var(--bg-tertiary)',
            color: 'var(--text-primary)',
            padding: '10px 20px',
            borderRadius: 'var(--radius-md)',
            fontWeight: '500',
            fontSize: '0.95rem',
            border: '1px solid var(--border-color)'
          }}
        >
          GitHub
        </a>
      </div>
    </div>
  );
};
