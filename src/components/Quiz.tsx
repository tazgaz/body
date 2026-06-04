/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { CheckCircle2, XCircle, Bolt } from 'lucide-react';
import React, { useState } from 'react';
import { BodySystemId, QUESTIONS } from '../types';

interface QuizProps {
  systemId?: BodySystemId | null;
  onPointsEarned: (points: number) => void;
  onFinish: () => void;
}

export default function Quiz({ systemId, onPointsEarned, onFinish }: QuizProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const filteredQuestions = systemId 
    ? QUESTIONS.filter(q => q.systemId === systemId)
    : QUESTIONS;

  const question = filteredQuestions[currentIdx];

  const handleSelect = (optionIdx: number) => {
    if (selectedId !== null) return;
    
    const correct = question.options[optionIdx].isCorrect;
    setSelectedId(optionIdx);
    setIsCorrect(correct);

    if (correct) {
      onPointsEarned(50);
    }

    setTimeout(() => {
      if (currentIdx < filteredQuestions.length - 1) {
        setCurrentIdx(currentIdx + 1);
        setSelectedId(null);
        setIsCorrect(null);
      } else {
        onFinish();
      }
    }, 2000);
  };

  if (!question) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">חידון בקרוב...</h2>
        <p className="text-on-surface-variant mb-8">אנחנו עדיין בונים את השאלות למערכת זו. חזרו בקרוב!</p>
        <button onClick={onFinish} className="px-8 py-4 bg-primary-container text-on-primary-container font-bold rounded-xl">חזור</button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12">
      <div className="flex justify-between items-end mb-6 md:mb-8">
        <div>
          <span className="text-on-surface-variant text-[10px] md:text-xs font-bold uppercase tracking-widest">שאלה {currentIdx + 1} מתוך {filteredQuestions.length}</span>
          <h2 className="text-xl md:text-3xl font-bold text-primary mt-1">חידון גוף האדם</h2>
        </div>
        <div className="flex items-center gap-2 text-tertiary">
          <span className="text-xl md:text-2xl font-bold">+50</span>
          <Bolt className="size-5 md:size-6 fill-tertiary" />
        </div>
      </div>

      <div className="w-full h-1.5 md:h-2 bg-surface-container-highest rounded-full mb-8 md:mb-12 overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${((currentIdx + 1) / filteredQuestions.length) * 100}%` }}
          className="h-full bg-primary-container"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
        <div className="md:col-span-5 glass-panel p-6 md:p-8 rounded-2xl flex flex-col items-center glow-primary">
          <div className="w-full aspect-video md:aspect-square rounded-xl overflow-hidden mb-4 md:mb-6 relative">
            <img src={question.imageUrl} alt="Anatomy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-center leading-tight">{question.text}</h3>
        </div>

        <div className="md:col-span-7 flex flex-col gap-3 md:gap-4">
          {question.options.map((opt, idx) => {
            const isSelected = selectedId === idx;
            const isAnswered = selectedId !== null;
            
            let statusClasses = "border-on-surface/10 hover:bg-surface-container-high";
            if (isSelected) {
              statusClasses = opt.isCorrect 
                ? "border-tertiary bg-tertiary/10 glow-tertiary" 
                : "border-secondary bg-secondary/10 glow-secondary";
            } else if (isAnswered && opt.isCorrect) {
              statusClasses = "border-tertiary/50";
            }

            return (
              <motion.button
                key={idx}
                whileHover={!isAnswered ? { scale: 1.02, x: -8 } : {}}
                whileTap={!isAnswered ? { scale: 0.98 } : {}}
                disabled={isAnswered}
                onClick={() => handleSelect(idx)}
                className={`w-full glass-panel p-4 md:p-6 rounded-xl border flex items-center justify-between transition-all text-right ${statusClasses}`}
              >
                <div className="flex items-center gap-4 md:gap-6">
                  <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full border-2 flex items-center justify-center font-bold text-base md:text-lg 
                    ${isSelected ? (opt.isCorrect ? 'border-tertiary text-tertiary' : 'border-secondary text-secondary') : 'border-on-surface/20'}`}
                  >
                    {opt.label}
                  </div>
                  <span className="text-lg md:text-xl font-medium">{opt.text}</span>
                </div>
                
                {isSelected && (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                    {opt.isCorrect ? <CheckCircle2 className="text-tertiary" /> : <XCircle className="text-secondary" />}
                  </motion.div>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
