// Core data model types
export interface User {
  userId: string;
  walletAddress: string;
  displayName: string;
  profilePictureUrl?: string;
  createdAt: Date;
}

export interface Creator {
  creatorId: string;
  walletAddress: string;
  username: string;
  bio?: string;
  socialLinks?: {
    twitter?: string;
    farcaster?: string;
    website?: string;
  };
  createdAt: Date;
  totalTipsReceived?: number;
  supporterCount?: number;
}

export interface Tip {
  tipId: string;
  fromUserId: string;
  toCreatorId: string;
  amount: number;
  tokenType: 'SOL' | 'ETH' | 'USDC';
  createdAt: Date;
  txHash: string;
  isRecurring: boolean;
  message?: string;
}

export interface Pool {
  poolId: string;
  creatorId: string;
  title: string;
  description: string;
  goalAmount: number;
  currentAmount: number;
  createdAt: Date;
  endDate?: Date;
  isActive: boolean;
}

// UI Component Props
export interface TipButtonProps {
  variant?: 'default' | 'small' | 'withIcon';
  creator: Creator;
  onTip?: (amount: number, token: string) => void;
  disabled?: boolean;
}

export interface CreatorCardProps {
  variant?: 'default' | 'compact';
  creator: Creator;
  showTipButton?: boolean;
  onClick?: () => void;
}

export interface AnalyticsData {
  totalTips: number;
  totalAmount: number;
  supporterCount: number;
  recentTips: Tip[];
  monthlyData: {
    month: string;
    amount: number;
    tips: number;
  }[];
}
