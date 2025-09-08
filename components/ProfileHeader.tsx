'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Share2, Settings2 } from 'lucide-react';
import { Creator } from '@/lib/types';
import { generateAvatarUrl, formatCurrency } from '@/lib/utils';

interface ProfileHeaderProps {
  variant?: 'default' | 'minimal';
  creator: Creator;
  isOwnProfile?: boolean;
}

export function ProfileHeader({ 
  variant = 'default', 
  creator, 
  isOwnProfile = false 
}: ProfileHeaderProps) {
  const isMinimal = variant === 'minimal';

  return (
    <motion.div
      className="glass-card p-6 rounded-xl mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start space-x-4">
        {/* Avatar */}
        <div className="relative">
          <img
            src={generateAvatarUrl(creator.username)}
            alt={creator.username}
            className={`${isMinimal ? 'w-16 h-16' : 'w-20 h-20'} rounded-full border-3 border-neon-blue shadow-neon`}
          />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-3 border-space-bg"></div>
        </div>

        {/* Profile Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-2">
            <h1 className={`font-bold text-white ${isMinimal ? 'text-xl' : 'text-2xl'}`}>
              {creator.username}
            </h1>
            {creator.socialLinks?.farcaster && (
              <ExternalLink className="w-5 h-5 text-neon-cyan" />
            )}
          </div>

          {creator.bio && (
            <p className="text-gray-300 mb-3 leading-relaxed">
              {creator.bio}
            </p>
          )}

          {/* Social Links */}
          {!isMinimal && creator.socialLinks && (
            <div className="flex items-center space-x-4 mb-4">
              {creator.socialLinks.twitter && (
                <a
                  href={`https://twitter.com/${creator.socialLinks.twitter.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neon-cyan hover:text-neon-blue transition-colors duration-200"
                >
                  {creator.socialLinks.twitter}
                </a>
              )}
              {creator.socialLinks.farcaster && (
                <a
                  href={`https://warpcast.com/${creator.socialLinks.farcaster}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neon-purple hover:text-neon-blue transition-colors duration-200"
                >
                  {creator.socialLinks.farcaster}
                </a>
              )}
              {creator.socialLinks.website && (
                <a
                  href={creator.socialLinks.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Website
                </a>
              )}
            </div>
          )}

          {/* Stats */}
          <div className="flex items-center space-x-6">
            <div>
              <div className="text-lg font-bold text-neon-blue">
                {formatCurrency(creator.totalTipsReceived || 0)}
              </div>
              <div className="text-xs text-gray-400">Total Earned</div>
            </div>
            <div>
              <div className="text-lg font-bold text-neon-cyan">
                {creator.supporterCount || 0}
              </div>
              <div className="text-xs text-gray-400">Supporters</div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          <button className="p-2 rounded-lg glass-card hover:bg-opacity-30 transition-colors duration-200">
            <Share2 className="w-5 h-5" />
          </button>
          {isOwnProfile && (
            <button className="p-2 rounded-lg glass-card hover:bg-opacity-30 transition-colors duration-200">
              <Settings2 className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
