export const SUPPORTED_TOKENS = [
  { symbol: 'SOL', name: 'Solana', decimals: 9 },
  { symbol: 'ETH', name: 'Ethereum', decimals: 18 },
  { symbol: 'USDC', name: 'USD Coin', decimals: 6 },
] as const;

export const TIP_AMOUNTS = [0.1, 0.5, 1, 5, 10] as const;

export const PLATFORM_FEE = 0.005; // 0.5%

export const MOCK_CREATORS = [
  {
    creatorId: '1',
    walletAddress: '0x1234...5678',
    username: 'Popular content creators',
    bio: 'and artists 16 artists',
    socialLinks: {
      twitter: '@creator1',
      farcaster: 'creator1.eth',
    },
    createdAt: new Date('2024-01-01'),
    totalTipsReceived: 10.86,
    supporterCount: 42,
  },
  {
    creatorId: '2',
    walletAddress: '0x2345...6789',
    username: 'Solan & Matber',
    bio: 'Popular Creators Solana',
    socialLinks: {
      twitter: '@solanmatber',
      website: 'https://solanmatber.com',
    },
    createdAt: new Date('2024-01-15'),
    totalTipsReceived: 5.24,
    supporterCount: 28,
  },
  {
    creatorId: '3',
    walletAddress: '0x3456...7890',
    username: 'Solana A Million',
    bio: 'Solana Creator & Alliance',
    socialLinks: {
      farcaster: 'solanamillion.eth',
      website: 'https://solanamillion.io',
    },
    createdAt: new Date('2024-02-01'),
    totalTipsReceived: 15.42,
    supporterCount: 67,
  },
];
