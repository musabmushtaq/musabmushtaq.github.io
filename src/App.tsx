import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from './data/portfolio';
import { Navigation } from './components/Navigation';
import type { TabType } from './components/Navigation';
import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { BentoProjects } from './components/BentoProjects';

function App() {
  const [[activeTab, direction], setTabState] = useState<[TabType, number]>(['home', 0]);

  const tabs: TabType[] = ['home', 'experience', 'projects'];

  const handleSetTab = (newTab: TabType) => {
    const currentIndex = tabs.indexOf(activeTab);
    const newIndex = tabs.indexOf(newTab);
    setTabState([newTab, newIndex > currentIndex ? 1 : -1]);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 40 : -40,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 40 : -40,
      opacity: 0
    })
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', overflowX: 'hidden' }}>
      <Navigation activeTab={activeTab} setActiveTab={handleSetTab} />
      
      <main style={{ 
        flex: 1, 
        maxWidth: '1300px', 
        width: '100%', 
        margin: '0 auto', 
        padding: '5.5rem clamp(1rem, 5vw, 2.5rem) 5rem clamp(1rem, 5vw, 2.5rem)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}>
        <div style={{ padding: '1rem 0', flex: 1, position: 'relative' }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeTab}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 400, damping: 25 },
                opacity: { duration: 0.15 }
              }}
              style={{ width: '100%', height: '100%' }}
            >
              {activeTab === 'home' && <Hero data={portfolioData} setActiveTab={handleSetTab} />}
              {activeTab === 'experience' && <Timeline data={portfolioData} />}
              {activeTab === 'projects' && <BentoProjects data={portfolioData} />}
            </motion.div>
          </AnimatePresence>
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

