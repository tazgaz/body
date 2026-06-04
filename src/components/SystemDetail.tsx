/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, Lightbulb, Play } from 'lucide-react';
import React from 'react';
import { BodySystem } from '../types';

interface SystemDetailProps {
  system: BodySystem;
  onBack: () => void;
  onStartQuiz: () => void;
}

export default function SystemDetail({ system, onBack, onStartQuiz }: SystemDetailProps) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <motion.button 
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        onClick={onBack}
        className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-12 group"
      >
        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        <span className="font-bold">חזרה למודל הראשי</span>
      </motion.button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Visual Section */}
        <div className="lg:col-span-7 lg:sticky lg:top-24">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={`relative glass-panel rounded-[2rem] aspect-square flex items-center justify-center glow-${system.color}`}
          >
            <motion.img 
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              src={system.imageUrl} 
              alt={system.name} 
              className="w-4/5 h-4/5 object-contain mix-blend-screen drop-shadow-[0_0_50px_rgba(164,230,255,0.3)]"
            />
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-3xl md:text-5xl font-bold text-on-surface"
            >
              {system.name}
            </motion.h2>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-on-surface-variant leading-relaxed"
            >
              {system.description}
            </motion.p>
          </div>

          {/* Stats Bento */}
          <div className="grid grid-cols-2 gap-4">
            {system.stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className={`glass-panel p-6 rounded-2xl glow-${system.color}`}
              >
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs text-on-surface-variant font-bold uppercase tracking-widest mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Fun Fact */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="glass-panel p-8 rounded-3xl border-r-4 border-tertiary relative overflow-hidden"
          >
            <div className="flex items-center gap-2 text-tertiary mb-3">
              <Lightbulb size={20} />
              <span className="font-bold">הידעת?</span>
            </div>
            <p className="text-lg leading-relaxed">{system.fact}</p>
            <div className="absolute -right-8 -bottom-8 opacity-5">
              <Lightbulb size={120} />
            </div>
          </motion.div>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onStartQuiz}
            className="w-full py-5 rounded-2xl bg-primary-container text-on-primary-container font-bold text-xl flex items-center justify-center gap-3 shadow-lg shadow-primary-container/20 group"
          >
            <Play size={24} className="fill-current" />
            <span>התחל חידון {system.name.replace('מערכת ה', '')}</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
