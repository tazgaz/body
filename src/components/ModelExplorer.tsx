/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Info, Brain, Activity, Wind, Utensils, Accessibility } from 'lucide-react';
import React from 'react';
import { BodySystemId, SYSTEMS } from '../types';

interface ModelExplorerProps {
  onSelectSystem: (id: BodySystemId) => void;
}

export default function ModelExplorer({ onSelectSystem }: ModelExplorerProps) {
  return (
    <div className="relative w-full h-[600px] md:h-[800px] flex items-center justify-center">
      {/* Central Interactive Model */}
      <div className="relative w-full max-w-2xl aspect-[4/5] flex items-center justify-center">
        <motion.div 
          className="relative w-full h-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnoKxtwKcQJQesTzP63BecdzFksioEbsBImxW1wDNRKmmi2_cgEUPe9LDcogftxr8JyBRyw295r8TW9BDovNUAhCKZy51TDqu0vVWNnZfhl8QLj6A-N3TjYnTNuhU-gRXrKRGvNZkNDeWDNoBdDLq53Xse1OwcglmRrNLZO0dw2B7zTgLJkTujqtgIsgC1xUHpgxBISwwWnYAghrxPNE0x2kqShuQh77rySMf6l6_CfJGnkG-YimXWRbofKElFNu0-OHoj0u40Nvk"
            alt="Human Body Model"
            className="w-full h-full object-contain mix-blend-screen opacity-90 drop-shadow-[0_0_40px_rgba(164,230,255,0.2)]"
          />
          
          {/* Scanline Effect */}
          <motion.div 
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            className="absolute left-0 right-0 h-[2px] bg-primary/30 z-10 blur-[1px] shadow-[0_0_15px_rgba(164,230,255,0.5)]"
          />
        </motion.div>
      </div>

      {/* Systems Quick Access Panel */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
        {SYSTEMS.map((system, idx) => (
          <motion.button
            key={system.id}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 + 0.5 }}
            onClick={() => onSelectSystem(system.id)}
            className="group flex items-center gap-4 bg-surface/40 hover:bg-surface/80 backdrop-blur-md p-3 rounded-2xl border border-primary/10 hover:border-primary/40 transition-all text-right w-56 shadow-lg hover:shadow-primary/10"
          >
            <div className={`w-10 h-10 rounded-xl bg-opacity-20 flex items-center justify-center transition-colors ${
              system.color === 'primary' ? 'bg-primary text-primary' : 
              system.color === 'secondary' ? 'bg-secondary text-secondary' : 'bg-tertiary text-tertiary'
            }`}>
               {system.id === 'nervous' && <Brain size={20} />}
               {system.id === 'circulatory' && <Activity size={20} />}
               {system.id === 'respiratory' && <Wind size={20} />}
               {system.id === 'digestive' && <Utensils size={20} />}
               {system.id === 'skeletal' && <Accessibility size={20} />}
            </div>
            <div className="flex-1">
              <div className="text-sm font-bold text-on-surface">{system.name}</div>
              <div className="text-[10px] text-on-surface-variant opacity-70">לחצו למחקר</div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Info Panel Overlays */}
      <div className="hidden md:block absolute bottom-8 right-10 z-10 w-80 glass-panel p-6 rounded-2xl glow-primary border-primary/20">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
            <Info size={20} />
          </div>
          <h3 className="text-lg font-bold">מחקר אנטומי פעיל</h3>
        </div>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          מערכת הסריקה פועלת. בחרו מערכת מהתפריט בצד או למטה כדי להתחיל בלמידה אינטנסיבית.
        </p>
      </div>
    </div>
  );
}
