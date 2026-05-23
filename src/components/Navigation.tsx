import React from 'react';
import { motion } from 'framer-motion';

export type TabType = 'home' | 'experience' | 'projects';

interface NavigationProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  const tabs: { id: TabType; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
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
        gap: 'clamp(0.15rem, 1vw, 0.4rem)',
        background: 'rgba(18, 18, 18, 0.75)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        padding: '0.35rem',
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
                position: 'relative',
                padding: '6px clamp(12px, 2.5vw, 18px)',
                borderRadius: 'var(--radius-xl)',
                color: isActive ? '#000000' : 'var(--text-secondary)',
                fontWeight: isActive ? '600' : '500',
                transition: 'color var(--transition-fast)',
                fontSize: 'clamp(0.75rem, 2.5vw, 0.85rem)',
                backgroundColor: 'transparent',
                zIndex: 1,
              }}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'var(--accent-gradient)',
                    borderRadius: 'var(--radius-xl)',
                    zIndex: -1,
                    boxShadow: '0 4px 12px rgba(177, 156, 217, 0.3)'
                  }}
                  transition={{ type: 'spring', stiffness: 600, damping: 25 }}
                />
              )}
              {tab.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
