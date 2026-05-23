import type { PortfolioData } from '../data/portfolio';

interface ContactProps {
  data: PortfolioData;
}

export const Contact: React.FC<ContactProps> = ({ data }) => {
  return (
    <div 
      className="animate-fade-in glass-panel" 
      style={{ 
        padding: 'clamp(2rem, 6vw, 3rem) clamp(1.2rem, 4vw, 2.5rem)', 
        textAlign: 'center', 
        margin: '4rem auto',
        maxWidth: '600px',
        border: 'var(--glass-border)',
        boxShadow: 'var(--bento-shadow)'
      }}
    >
      <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.2rem)', marginBottom: '0.75rem' }}>
        Let's <span className="gradient-text">Work Together</span>
      </h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '480px', margin: '0 auto 2rem auto', fontSize: 'clamp(0.9rem, 2vw, 0.95rem)', lineHeight: '1.6' }}>
        I'm currently available for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      
      <a 
        href={`mailto:${data.email}`}
        style={{ 
          display: 'inline-block',
          background: 'var(--accent-gradient)',
          color: '#000000',
          padding: '12px 28px',
          borderRadius: 'var(--radius-md)',
          fontWeight: '600',
          fontSize: '1rem',
          boxShadow: '0 4px 14px rgba(177, 156, 217, 0.4)',
          transition: 'all var(--transition-fast)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(177, 156, 217, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'none';
          e.currentTarget.style.boxShadow = '0 4px 14px rgba(177, 156, 217, 0.4)';
        }}
      >
        Say Hello
      </a>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2.5rem' }}>
        {Object.entries(data.socials).map(([platform, link]) => (
          <a 
            key={platform} 
            href={link as string} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              textTransform: 'capitalize',
              color: 'var(--text-secondary)',
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.04)',
              padding: '8px 16px',
              borderRadius: 'var(--radius-xl)',
              fontWeight: '500',
              fontSize: '0.85rem',
              transition: 'all var(--transition-fast)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.border = '1px solid var(--accent-lavender)';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.04)';
              e.currentTarget.style.color = 'var(--text-secondary)';
            }}
          >
            {platform}
          </a>
        ))}
      </div>
    </div>
  );
};
