/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Lightbulb, Play, Brain, Heart, Wind, Utensils, Accessibility, RotateCcw, Plus, Sun, Volume2 } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import { BodySystem } from '../types';
import { audio } from '../lib/audio';

interface SystemDetailProps {
  system: BodySystem;
  onBack: () => void;
  onStartQuiz: () => void;
}

export default function SystemDetail({ system, onBack, onStartQuiz }: SystemDetailProps) {
  // Reaction time game state (Nervous system)
  const [reactionState, setReactionState] = useState<'idle' | 'waiting' | 'ready' | 'success' | 'too-early'>('idle');
  const [reactionTime, setReactionTime] = useState<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);

  // Heart rate state (Circulatory system)
  const [heartBPM, setHeartBPM] = useState<number>(75);

  // Guided breathing state (Respiratory system)
  const [breathPhase, setBreathPhase] = useState<'in' | 'out'>('in');
  const [breathCount, setBreathCount] = useState<number>(0);

  // Digestion state (Digestive system)
  const [selectedFood, setSelectedFood] = useState<'apple' | 'pizza' | 'candy' | null>(null);
  const [digestProgress, setDigestProgress] = useState<number>(0);

  // Bone strengthening state (Skeletal system)
  const [boneStrength, setBoneStrength] = useState<number>(40);
  const [calciumCount, setCalciumCount] = useState<number>(0);
  const [vitaminDCount, setVitaminDCount] = useState<number>(0);

  // Handle play sound blip on interaction
  const triggerTick = () => {
    audio.playClick();
  };

  // --- Nervous System Lab Logic ---
  const startReactionTest = () => {
    triggerTick();
    setReactionState('waiting');
    setReactionTime(null);
    const delay = 1500 + Math.random() * 2500; // 1.5 - 4 seconds delay
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setReactionState('ready');
      startTimeRef.current = Date.now();
    }, delay);
  };

  const pressReactionTrigger = () => {
    if (reactionState === 'waiting') {
      if (timerRef.current) clearTimeout(timerRef.current);
      setReactionState('too-early');
      audio.playError();
    } else if (reactionState === 'ready') {
      const diff = Date.now() - startTimeRef.current;
      setReactionTime(diff);
      setReactionState('success');
      audio.playFanfare();
    }
  };

  const resetReactionTest = () => {
    triggerTick();
    setReactionState('idle');
    setReactionTime(null);
  };

  // --- Respiratory breathing circle loops ---
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (system.id === 'respiratory') {
      interval = setInterval(() => {
        setBreathPhase((prev) => {
          const next = prev === 'in' ? 'out' : 'in';
          if (next === 'in') {
            setBreathCount((c) => c + 1);
          }
          return next;
        });
      }, 4000); // Breathe in for 4s, out for 4s
    }
    return () => clearInterval(interval);
  }, [system.id]);

  // Clean timeouts on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  // --- Stomach Digestion ---
  const feedFood = (food: 'apple' | 'pizza' | 'candy') => {
    audio.playClick();
    setSelectedFood(food);
    setDigestProgress(0);
    // Animate progress up over time
    const interval = setInterval(() => {
      setDigestProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          audio.playCorrect();
          return 100;
        }
        return prev + 5;
      });
    }, 100);
  };

  // --- Bone Strength increase ---
  const addCalcium = () => {
    audio.playClick();
    setCalciumCount(c => c + 1);
    setBoneStrength(prev => {
      const next = Math.min(prev + 15, 100);
      if (next === 100 && prev < 100) audio.playFanfare();
      return next;
    });
  };

  const addVitaminD = () => {
    audio.playClick();
    setVitaminDCount(v => v + 1);
    setBoneStrength(prev => {
      const next = Math.min(prev + 15, 100);
      if (next === 100 && prev < 100) audio.playFanfare();
      return next;
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-12">
      {/* Back button */}
      <motion.button 
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        onClick={onBack}
        className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-6 md:mb-10 group"
      >
        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        <span className="font-extrabold text-sm md:text-base">חזרה למפת הגוף המלאה</span>
      </motion.button>

      {/* Main Grid split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 items-start">
        {/* Left Column: Interactive Visual rendering the 3D map avatar illustration */}
        <div className="lg:col-span-6 lg:sticky lg:top-24">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={`relative glass-panel rounded-3xl aspect-square flex items-center justify-center glow-${system.color} p-6 md:p-8 backdrop-blur-md`}
          >
            <motion.img 
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              src={system.imageUrl} 
              alt={system.name} 
              className="w-4/5 h-4/5 object-contain mix-blend-screen drop-shadow-[0_0_50px_rgba(56,189,248,0.15)]"
            />
            
            {/* Visual sound tester indicator */}
            <button 
              onClick={() => { audio.playCorrect(); }} 
              className="absolute bottom-4 right-4 bg-surface-container-high hover:bg-surface-container-highest p-3 rounded-full text-primary transition-colors flex items-center justify-center gap-1 opacity-80"
              title="בדיקת קול"
            >
              <Volume2 size={16} />
              <span className="text-[10px] font-bold">צליל</span>
            </button>
          </motion.div>
        </div>

        {/* Right Column: Educational texts, bento statistics, and custom scientist simulator */}
        <div className="lg:col-span-6 space-y-6 md:space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className={`px-4 py-1.5 rounded-full text-xs font-black bg-${system.color}/10 text-${system.color} border border-${system.color}/20 uppercase`}>
                מדע לגוף האדם
              </span>
            </div>
            <motion.h2 
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-3xl md:text-5xl font-black text-on-surface"
            >
              {system.name}
            </motion.h2>
            <motion.p 
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.05 }}
              className="text-base md:text-lg text-on-surface-variant leading-relaxed font-medium"
            >
              {system.description}
            </motion.p>
          </div>

          {/* Stats Bento Grid block */}
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {system.stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className={`glass-panel p-4 md:p-5 rounded-2xl border border-on-surface/5 glow-${system.color}`}
              >
                <div className="text-2xl md:text-3xl font-black text-primary font-mono">{stat.value}</div>
                <div className="text-[10px] md:text-xs text-on-surface-variant font-bold uppercase tracking-wider mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Kid-Friendly Fun Fact Card wrapper */}
          <motion.div 
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="glass-panel p-5 md:p-6 rounded-3xl border-r-4 border-tertiary relative overflow-hidden bg-gradient-to-l from-tertiary/5 to-transparent"
          >
            <div className="flex items-center gap-2 text-tertiary mb-2.5">
              <Lightbulb size={20} className="animate-bounce" />
              <span className="font-extrabold text-base md:text-lg">שאלת סקרנות מצחיקה!</span>
            </div>
            <p className="text-sm md:text-base leading-relaxed font-semibold text-on-surface-variant">{system.fact}</p>
          </motion.div>

          {/* 🔬 SCIENCE LABORATORY WIDGET FOR ACTIVE LEARNING */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="glass-panel rounded-3xl p-5 md:p-6 border border-primary/10 bg-surface-container-low shadow-sm overflow-hidden"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🔬</span>
              <h3 className="text-lg md:text-xl font-black text-on-surface">מעבדת המחקר המדעית שלך!</h3>
            </div>

            <AnimatePresence mode="wait">
              {/* 1. Nervous System Lab: Nerve signals reaction times */}
              {system.id === 'nervous' && (
                <motion.div key="nervous" className="space-y-4">
                  <p className="text-xs md:text-sm text-on-surface-variant font-bold leading-relaxed">
                    מערכת העצבים מעבירה הודעות במהירות מדהימה. בוא נמדוד כמה מהר המוח שלכם שולח פקודה לאצבע להקליק!
                  </p>

                  <div className="bg-surface-container-high rounded-2xl p-5 flex flex-col items-center justify-center text-center space-y-4 border border-on-surface/5">
                    {reactionState === 'idle' && (
                      <button 
                        onClick={startReactionTest}
                        className="px-6 py-3 bg-primary text-on-primary font-bold rounded-xl shadow-md hover:bg-primary/95 transition-all w-full"
                      >
                        ⚡ הפעל סריקת מהירות
                      </button>
                    )}

                    {reactionState === 'waiting' && (
                      <div className="py-4 space-y-2">
                        <div className="size-16 rounded-full bg-secondary-container/40 animate-pulse border-2 border-dashed border-secondary/40 flex items-center justify-center">
                          <Brain className="text-secondary animate-bounce size-8" />
                        </div>
                        <p className="font-black text-secondary animate-pulse text-base">הכן את עצמך... לחץ ברגע שהסורק נדלק!</p>
                      </div>
                    )}

                    {reactionState === 'ready' && (
                      <button 
                        onClick={pressReactionTrigger}
                        className="size-28 rounded-full bg-tertiary text-on-tertiary font-black animate-ping text-xl flex items-center justify-center border-4 border-on-tertiary cursor-pointer hover:scale-105 transition-transform"
                      >
                        לחץ עכשיו!
                      </button>
                    )}

                    {reactionState === 'too-early' && (
                      <div className="space-y-3 py-2">
                        <p className="text-secondary font-black text-lg">לחצת מוקדם מדי! אופס 🙈</p>
                        <button 
                          onClick={resetReactionTest}
                          className="px-4 py-2 bg-surface-container-highest text-on-surface font-bold text-xs rounded-lg border flex items-center justify-center mx-auto gap-2"
                        >
                          <RotateCcw size={14} /> נסה שוב
                        </button>
                      </div>
                    )}

                    {reactionState === 'success' && (
                      <div className="space-y-3">
                        <div className="text-2xl font-black text-tertiary">
                          🎉 {reactionTime} מילי-שניות!
                        </div>
                        <p className="text-xs md:text-sm text-on-surface-variant font-bold px-4 leading-relaxed">
                          כל הכבוד! האות העצבתי נע אצלך בסיבים בערך במהירות של <span className="text-primary font-bold">360 קמ"ש</span> למוח ובחזרה. אתם מהירים כמו רקטה! 🚀
                        </p>
                        <button 
                          onClick={resetReactionTest}
                          className="px-4 py-2 bg-surface-container-highest text-on-surface font-bold text-xs rounded-lg border flex items-center justify-center mx-auto gap-2"
                        >
                          <RotateCcw size={14} /> מדידה חדשה
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* 2. Circulatory System Lab: Heartbeat generator */}
              {system.id === 'circulatory' && (
                <motion.div key="circulatory" className="space-y-4">
                  <p className="text-xs md:text-sm text-on-surface-variant font-bold leading-relaxed">
                    הלב מתפקד כמשאבת דם חכמה. שנה את רמת המאמץ ותראה כיצד מהירות פעימות הלב והזרמת החמצן משתנות!
                  </p>

                  <div className="bg-surface-container-high rounded-2xl p-5 flex flex-col items-center justify-center space-y-5 border border-on-surface/5">
                    {/* Pulsing svg heart */}
                    <div className="flex items-center justify-center relative size-24">
                      <motion.div 
                        animate={{ scale: [1, 1.25, 1, 1.2, 1] }}
                        transition={{ 
                          duration: 60 / heartBPM, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                        className="text-secondary pointer-events-none drop-shadow-[0_0_15px_rgba(255,100,100,0.4)]"
                      >
                        <Heart size={72} className="fill-current text-secondary" />
                      </motion.div>
                      <div className="absolute font-mono font-bold text-white text-sm select-none">
                        {heartBPM}
                      </div>
                    </div>

                    {/* Slider selector */}
                    <div className="w-full space-y-2">
                      <div className="flex justify-between text-xs font-black text-on-surface-variant px-1">
                        <span>סוג פעילות:</span>
                        <span className="text-secondary">
                          {heartBPM <= 65 ? "שינה / מנוחה עמוקה 😴" :
                           heartBPM <= 85 ? "קריאת ספר או שיחה 📖" :
                           heartBPM <= 115 ? "הליכה קלה לבית הספר 🎒" :
                           "ריצה ומשחק כדורגל סוער! ⚽🏃"}
                        </span>
                      </div>
                      <input 
                        type="range" 
                        min="55" 
                        max="155" 
                        value={heartBPM} 
                        onChange={(e) => {
                          setHeartBPM(Number(e.target.value));
                          audio.playClick();
                        }}
                        className="w-full h-2 bg-surface-container rounded-lg appearance-none cursor-pointer accent-secondary"
                      />
                      <div className="flex justify-between text-[10px] font-bold text-on-surface-variant/70 leading-normal px-1">
                        <span>55 פעימות לדקה</span>
                        <span>155 פעימות לדקה</span>
                      </div>
                    </div>

                    <p className="text-[11px] md:text-xs font-bold leading-relaxed text-on-surface-variant/90 text-center text-balance">
                      בזמן מאמץ גופני, השרירים צורכים <span className="text-secondary font-black">פי 4 יותר חמצן</span>, ולכן המוח שולח פקודה ללב לפעום מהר יותר כדי להזרים דם במהירות שיא!
                    </p>
                  </div>
                </motion.div>
              )}

              {/* 3. Respiratory System Lab: Breathe exercise */}
              {system.id === 'respiratory' && (
                <motion.div key="respiratory" className="space-y-4">
                  <p className="text-xs md:text-sm text-on-surface-variant font-bold leading-relaxed">
                    כאשר אנחנו נושמים, אנחנו מחדירים חמצן טהור לריאות ופולטים פחמן דו-חמצני מזיק. בואו נתאמן יחד!
                  </p>

                  <div className="bg-surface-container-high rounded-2xl p-5 flex flex-col items-center justify-center space-y-4 border border-on-surface/5">
                    {/* Target breathing container */}
                    <div className="flex flex-col items-center justify-center py-2 space-y-3">
                      <motion.div 
                        animate={{ scale: breathPhase === 'in' ? 1.4 : 0.85 }}
                        transition={{ duration: 4, ease: "easeInOut" }}
                        className={`size-20 rounded-full flex items-center justify-center border-4 shadow-md transition-colors duration-1000 ${
                          breathPhase === 'in' 
                            ? 'bg-primary/20 border-primary shadow-primary/30 text-primary' 
                            : 'bg-surface-container-highest/50 border-on-surface/20 text-on-surface-variant'
                        }`}
                      >
                        <Wind className="size-10 animate-pulse" />
                      </motion.div>

                      <div className="text-center space-y-1">
                        <div className="text-lg font-black text-on-surface transition-all duration-1000">
                          {breathPhase === 'in' ? "🌬️ שאיפה עמוקה (חמצן נכנס)" : "💨 נשיפה איטית (פחמן נפלט)"}
                        </div>
                        <p className="text-xs font-bold text-on-surface-variant">הריאות שלך מתרחבות כמו בלונים!</p>
                      </div>
                    </div>

                    <div className="bg-surface-container rounded-xl px-4 py-2 flex justify-between items-center w-full max-w-[280px]">
                      <span className="text-xs font-bold text-on-surface-variant">נשימות שהשלמת בסימולטור:</span>
                      <span className="text-lg font-black text-primary font-mono">{breathCount}</span>
                    </div>

                    <p className="text-[11px] md:text-xs font-bold leading-relaxed text-on-surface-variant/90 text-center">
                      נשימות עמוקות בקצב הזה מרגיעות את מערכת העצבים ומנקות את נאדיות הריאה שלכם מחלקיקי אבק קטנים!
                    </p>
                  </div>
                </motion.div>
              )}

              {/* 4. Digestive System Lab: Digestion acidic pH reactions */}
              {system.id === 'digestive' && (
                <motion.div key="digestive" className="space-y-4">
                  <p className="text-xs md:text-sm text-on-surface-variant font-bold leading-relaxed">
                    הקיבה היא איבר חומצי ביותר המפרק מזון מוצק למרק נוזלי מזין. בחר מאכל והזן אותו לקיבה הווירטואלית!
                  </p>

                  <div className="bg-surface-container-high rounded-2xl p-5 flex flex-col items-center space-y-4 border border-on-surface/5">
                    {/* Food Selector */}
                    <div className="grid grid-cols-3 gap-2 w-full">
                      {(['apple', 'pizza', 'candy'] as const).map((food) => (
                        <button
                          key={food}
                          onClick={() => feedFood(food)}
                          className={`py-3 rounded-xl font-bold text-xs flex flex-col items-center gap-1.5 transition-all text-center border ${
                            selectedFood === food 
                              ? 'bg-tertiary/15 border-tertiary text-on-surface shadow-xs' 
                              : 'bg-surface-container hover:bg-surface-container-highest border-on-surface/10'
                          }`}
                        >
                          <span className="text-xl">
                            {food === 'apple' ? '🍎' : food === 'pizza' ? '🍕' : '🍬'}
                          </span>
                          <span>
                            {food === 'apple' ? 'תפוח עשיר' : food === 'pizza' ? 'פיצה חמה' : 'סוכרייה מתוקה'}
                          </span>
                        </button>
                      ))}
                    </div>

                    {/* stomach chamber visualization */}
                    {selectedFood ? (
                      <div className="w-full space-y-3 bg-surface-container/60 p-4 rounded-xl">
                        <div className="flex justify-between items-center text-xs font-bold">
                          <span>פעילות מיצי הקיבה:</span>
                          <span className="text-tertiary">
                            {digestProgress < 100 ? "בפירוק שרירי קבוע..." : "פירוק הושלם למרכיבי מזון! ✅"}
                          </span>
                        </div>

                        {/* digestion progress bar */}
                        <div className="w-full h-3 bg-surface-container-highest rounded-full overflow-hidden relative">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${digestProgress}%` }}
                            className="h-full bg-gradient-to-r from-tertiary to-primary-container"
                          />
                        </div>

                        {/* Digestion pH facts and nutritional summaries */}
                        {digestProgress === 100 && (
                          <motion.div 
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-xs font-bold leading-relaxed space-y-2 text-on-surface-variant/90 border-t border-on-surface/5 pt-2.5"
                          >
                            <div className="flex justify-between text-on-surface">
                              <span>רמת חומציות (pH) בקיבה:</span>
                              <span className="text-tertiary font-black">
                                {selectedFood === 'apple' ? 'pH 2.0 (חמצן פירות תורם)' : 
                                 selectedFood === 'pizza' ? 'pH 1.5 (חומצה עוצמתית!)' : 
                                 'pH 3.0 (קל אך לא בריא)'}
                              </span>
                            </div>
                            <p className="leading-snug text-balance">
                              {selectedFood === 'apple' ? 'מעולה! הקיבה פירקה סיבים תזונתיים וויטמינים חיוניים הנספגים ישירות לתוך זרם הדם.' :
                               selectedFood === 'pizza' ? 'הקיבה עבדה קשה ופירקה חלבונים וגבינות מעולים, אך שומן רב נותר למעבר למעי הגס.' :
                               'סוכר מעובד ומהיר! הוא מתפרק תוך שניות בודדות, אבל תתעייפו מהר ומרגישים רעב פעם נוספת בקרוב מאוד!'}
                            </p>
                          </motion.div>
                        )}
                      </div>
                    ) : (
                      <div className="py-6 text-center text-xs font-bold text-on-surface-variant/60 animate-pulse">
                        אנא בחר אחד המזונות למעלה והזן אותו לקיבה!
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* 5. Skeletal System Lab: bone strengthening */}
              {system.id === 'skeletal' && (
                <motion.div key="skeletal" className="space-y-4">
                  <p className="text-xs md:text-sm text-on-surface-variant font-bold leading-relaxed">
                    העצמות בשלד זקוקות לסידן וויטמין D על מנת להישאר חזקות וצפופות. בואו לחזק את העצם הזו!
                  </p>

                  <div className="bg-surface-container-high rounded-2xl p-5 flex flex-col items-center space-y-4 border border-on-surface/5">
                    {/* Bone strength slider gauge */}
                    <div className="w-full space-y-2">
                      <div className="flex justify-between items-center text-xs font-black">
                        <span>כושר עמידות וצפיפות העצם:</span>
                        <span className={`font-black ${
                          boneStrength <= 50 ? 'text-secondary' :
                          boneStrength <= 85 ? 'text-primary' :
                          'text-tertiary font-black tracking-wide glow-tertiary'
                        }`}>
                          {boneStrength}% {boneStrength === 100 ? "שלד קיסרי חזק! 💪🏆" : boneStrength <= 50 ? "שביר וחלש 💔" : "חזק ובריא ⚡"}
                        </span>
                      </div>

                      {/* progress bar */}
                      <div className="w-full h-4 bg-surface-container-highest rounded-full overflow-hidden relative border border-on-surface/5 p-0.5">
                        <motion.div 
                          animate={{ width: `${boneStrength}%` }}
                          className={`h-full rounded-full transition-colors duration-500 bg-gradient-to-l ${
                            boneStrength <= 50 ? 'from-secondary to-orange-400' :
                            boneStrength <= 85 ? 'from-primary to-primary-container' :
                            'from-tertiary to-emerald-400'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Active feeders */}
                    <div className="grid grid-cols-2 gap-2.5 w-full">
                      <button
                        onClick={addCalcium}
                        className="py-2.5 px-3 bg-surface-container hover:bg-surface-container-highest rounded-xl text-xs font-bold border border-on-surface/10 flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <Plus size={14} className="text-tertiary" />
                        <span>🥛 הזן סידן</span>
                      </button>
                      <button
                        onClick={addVitaminD}
                        className="py-2.5 px-3 bg-surface-container hover:bg-surface-container-highest rounded-xl text-xs font-bold border border-on-surface/10 flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <Sun size={14} className="text-orange-400" />
                        <span>☀️ ספוג ויטמין D</span>
                      </button>
                    </div>

                    {/* feedback stats counters */}
                    <div className="flex justify-between text-[11px] font-bold text-on-surface-variant/80 w-full px-1">
                      <span>צלחות סידן שהזנת: <strong className="text-tertiary font-mono">{calciumCount}</strong></span>
                      <span>קרני ויטמין D שקלטת: <strong className="text-orange-400 font-mono">{vitaminDCount}</strong></span>
                    </div>

                    <p className="text-[11px] md:text-xs font-bold leading-relaxed text-on-surface-variant/90 text-center text-balance border-t border-on-surface/5 pt-2 w-full">
                      {boneStrength >= 100 
                        ? 'מדהים! העצם הגיעה לשיא החוזק שלה. היא מסוגלת לעמוד בעומסי תנועה ולשמור על האיברים הפנימיים!' 
                        : 'סידן וויטמין D הם החברים הכי טובים של השלד - בלעדיהם העצמות עלולות להתעקל ולהיות שבירות.'}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Start Quiz Action Footer */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onStartQuiz}
            className="w-full py-5 rounded-2xl bg-primary text-on-primary font-black text-xl flex items-center justify-center gap-3 shadow-lg shadow-primary/20 hover:shadow-primary/35 transition-all group"
          >
            <Play size={24} className="fill-current animate-pulse text-on-primary" />
            <span>התחל את חידון הקיטור! 🚀</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
