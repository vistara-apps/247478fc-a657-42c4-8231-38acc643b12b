'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-space-bg flex items-center justify-center p-4">
      <motion.div
        className="glass-card p-8 rounded-xl text-center max-w-md w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500 bg-opacity-20 flex items-center justify-center"
          animate={{ 
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
          }}
        >
          <AlertTriangle className="w-8 h-8 text-red-400" />
        </motion.div>
        
        <h2 className="text-2xl font-bold text-white mb-4">
          Oops! Something went wrong
        </h2>
        
        <p className="text-gray-400 mb-6">
          We encountered an error while loading TipEasy. Don't worry, this happens sometimes in the crypto space!
        </p>
        
        <div className="space-y-3">
          <button
            onClick={reset}
            className="w-full btn-primary flex items-center justify-center space-x-2"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Try Again</span>
          </button>
          
          <button
            onClick={() => window.location.href = '/'}
            className="w-full btn-secondary"
          >
            Go Home
          </button>
        </div>
        
        {error.digest && (
          <p className="text-xs text-gray-500 mt-4">
            Error ID: {error.digest}
          </p>
        )}
      </motion.div>
    </div>
  );
}
