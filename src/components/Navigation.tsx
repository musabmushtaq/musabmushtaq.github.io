export type TabType = 'home' | 'experience' | 'projects' | 'contact';

interface NavigationProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  const tabs: { id: TabType; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: '1.5rem',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 100,
      display: 'flex',
      justifyContent: 'center',
      width: 'max-content',
      pointerEvents: 'none'
    }}>
      <div style={{
        display: 'flex',
        gap: '0.3rem',
        background: 'rgba(18, 18, 18, 0.75)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        padding: '0.4rem',
        borderRadius: 'var(--radius-xl)',
        border: 'var(--glass-border)',
        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.6), inset 0 1px 0px rgba(255, 255, 255, 0.05)',
        pointerEvents: 'auto'
      }}>
        {tabs.map(tab => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '6px 14px',
                borderRadius: 'var(--radius-xl)',
                color: isActive ? '#000000' : 'var(--text-secondary)',
                background: isActive ? 'var(--accent-gradient)' : 'transparent',
                fontWeight: isActive ? '600' : '500',
                transition: 'all var(--transition-fast)',
                fontSize: '0.85rem',
                boxShadow: isActive ? '0 4px 12px rgba(177, 156, 217, 0.3)' : 'none'
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
