'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Heart, DollarSign } from 'lucide-react';
import { TipButtonProps } from '@/lib/types';
import { TIP_AMOUNTS } from '@/lib/constants';

export function TipButton({ 
  variant = 'default', 
  creator, 
  onTip,
  disabled = false 
}: TipButtonProps) {
  const [showTipModal, setShowTipModal] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedToken, setSelectedToken] = useState('SOL');

  const handleTip = () => {
    const amount = selectedAmount || parseFloat(customAmount);
    if (amount && onTip) {
      onTip(amount, selectedToken);
      setShowTipModal(false);
      setSelectedAmount(null);
      setCustomAmount('');
    }
  };

  const getButtonClass = () => {
    switch (variant) {
      case 'small':
        return 'px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-neon-purple to-neon-blue';
      case 'withIcon':
        return 'px-6 py-3 rounded-lg bg-gradient-to-r from-neon-purple to-neon-blue flex items-center space-x-2';
      default:
        return 'tip-button';
    }
  };

  return (
    <>
      <motion.button
        className={`${getButtonClass()} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={() => !disabled && setShowTipModal(true)}
        whileHover={{ scale: disabled ? 1 : 1.05 }}
        whileTap={{ scale: disabled ? 1 : 0.95 }}
        disabled={disabled}
      >
        {variant === 'withIcon' && <Zap className="w-4 h-4" />}
        {variant === 'small' ? 'Tip' : 'Tip Now'}
      </motion.button>

      {/* Tip Modal */}
      {showTipModal && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowTipModal(false)}
        >
          <motion.div
            className="glass-card p-6 rounded-xl max-w-md w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue mx-auto mb-4 flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Tip {creator.username}</h3>
              <p className="text-gray-400 text-sm">{creator.bio}</p>
            </div>

            {/* Token Selection */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Token</label>
              <div className="flex space-x-2">
                {['SOL', 'ETH', 'USDC'].map((token) => (
                  <button
                    key={token}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      selectedToken === token
                        ? 'bg-neon-blue text-white'
                        : 'glass-card hover:bg-opacity-30'
                    }`}
                    onClick={() => setSelectedToken(token)}
                  >
                    {token}
                  </button>
                ))}
              </div>
            </div>

            {/* Amount Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Amount</label>
              <div className="grid grid-cols-3 gap-2 mb-3">
                {TIP_AMOUNTS.map((amount) => (
                  <button
                    key={amount}
                    className={`p-3 rounded-lg text-center font-medium transition-colors duration-200 ${
                      selectedAmount === amount
                        ? 'bg-neon-blue text-white'
                        : 'glass-card hover:bg-opacity-30'
                    }`}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount('');
                    }}
                  >
                    {amount} {selectedToken}
                  </button>
                ))}
              </div>
              
              <div className="relative">
                <input
                  type="number"
                  placeholder="Custom amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  className="w-full p-3 rounded-lg glass-card bg-opacity-50 border border-white border-opacity-20 focus:border-neon-blue focus:outline-none"
                />
                <DollarSign className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-3">
              <button
                className="flex-1 py-3 rounded-lg glass-card hover:bg-opacity-30 transition-colors duration-200"
                onClick={() => setShowTipModal(false)}
              >
                Cancel
              </button>
              <button
                className="flex-1 py-3 rounded-lg bg-gradient-to-r from-neon-purple to-neon-blue text-white font-medium hover:shadow-neon transition-all duration-200"
                onClick={handleTip}
                disabled={!selectedAmount && !customAmount}
              >
                Send Tip
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
