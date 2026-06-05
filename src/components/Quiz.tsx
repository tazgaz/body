/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, Bolt, Lightbulb, ArrowRight, Star } from 'lucide-react';
import React, { useState, useMemo } from 'react';
import { BodySystemId, QUESTIONS } from '../types';
import { audio } from '../lib/audio';

interface QuizProps {
  systemId?: BodySystemId | null;
  onPointsEarned: (points: number) => void;
  onFinish: () => void;
}

export default function Quiz({ systemId, onPointsEarned, onFinish }: QuizProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const filteredQuestions = useMemo(() => {
    const base = systemId 
      ? QUESTIONS.filter(q => q.systemId === systemId)
      : QUESTIONS;
    return [...base].sort(() => Math.random() - 0.5);
  }, [systemId]);

  const question = filteredQuestions[currentIdx];

  const handleSelect = (optionIdx: number) => {
    if (selectedId !== null) return;
    
    const correct = question.options[optionIdx].isCorrect;
    setSelectedId(optionIdx);
    setIsCorrect(correct);
    setShowExplanation(true);

    if (correct) {
      audio.playCorrect();
      onPointsEarned(50);
    } else {
      audio.playError();
    }
  };

  const handleNext = () => {
    audio.playClick();
    if (currentIdx < filteredQuestions.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setSelectedId(null);
      setIsCorrect(null);
      setShowExplanation(false);
    } else {
      onFinish();
    }
  };

  if (!question) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">חידון בקרוב...</h2>
        <p className="text-on-surface-variant mb-8">אנחנו עדיין בונים את השאלות למערכת זו. חזרו בקרוב!</p>
        <button 
          onClick={onFinish} 
          className="px-8 py-4 bg-primary-container text-on-primary-container font-bold rounded-xl"
        >
          חזור
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-6 md:py-10">
      {/* Header with back options */}
      <div className="flex justify-between items-center mb-6">
        <button 
          onClick={onFinish}
          className="flex items-center gap-2 text-sm font-bold text-on-surface-variant hover:text-primary transition-colors"
        >
          <ArrowRight size={18} />
          <span>יציאה מהחידון</span>
        </button>
        <div className="flex items-center gap-2 text-tertiary">
          <span className="text-xl md:text-2xl font-black font-mono">+50</span>
          <div className="p-1 rounded-lg bg-tertiary/10">
            <Bolt className="size-5 md:size-6 fill-tertiary text-tertiary" />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-end mb-3">
        <div>
          <span className="text-on-surface-variant text-[10px] md:text-xs font-black uppercase tracking-widest bg-surface-container-high px-3 py-1.5 rounded-full">
            שאלה {currentIdx + 1} מתוך {filteredQuestions.length}
          </span>
          <h2 className="text-2xl md:text-3.5xl font-black text-on-surface mt-3">חידון סקרנות גוף האדם</h2>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 md:h-2.5 bg-surface-container-highest rounded-full mb-6 md:mb-8 overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${((currentIdx + 1) / filteredQuestions.length) * 100}%` }}
          className="h-full bg-primary-container"
          transition={{ type: "spring", stiffness: 80 }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
        {/* Left column: Question Image & Text */}
        <div className="md:col-span-5 glass-panel p-5 md:p-6 rounded-3xl flex flex-col items-center glow-primary border border-primary/20 sticky top-24">
          <div className="w-full aspect-video md:aspect-square rounded-2xl overflow-hidden mb-4 relative shadow-inner">
            <img 
              src={question.imageUrl} 
              alt="Anatomy Quiz" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-highest/60 to-transparent" />
          </div>
          <h3 className="text-xl md:text-2xl font-black text-center leading-snug text-on-surface mt-2">
            {question.text}
          </h3>
        </div>

        {/* Right column: Options list & Explanations */}
        <div className="md:col-span-7 flex flex-col gap-3 md:gap-4">
          <AnimatePresence mode="wait">
            <div className="space-y-3">
              {question.options.map((opt, idx) => {
                const isSelected = selectedId === idx;
                const isAnswered = selectedId !== null;
                
                let statusClasses = "border-on-surface/10 hover:bg-surface-container-high";
                if (isSelected) {
                  statusClasses = opt.isCorrect 
                    ? "border-tertiary bg-tertiary/10 glow-tertiary text-on-surface" 
                    : "border-secondary bg-secondary/10 glow-secondary text-on-surface";
                } else if (isAnswered && opt.isCorrect) {
                  // highlight the correct one if user answered wrong
                  statusClasses = "border-tertiary/60 bg-tertiary/5 text-on-surface";
                } else if (isAnswered) {
                  statusClasses = "opacity-40 border-on-surface/5";
                }

                return (
                  <motion.button
                    key={idx}
                    whileHover={!isAnswered ? { scale: 1.015, x: -4 } : {}}
                    whileTap={!isAnswered ? { scale: 0.985 } : {}}
                    disabled={isAnswered}
                    onClick={() => handleSelect(idx)}
                    className={`w-full glass-panel p-4 md:p-5 rounded-2xl border flex items-center justify-between transition-all text-right ${statusClasses}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-9 h-9 rounded-full border-2 flex items-center justify-center font-black text-base transition-colors 
                        ${isSelected ? (opt.isCorrect ? 'border-tertiary text-tertiary bg-tertiary/10' : 'border-secondary text-secondary bg-secondary/10') : 'border-on-surface/20'}`}
                      >
                        {opt.label}
                      </div>
                      <span className="text-base md:text-lg font-bold">{opt.text}</span>
                    </div>
                    
                    {isAnswered && opt.isCorrect && (
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                        <CheckCircle2 className="text-tertiary size-6" />
                      </motion.div>
                    )}
                    {isSelected && !opt.isCorrect && (
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                        <XCircle className="text-secondary size-6" />
                      </motion.div>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </AnimatePresence>

          {/* Educational Explanation Box (Shows only after answer selection) */}
          <AnimatePresence>
            {showExplanation && (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className={`p-6 rounded-3xl border-2 overflow-hidden relative shadow-lg ${
                  isCorrect 
                    ? "bg-tertiary/5 border-tertiary/20 glow-tertiary" 
                    : "bg-surface-container-high border-on-surface/10"
                }`}
              >
                <div className="flex items-start gap-3 relative z-10">
                  <div className={`p-2.5 rounded-xl ${isCorrect ? 'bg-tertiary/10 text-tertiary' : 'bg-primary/10 text-primary'}`}>
                    <Lightbulb size={24} className="animate-pulse" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-black text-lg text-on-surface">
                      {isCorrect ? "כל הכבוד! נכון מאוד 🎉" : "לא נורא, לומדים ומשתפרים! 😄"}
                    </h4>
                    <p className="text-sm md:text-base leading-relaxed text-on-surface-variant font-medium">
                      {question.explanation}
                    </p>
                  </div>
                </div>

                {/* Large background stamp */}
                <div className="absolute -right-8 -bottom-8 opacity-5 text-on-surface z-0 pointer-events-none">
                  <Star size={120} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Next Button */}
          {selectedId !== null && (
            <motion.button
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleNext}
              className="w-full py-4 rounded-2xl bg-primary text-on-primary font-black text-lg flex items-center justify-center gap-2 mt-2 shadow-lg shadow-primary/20 hover:shadow-primary/35 transition-all"
            >
              <span>{currentIdx < filteredQuestions.length - 1 ? "לשאלה הבאה ⬅" : "אהבתי והבנתי! סיים חידון 🎉"}</span>
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
}
