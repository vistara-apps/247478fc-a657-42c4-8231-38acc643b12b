'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Users, TrendingUp } from 'lucide-react';
import { CreatorCardProps } from '@/lib/types';
import { formatCurrency, generateAvatarUrl } from '@/lib/utils';
import { TipButton } from './TipButton';

export function CreatorCard({ 
  variant = 'default', 
  creator, 
  showTipButton = true,
  onClick 
}: CreatorCardProps) {
  const isCompact = variant === 'compact';

  return (
    <motion.div
      className={`creator-card cursor-pointer ${isCompact ? 'p-3' : 'p-4'}`}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center space-x-4">
        {/* Avatar */}
        <div className="relative">
          <img
            src={generateAvatarUrl(creator.username)}
            alt={creator.username}
            className={`${isCompact ? 'w-12 h-12' : 'w-16 h-16'} rounded-full border-2 border-neon-blue`}
          />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-space-bg"></div>
        </div>

        {/* Creator Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2">
            <h3 className={`font-semibold text-white truncate ${isCompact ? 'text-sm' : 'text-base'}`}>
              {creator.username}
            </h3>
            {creator.socialLinks?.farcaster && (
              <ExternalLink className="w-4 h-4 text-neon-cyan" />
            )}
          </div>
          
          {creator.bio && (
            <p className={`text-gray-400 truncate ${isCompact ? 'text-xs' : 'text-sm'}`}>
              {creator.bio}
            </p>
          )}

          {!isCompact && (
            <div className="flex items-center space-x-4 mt-2">
              <div className="flex items-center space-x-1 text-xs text-gray-400">
                <TrendingUp className="w-3 h-3" />
                <span>{formatCurrency(creator.totalTipsReceived || 0)}</span>
              </div>
              <div className="flex items-center space-x-1 text-xs text-gray-400">
                <Users className="w-3 h-3" />
                <span>{creator.supporterCount || 0}</span>
              </div>
            </div>
          )}
        </div>

        {/* Tip Button */}
        {showTipButton && (
          <div onClick={(e) => e.stopPropagation()}>
            <TipButton
              variant={isCompact ? 'small' : 'withIcon'}
              creator={creator}
              onTip={(amount, token) => {
                console.log(`Tipping ${amount} ${token} to ${creator.username}`);
                // Handle tip logic here
              }}
            />
          </div>
        )}
      </div>

      {/* Stats for compact variant */}
      {isCompact && (
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-white border-opacity-10">
          <div className="flex items-center space-x-1 text-xs text-gray-400">
            <TrendingUp className="w-3 h-3" />
            <span>{formatCurrency(creator.totalTipsReceived || 0)}</span>
          </div>
          <div className="flex items-center space-x-1 text-xs text-gray-400">
            <Users className="w-3 h-3" />
            <span>{creator.supporterCount || 0} supporters</span>
          </div>
        </div>
      )}
    </motion.div>
  );
}
