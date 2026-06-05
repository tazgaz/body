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
import { Brain, Heart, Utensils, Accessibility, Activity, Wind, Stars, Trophy, Sparkles } from 'lucide-react';
import { audio } from './lib/audio';

type ViewMode = 'home' | 'detail' | 'quiz';

export default function App() {
  const [view, setView] = useState<ViewMode>('home');
  const [selectedSystemId, setSelectedSystemId] = useState<BodySystemId | null>(null);
  const [points, setPoints] = useState(0);

  const selectedSystem = SYSTEMS.find(s => s.id === selectedSystemId);

  const handleSelectSystem = (id: BodySystemId) => {
    audio.playClick();
    setSelectedSystemId(id);
    setView('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEarnPoints = (p: number) => {
    setPoints(prev => {
      const next = prev + p;
      // Play fanfare milestone milestones for child motivation
      if (prev < 100 && next >= 100) audio.playFanfare();
      if (prev < 250 && next >= 250) audio.playFanfare();
      if (prev < 450 && next >= 450) audio.playFanfare();
      if (prev < 650 && next >= 650) audio.playFanfare();
      if (prev < 850 && next >= 850) audio.playFanfare();
      return next;
    });
  };

  const currentRank = points < 151 ? "🔍 חוקר מתחיל" :
                      points < 401 ? "🩺 ביולוג צעיר" :
                      points < 801 ? "🔬 מדען מדופלם" :
                      "🎓 פרופסור לאנטומיה";

  const nextRankPoints = points < 151 ? 151 :
                         points < 401 ? 401 :
                         points < 801 ? 801 : 1000;

  const progressPercent = Math.min((points / nextRankPoints) * 100, 100);

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
            <div className="max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-10">
              {/* Welcome banner split */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
                <div className="lg:col-span-5 space-y-4 md:space-y-6 text-center lg:text-right">
                  <div className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 text-primary text-xs font-black px-4 py-2 rounded-full leading-none">
                    <Sparkles size={14} className="animate-spin text-primary" />
                    <span>המעבדה הביולוגית של כיתה ד'5 🦠</span>
                  </div>

                  <motion.h2 
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="text-4xl md:text-5xl lg:text-5.5xl font-black leading-tight text-on-surface"
                  >
                    מסע מופלא בתוך <span className="bg-gradient-to-r from-primary-container to-secondary-container bg-clip-text text-transparent">גוף האדם</span>
                  </motion.h2>
                  <motion.p 
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-base md:text-lg text-on-surface-variant max-w-lg mx-auto lg:mx-0 font-medium leading-relaxed"
                  >
                    בואו נגלה איך הגוף המופלא שלנו עובד באמת! חקרו איברים, בצעו ניסויים אינטראקטיביים במערכות הדם והעצבים, אספו מדליות מדליקות וענו על חידון הסקרנות הגדול.
                  </motion.p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                    <button 
                      onClick={() => {
                        audio.playClick();
                        setSelectedSystemId(null);
                        setView('quiz');
                      }}
                      className="px-8 py-4 bg-primary text-on-primary font-black rounded-2xl shadow-xl hover:scale-[1.03] transition-all flex items-center justify-center gap-2"
                    >
                      <span>פתור את החידון הגדול! 🏆</span>
                    </button>
                    <button 
                      onClick={() => {
                        audio.playClick();
                        handleSelectSystem('nervous');
                      }}
                      className="px-8 py-4 glass-panel font-extrabold rounded-2xl hover:bg-surface-container-high transition-colors text-on-surface"
                    >
                      התחל חקירת איברים 🧬
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <ModelExplorer onSelectSystem={handleSelectSystem} />
                </div>
              </div>

              {/* Scientists Active Level Progress Board and Trophy Badge Drawer */}
              <div className="mt-10 md:mt-14 glass-panel rounded-3xl p-5 md:p-8 border-on-surface/5 bg-surface-container-low shadow-sm">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-6">
                  <div className="text-center md:text-right space-y-1.5 w-full md:w-auto">
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                      <Trophy size={18} className="text-primary" />
                      <span className="text-xs font-black text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
                        דרגת המדען שלך
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-on-surface">
                      {currentRank}
                    </h3>
                    <p className="text-xs text-on-surface-variant font-medium">
                      {points >= 801 ? "הגעת לדרגת שיא המדע! גאון אמיתי! 👑" : `הרווח עוד ${nextRankPoints - points} נקודות כדי לעלות לדרגת ${points < 151 ? '🩺 ביולוג צעיר' : points < 401 ? '🔬 מדען מדופלם' : '🎓 פרופסור לאנטומיה'}`}
                    </p>
                  </div>
                  
                  {/* Progress Line */}
                  <div className="w-full md:max-w-xs space-y-1.5">
                    <div className="flex justify-between text-[10px] font-black tracking-wider text-on-surface-variant uppercase">
                      <span>התקדמות לדרגה הבאה</span>
                      <span className="font-mono">{points} / {nextRankPoints} XP</span>
                    </div>
                    <div className="w-full h-3 bg-surface-container-highest rounded-full overflow-hidden p-0.5 border border-on-surface/5">
                      <motion.div 
                        animate={{ width: `${progressPercent}%` }}
                        className="h-full bg-gradient-to-r from-primary to-primary-container rounded-full transition-all duration-700"
                      />
                    </div>
                  </div>
                </div>

                {/* Grid collection of Medals with locked States */}
                <div className="border-t border-on-surface/10 pt-6">
                  <h4 className="text-sm font-black text-on-surface-variant mb-4 text-center md:text-right">🏆 ארון המדליות הדיגיטליות של ד'5</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 md:gap-4">
                    <MedalItem 
                      icon="🧠" 
                      title="חוקר המוח" 
                      desc="השג 100 נקודות" 
                      unlocked={points >= 100} 
                    />
                    <MedalItem 
                      icon="❤️" 
                      title="חלוץ הלבבות" 
                      desc="השג 250 נקודות" 
                      unlocked={points >= 250} 
                    />
                    <MedalItem 
                      icon="🌬️" 
                      title="מאסטר הריאות" 
                      desc="השג 450 נקודות" 
                      unlocked={points >= 450} 
                    />
                    <MedalItem 
                      icon="🍏" 
                      title="מפרק המזון" 
                      desc="השג 650 נקודות" 
                      unlocked={points >= 650} 
                    />
                    <MedalItem 
                      icon="🦴" 
                      title="שומר השלד" 
                      desc="השג 850 נקודות" 
                      unlocked={points >= 850} 
                    />
                  </div>
                </div>
              </div>

              {/* Quick Fun Facts Bento Grid */}
              <div className="mt-8 md:mt-12 glass-panel rounded-3xl p-6 md:p-8 flex flex-wrap justify-around items-center gap-6 md:gap-12 border-on-surface/5 bg-surface-container-lowest/50 text-center">
                <StatItem label="עצמות" value="206" sub="בשלד הבוגר" />
                <div className="hidden md:block w-px h-12 bg-on-surface/10" />
                <StatItem label="שרירים בגופנו" value="+600" sub="עוזרים לנו לקפוץ" />
                <div className="hidden md:block w-px h-12 bg-on-surface/10" />
                <StatItem label="תאים פעילים" value="37T" sub="חיים ותוססים של מדע" />
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
              onBack={() => {
                audio.playClick();
                setView('home');
              }} 
              onStartQuiz={() => {
                audio.playClick();
                setView('quiz');
              }}
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
              onFinish={() => {
                audio.playClick();
                setView('home');
              }} 
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer System Nav Bar */}
      <footer className="fixed bottom-0 left-0 w-full z-50 h-16 md:h-20 glass-panel flex flex-row items-center justify-between px-3 md:px-12 border-t border-primary/20 shadow-[0_-8px_30px_rgba(56,189,248,0.06)] rounded-t-3xl bg-surface/85 backdrop-blur-xl">
        <div className="flex flex-row justify-around flex-grow items-center">
          <NavIcon 
            active={selectedSystemId === 'nervous' && view !== 'home'} 
            onClick={() => handleSelectSystem('nervous')}
            icon={<Brain size={22} />}
            label="עצבים"
          />
          <NavIcon 
            active={selectedSystemId === 'circulatory' && view !== 'home'} 
            onClick={() => handleSelectSystem('circulatory')}
            icon={<Activity size={22} />}
            label="דם"
          />
          <NavIcon 
            active={selectedSystemId === 'respiratory' && view !== 'home'} 
            onClick={() => handleSelectSystem('respiratory')}
            icon={<Wind size={22} />}
            label="נשימה"
          />
          <NavIcon 
            active={selectedSystemId === 'digestive' && view !== 'home'} 
            onClick={() => handleSelectSystem('digestive')}
            icon={<Utensils size={22} />}
            label="עיכול"
          />
          <NavIcon 
            active={selectedSystemId === 'skeletal' && view !== 'home'} 
            onClick={() => handleSelectSystem('skeletal')}
            icon={<Accessibility size={22} />}
            label="שלד"
          />
        </div>

        <div className="hidden sm:block w-px h-10 bg-primary/20 mx-3 md:mx-6" />

        {/* Global Live points tracker */}
        <motion.div 
          onClick={() => { audio.playClick(); }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="glass-panel px-3 py-1 md:px-4 md:py-2 rounded-xl flex items-center gap-2 border-primary/15 bg-primary/5 cursor-pointer hover:bg-primary/10 transition-colors"
        >
          <div className="flex flex-col items-center md:items-start leading-none md:leading-tight">
            <span className="text-primary font-black text-sm md:text-lg">{points.toLocaleString()}</span>
            <span className="text-on-surface-variant text-[8px] md:text-[9px] uppercase font-black tracking-tight">נקודות XP</span>
          </div>
          <Stars size={15} className="text-tertiary fill-tertiary md:size-5" />
        </motion.div>
      </footer>
    </Layout>
  );
}

function StatItem({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <span className="text-[10px] md:text-xs font-black uppercase tracking-wider text-on-surface-variant/80 mb-0.5">{label}</span>
      <span className="text-3xl md:text-4xl font-black text-primary font-mono">{value}</span>
      <span className="text-[11px] md:text-xs font-semibold text-on-surface-variant/70 mt-0.5">{sub}</span>
    </div>
  );
}

function NavIcon({ active, onClick, icon, label }: { active: boolean; onClick: () => void; icon: ReactNode; label: string }) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center justify-center transition-all duration-300 ${active ? 'text-primary scale-110 drop-shadow-[0_0_6px_rgba(56,189,248,0.2)] font-black' : 'text-on-surface-variant opacity-60 hover:opacity-100 font-bold'}`}
    >
      <div className={active ? 'animate-bio-pulse' : ''}>
        {icon}
      </div>
      <span className="text-[9px] md:text-[10px] mt-1 tracking-tighter">{label}</span>
    </button>
  );
}

function MedalItem({ icon, title, desc, unlocked }: { icon: string; title: string; desc: string; unlocked: boolean }) {
  return (
    <div className={`p-4 rounded-2xl flex flex-col items-center text-center transition-all duration-500 border relative overflow-hidden ${
      unlocked 
        ? "bg-surface-container-high border-tertiary/20 shadow-sm" 
        : "bg-surface-container-lowest/40 border-on-surface/5 opacity-50"
    }`}>
      {unlocked && (
        <span className="absolute -top-1 -right-1 text-[8px] p-1 text-tertiary animate-pulse">✨</span>
      )}
      <div className={`text-4xl mb-2 transition-transform duration-500 ${unlocked ? 'scale-110 hover:scale-125 rotate-6 hover:-rotate-6' : 'grayscale text-blue-100'}`}>
        {icon}
      </div>
      <div className="text-xs font-black text-on-surface leading-tight">{title}</div>
      <div className="text-[9px] md:text-[10px] text-on-surface-variant mt-1.5 font-bold leading-none">{desc}</div>
      <div className="mt-2.5">
        {unlocked ? (
          <span className="text-[8px] bg-tertiary/15 text-tertiary px-2 py-0.5 rounded-full font-black">הושג ✅</span>
        ) : (
          <span className="text-[8px] bg-surface-container-highest text-on-surface-variant px-1.5 py-0.5 rounded-full font-bold">נעול 🔒</span>
        )}
      </div>
    </div>
  );
}
