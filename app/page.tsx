'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wallet, TrendingUp, Users, Zap } from 'lucide-react';
import { useMiniKit } from '@coinbase/onchainkit/minikit';
import { ConnectWallet, Wallet as WalletComponent } from '@coinbase/onchainkit/wallet';
import { Name } from '@coinbase/onchainkit/identity';

import { AppShell } from '@/components/AppShell';
import { TipButton } from '@/components/TipButton';
import { CreatorCard } from '@/components/CreatorCard';
import { MOCK_CREATORS } from '@/lib/constants';

export default function HomePage() {
  const { setFrameReady } = useMiniKit();
  const [selectedCreator, setSelectedCreator] = useState(MOCK_CREATORS[0]);

  useEffect(() => {
    setFrameReady();
  }, [setFrameReady]);

  return (
    <AppShell>
      <div className="space-y-6">
        {/* Hero Section */}
        <motion.div
          className="text-center py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-neon-blue to-neon-cyan flex items-center justify-center shadow-neon-lg"
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Zap className="w-16 h-16 text-white" />
          </motion.div>
          
          <h1 className="text-4xl font-extrabold mb-4 neon-text">
            TipEasy
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-md mx-auto">
            Effortless Crypto Tipping Across Your Favorite Platforms
          </p>

          {/* Main Tip Button */}
          <TipButton
            creator={selectedCreator}
            onTip={(amount, token) => {
              console.log(`Tipping ${amount} ${token} to ${selectedCreator.username}`);
            }}
          />
        </motion.div>

        {/* Wallet Connection */}
        <motion.div
          className="glass-card p-4 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Wallet className="w-5 h-5 text-neon-blue" />
              <span className="font-medium">Solana wallet</span>
            </div>
            <div className="flex items-center space-x-4">
              <WalletComponent>
                <ConnectWallet>
                  <Name />
                </ConnectWallet>
              </WalletComponent>
              <div className="flex space-x-2">
                <span className="px-3 py-1 bg-neon-blue bg-opacity-20 text-neon-blue rounded-full text-sm">
                  Coins
                </span>
                <span className="px-3 py-1 bg-neon-purple bg-opacity-20 text-neon-purple rounded-full text-sm">
                  Solana
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Featured Creators */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-xl font-semibold text-white mb-4">Featured Creators</h2>
          
          {MOCK_CREATORS.map((creator, index) => (
            <motion.div
              key={creator.creatorId}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <CreatorCard
                creator={creator}
                onClick={() => setSelectedCreator(creator)}
                showTipButton={true}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          className="grid grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="glass-card p-4 rounded-xl text-center">
            <TrendingUp className="w-8 h-8 text-neon-blue mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">31.52</div>
            <div className="text-xs text-gray-400">SOL Tipped</div>
          </div>
          
          <div className="glass-card p-4 rounded-xl text-center">
            <Users className="w-8 h-8 text-neon-cyan mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">137</div>
            <div className="text-xs text-gray-400">Creators</div>
          </div>
          
          <div className="glass-card p-4 rounded-xl text-center">
            <Zap className="w-8 h-8 text-neon-purple mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">1.2k</div>
            <div className="text-xs text-gray-400">Tips Sent</div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="glass-card p-6 rounded-xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h3 className="text-lg font-semibold text-white mb-2">
            Start Supporting Your Favorite Creators
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            Connect your wallet and start tipping with just one click
          </p>
          <button className="btn-secondary">
            Explore Creators
          </button>
        </motion.div>
      </div>
    </AppShell>
  );
}
