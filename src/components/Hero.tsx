import React from 'react';
import type { PortfolioData } from '../data/portfolio';
import type { TabType } from './Navigation';

interface HeroProps {
  data: PortfolioData;
  setActiveTab: (tab: TabType) => void;
}

// Helper to render icons for the technologies/specialties dynamically
const getSkillIcon = (item: string): React.ReactNode => {
  const normalized = item.toLowerCase();
  
  // Devicons Mappings (SVG Logos)
  if (normalized.includes('python')) {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" style={{ width: '15px', height: '15px' }} />;
  }
  if (normalized.includes('c++')) {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" alt="C++" style={{ width: '15px', height: '15px' }} />;
  }
  if (normalized.includes('flutter') || normalized.includes('dart')) {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" alt="Flutter" style={{ width: '15px', height: '15px' }} />;
  }
  if (normalized.includes('javascript')) {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" style={{ width: '15px', height: '15px' }} />;
  }
  if (normalized.includes('postgresql')) {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" style={{ width: '15px', height: '15px' }} />;
  }
  if (normalized.includes('mongodb')) {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="MongoDB" style={{ width: '15px', height: '15px' }} />;
  }
  if (normalized.includes('hugging face')) {
    return <span style={{ fontSize: '14px', lineHeight: '1', display: 'inline-flex', alignItems: 'center' }}>🤗</span>;
  }
  
  // Custom Minimalist SVG icons for specialized concepts
  if (normalized.includes('assembly')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-lavender)' }}>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    );
  }
  if (normalized.includes('cloud') || normalized.includes('infrastructure')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-lavender)' }}>
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    );
  }
  if (normalized.includes('architecture') || normalized.includes('system')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-lavender)' }}>
        <rect x="3" y="3" width="7" height="9" rx="1" />
        <rect x="14" y="3" width="7" height="5" rx="1" />
        <rect x="14" y="12" width="7" height="9" rx="1" />
        <rect x="3" y="16" width="7" height="5" rx="1" />
        <path d="M10 7h4M10 18h4" />
      </svg>
    );
  }
  if (normalized.includes('prompt')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-lavender)' }}>
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      </svg>
    );
  }
  if (normalized.includes('dsa') || normalized.includes('structure')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-lavender)' }}>
        <circle cx="12" cy="5" r="3" />
        <circle cx="6" cy="19" r="3" />
        <circle cx="18" cy="19" r="3" />
        <path d="M9 8l-3 8M15 8l3 8" />
      </svg>
    );
  }
  if (normalized.includes('logic') || normalized.includes('optimization')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-lavender)' }}>
        <path d="m13 2-2 10h9L11 22l2-10H4L13 2z" />
      </svg>
    );
  }
  if (normalized.includes('electronics')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-lavender)' }}>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
      </svg>
    );
  }

  // Fallback default icon
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--text-muted)' }}>
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
};

export const Hero: React.FC<HeroProps> = ({ data, setActiveTab }) => {
  return (
    <div 
      style={{ 
        padding: 'clamp(1rem, 6vw, 3rem) 0', 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: 'clamp(2rem, 8vw, 4rem)',
        alignItems: 'start'
      }}
    >
      {/* Left Column: Intro Pitch */}
      <div style={{ maxWidth: '600px' }}>
        <h1 style={{ fontSize: 'clamp(2.2rem, 6vw, 3.2rem)', marginBottom: '0.75rem', lineHeight: '1.1' }}>
          Hi, I'm <span className="gradient-text">{data.name}</span>
        </h1>
        <h2 style={{ fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', color: 'var(--text-secondary)', marginBottom: '1.5rem', fontWeight: '500' }}>
          {data.role}
        </h2>
        <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: '1.6' }}>
          {data.bio}
        </p>
        
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '2.5rem' }}>
          <a 
            href={`mailto:${data.email}`}
            style={{ 
              background: 'var(--accent-gradient)',
              color: '#000000',
              padding: '12px 24px',
              borderRadius: 'var(--radius-md)',
              fontWeight: '600',
              fontSize: '0.95rem',
              boxShadow: '0 4px 20px rgba(177, 156, 217, 0.4)',
              cursor: 'pointer',
              transition: 'all var(--transition-fast)',
              display: 'inline-flex',
              alignItems: 'center',
              textDecoration: 'none',
              gap: '0.5rem'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(177, 156, 217, 0.7)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(177, 156, 217, 0.4)';
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 2 11 13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
            Connect with Me
          </a>
          
          <button 
            onClick={() => setActiveTab('projects')}
            style={{ 
              background: 'rgba(255, 255, 255, 0.03)',
              color: 'var(--text-primary)',
              padding: '12px 24px',
              borderRadius: 'var(--radius-md)',
              fontWeight: '500',
              fontSize: '0.95rem',
              border: '1px solid var(--border-color)',
              cursor: 'pointer',
              transition: 'all var(--transition-fast)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
              e.currentTarget.style.border = '1px solid var(--accent-lavender)';
              e.currentTarget.style.boxShadow = '0 0 15px rgba(177, 156, 217, 0.15)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
              e.currentTarget.style.border = '1px solid var(--border-color)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'none';
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
            </svg>
            View Work
          </button>
          
          <a 
            href="https://docs.google.com/document/d/1Pq-aiKr_eKRPxzuT-jYFElfgkKaa3ScpcxS65fHK_nA/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              background: 'rgba(255, 255, 255, 0.03)',
              color: 'var(--text-primary)',
              padding: '12px 24px',
              borderRadius: 'var(--radius-md)',
              fontWeight: '500',
              fontSize: '0.95rem',
              border: '1px solid var(--border-color)',
              transition: 'all var(--transition-fast)',
              display: 'inline-flex',
              alignItems: 'center',
              textDecoration: 'none',
              gap: '0.5rem'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
              e.currentTarget.style.border = '1px solid var(--accent-lavender)';
              e.currentTarget.style.boxShadow = '0 0 15px rgba(177, 156, 217, 0.15)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
              e.currentTarget.style.border = '1px solid var(--border-color)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'none';
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
            View Resume
          </a>

          {/* Social Glassmorphic Icons Inline */}
          {data.socials.github && (
            <a 
              href={data.socials.github} 
              target="_blank" 
              rel="noopener noreferrer"
              title="GitHub Profile"
              style={{ 
                width: '45px',
                height: '45px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255, 255, 255, 0.03)',
                color: 'var(--text-secondary)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)',
                transition: 'all var(--transition-fast)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.border = '1px solid #ffffff';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.25)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                e.currentTarget.style.border = '1px solid var(--border-color)';
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'none';
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
          )}

          {data.socials.linkedin && (
            <a 
              href={data.socials.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              title="LinkedIn Profile"
              style={{ 
                width: '45px',
                height: '45px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255, 255, 255, 0.03)',
                color: 'var(--text-secondary)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)',
                transition: 'all var(--transition-fast)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.border = '1px solid #0077b5';
                e.currentTarget.style.color = '#0077b5';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 119, 181, 0.35)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                e.currentTarget.style.border = '1px solid var(--border-color)';
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'none';
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Right Column: Bento Stacks Card */}
      <div 
        className="glass-panel" 
        style={{ 
          padding: '1.75rem', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '1.5rem',
          border: 'var(--glass-border)',
          boxShadow: 'var(--bento-shadow)',
          maxWidth: '520px',
          justifySelf: 'stretch'
        }}
      >
        <h3 style={{ fontSize: '1.25rem', color: 'var(--accent-lavender-light)', fontWeight: '600', marginBottom: '0.25rem' }}>
          Core Engine Stacks
        </h3>
        
        {data.skills.map((category) => (
          <div key={category.title} style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <h4 style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {category.title}
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {category.items.map((item) => (
                <span 
                  key={item} 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.04)',
                    color: 'var(--text-secondary)',
                    padding: '6px 12px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.8rem',
                    fontWeight: '500',
                    transition: 'all var(--transition-fast)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.01)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.border = '1px solid var(--accent-lavender)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                    e.currentTarget.style.boxShadow = '0 0 12px rgba(177, 156, 217, 0.15)';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.04)';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.01)';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  {getSkillIcon(item)}
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
