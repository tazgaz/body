/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AnimatePresence, motion } from 'motion/react';
import { useState, type ReactNode } from 'react';
import Layout from './components/Layout';
import ModelExplorer from './components/ModelExplorer';
import Quiz from './components/Quiz';
import SystemDetail from './components/SystemDetail';
import { BodySystemId, SYSTEMS } from './types';
import { Brain, Heart, Utensils, Accessibility, Activity, Wind, Stars } from 'lucide-react';

type ViewMode = 'home' | 'detail' | 'quiz';

export default function App() {
  const [view, setView] = useState<ViewMode>('home');
  const [selectedSystemId, setSelectedSystemId] = useState<BodySystemId | null>(null);
  const [points, setPoints] = useState(0);

  const selectedSystem = SYSTEMS.find(s => s.id === selectedSystemId);

  const handleSelectSystem = (id: BodySystemId) => {
    setSelectedSystemId(id);
    setView('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEarnPoints = (p: number) => {
    setPoints(prev => prev + p);
  };

  return (
    <Layout>
      <AnimatePresence mode="wait">
        {view === 'home' && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
                <div className="lg:col-span-5 space-y-4 md:space-y-6 text-center lg:text-right">
                  <motion.h2 
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                  >
                    מסע מופלא בתוך <span className="text-primary-container">גוף האדם</span>
                  </motion.h2>
                  <motion.p 
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-base md:text-lg text-on-surface-variant max-w-lg mx-auto lg:mx-0"
                  >
                    בואו נגלה איך הגוף שלנו עובד דרך חוויה אינטראקטיבית, תלת-ממדית ומרתקת. המעבדה הביולוגית הדיגיטלית שלכם מחכה.
                  </motion.p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                    <button 
                      onClick={() => {
                        setSelectedSystemId(null);
                        setView('quiz');
                      }}
                      className="px-8 py-3 md:py-4 bg-primary-container text-on-primary-container font-bold rounded-xl shadow-xl hover:scale-105 transition-transform"
                    >
                      התחל לחקור
                    </button>
                    <button className="px-8 py-3 md:py-4 glass-panel font-bold rounded-xl hover:bg-surface-container-high transition-colors">
                      איך זה עובד?
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <ModelExplorer onSelectSystem={handleSelectSystem} />
                </div>
              </div>

              {/* Stats Bar */}
              <div className="mt-12 md:mt-20 glass-panel rounded-3xl p-6 md:p-10 flex flex-wrap justify-around items-center gap-6 md:gap-12 border-on-surface/5">
                <StatItem label="עצמות" value="206" sub="שלד מלא" />
                <div className="hidden md:block w-px h-12 bg-on-surface/10" />
                <StatItem label="שרירים" value="+600" sub="שרירים פעילים" />
                <div className="hidden md:block w-px h-12 bg-on-surface/10" />
                <StatItem label="תאים" value="37T" sub="תאים בגוף" />
              </div>
            </div>
          </motion.div>
        )}

        {view === 'detail' && selectedSystem && (
          <motion.div
            key="detail"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <SystemDetail 
              system={selectedSystem} 
              onBack={() => setView('home')} 
              onStartQuiz={() => setView('quiz')}
            />
          </motion.div>
        )}

        {view === 'quiz' && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
          >
            <Quiz 
              systemId={selectedSystemId}
              onPointsEarned={handleEarnPoints} 
              onFinish={() => setView('home')} 
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Nav Bar */}
      <footer className="fixed bottom-0 left-0 w-full z-50 h-16 md:h-20 glass-panel flex flex-row items-center justify-between px-4 md:px-12 border-t border-primary/20 shadow-[0_-8px_30px_rgba(164,230,255,0.15)] rounded-t-3xl bg-surface/80 backdrop-blur-xl">
        <div className="flex flex-row justify-around flex-grow items-center">
          <NavIcon 
            active={selectedSystemId === 'nervous'} 
            onClick={() => handleSelectSystem('nervous')}
            icon={<Brain size={24} />}
            label="עצבים"
          />
          <NavIcon 
            active={selectedSystemId === 'circulatory'} 
            onClick={() => handleSelectSystem('circulatory')}
            icon={<Activity size={24} />}
            label="דם"
          />
          <NavIcon 
            active={selectedSystemId === 'respiratory'} 
            onClick={() => handleSelectSystem('respiratory')}
            icon={<Wind size={24} />}
            label="נשימה"
          />
          <NavIcon 
            active={selectedSystemId === 'digestive'} 
            onClick={() => handleSelectSystem('digestive')}
            icon={<Utensils size={24} />}
            label="עיכול"
          />
          <NavIcon 
            active={selectedSystemId === 'skeletal'} 
            onClick={() => handleSelectSystem('skeletal')}
            icon={<Accessibility size={24} />}
            label="שלד"
          />
        </div>

        <div className="hidden sm:block w-px h-10 bg-primary/20 mx-4 md:mx-8" />

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="glass-panel px-3 py-1 md:px-4 md:py-2 rounded-xl flex items-center gap-2 border-primary/20 glow-primary shadow-lg"
        >
          <div className="flex flex-col items-start leading-none md:leading-tight">
            <span className="text-primary font-bold text-sm md:text-lg">{points.toLocaleString()}</span>
            <span className="text-on-surface-variant text-[8px] md:text-[10px] uppercase font-bold tracking-tighter">נקודות מסע</span>
          </div>
          <Stars size={16} className="text-tertiary fill-tertiary md:size-5" />
        </motion.div>
      </footer>
    </Layout>
  );
}

function StatItem({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">{label}</span>
      <span className="text-4xl md:text-5xl font-bold text-primary">{value}</span>
      <span className="text-xs md:text-sm font-medium text-on-surface-variant mt-1">{sub}</span>
    </div>
  );
}

function NavIcon({ active, onClick, icon, label }: { active: boolean; onClick: () => void; icon: ReactNode; label: string }) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center transition-all duration-300 ${active ? 'text-primary scale-110 drop-shadow-[0_0_10px_rgba(164,230,255,0.5)]' : 'text-on-surface-variant opacity-60 hover:opacity-100'}`}
    >
      <div className={active ? 'animate-bio-pulse' : ''}>
        {icon}
      </div>
      <span className="text-[10px] font-bold mt-1 uppercase tracking-tighter">{label}</span>
    </button>
  );
}
