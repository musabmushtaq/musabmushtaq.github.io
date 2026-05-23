import { useState } from 'react';
import { portfolioData } from './data/portfolio';
import { Navigation } from './components/Navigation';
import type { TabType } from './components/Navigation';
import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { BentoProjects } from './components/BentoProjects';
import { Contact } from './components/Contact';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main style={{ 
        flex: 1, 
        maxWidth: '1000px', 
        width: '100%', 
        margin: '0 auto', 
        padding: '5.5rem 2rem 5rem 2rem',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{ padding: '1rem 0', flex: 1 }}>
          {activeTab === 'home' && <Hero data={portfolioData} setActiveTab={setActiveTab} />}
          {activeTab === 'experience' && <Timeline data={portfolioData} />}
          {activeTab === 'projects' && <BentoProjects data={portfolioData} />}
          {activeTab === 'contact' && <Contact data={portfolioData} />}
        </div>
      </main>
      
      <footer style={{
        position: 'absolute',
        bottom: '1.25rem',
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        color: 'var(--text-muted)',
        fontSize: '0.8rem',
        whiteSpace: 'nowrap',
        pointerEvents: 'none'
      }}>
        <p>© {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
