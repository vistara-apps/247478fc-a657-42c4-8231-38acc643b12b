'use client';

import { ReactNode } from 'react';
import { ArrowLeft, Settings2, User } from 'lucide-react';
import { motion } from 'framer-motion';

interface AppShellProps {
  children: ReactNode;
  variant?: 'default' | 'transparentHeader';
  title?: string;
  showBackButton?: boolean;
  onBack?: () => void;
  actions?: ReactNode;
}

export function AppShell({ 
  children, 
  variant = 'default',
  title = 'TipEasy',
  showBackButton = false,
  onBack,
  actions
}: AppShellProps) {
  const headerClass = variant === 'transparentHeader' 
    ? 'bg-transparent' 
    : 'glass-card border-b border-white border-opacity-10';

  return (
    <div className="min-h-screen bg-space-bg">
      {/* Header */}
      <motion.header 
        className={`sticky top-0 z-50 px-6 py-4 ${headerClass}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between max-w-3xl mx-auto">
          <div className="flex items-center space-x-4">
            {showBackButton && (
              <button
                onClick={onBack}
                className="p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors duration-200"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
            <h1 className="text-xl font-bold neon-text">{title}</h1>
          </div>
          
          <div className="flex items-center space-x-2">
            {actions}
            <button className="p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors duration-200">
              <Settings2 className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors duration-200">
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 pb-6">
        {children}
      </main>

      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-neon-blue opacity-10"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-neon-purple opacity-10"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </div>
  );
}
