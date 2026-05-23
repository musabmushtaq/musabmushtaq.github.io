import type { PortfolioData } from '../data/portfolio';

interface ContactProps {
  data: PortfolioData;
}

export const Contact: React.FC<ContactProps> = ({ data }) => {
  return (
    <div className="animate-fade-in glass-panel" style={{ padding: 'clamp(2rem, 6vw, 3rem) clamp(1.2rem, 4vw, 2rem)', textAlign: 'center', margin: '2rem 0' }}>
      <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.2rem)', marginBottom: '0.75rem' }}>
        Let's <span className="gradient-text">Work Together</span>
      </h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem auto', fontSize: 'clamp(0.9rem, 2vw, 1rem)', lineHeight: '1.6' }}>
        I'm currently available for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      
      <a 
        href={`mailto:${data.email}`}
        style={{ 
          display: 'inline-block',
          background: 'var(--bg-secondary)',
          color: 'var(--text-primary)',
          padding: '12px 24px',
          borderRadius: 'var(--radius-md)',
          fontWeight: '600',
          border: '1px solid var(--accent-lavender)',
          boxShadow: '0 0 20px rgba(177, 156, 217, 0.15)',
          fontSize: '1rem'
        }}
      >
        Say Hello
      </a>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '2.5rem' }}>
        {Object.entries(data.socials).map(([platform, link]) => (
          <a 
            key={platform} 
            href={link as string} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              textTransform: 'capitalize',
              color: 'var(--text-secondary)',
              fontWeight: '500',
              fontSize: '0.9rem'
            }}
          >
            {platform}
          </a>
        ))}
      </div>
    </div>
  );
};
