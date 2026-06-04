/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Home, Settings, Stars } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen font-sans" dir="rtl">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 h-16 glass-panel flex items-center justify-between px-6 md:px-10">
        <div className="flex items-center gap-2 md:gap-4">
          <motion.div 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer text-primary flex-shrink-0"
          >
            <Home size={28} />
          </motion.div>
          <h1 className="text-sm md:text-xl lg:text-2xl font-bold text-primary tracking-tight">מסע בגוף האדם - דין, יובל, אורי.י - ד5</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16 pb-20">
        {children}
      </main>

      {/* Background Particles */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/10"
            initial={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              opacity: 0 
            }}
            animate={{
              y: [0, -100, -200],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 10
            }}
          />
        ))}
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-secondary/5 blur-[150px] rounded-full" />
      </div>
    </div>
  );
}
