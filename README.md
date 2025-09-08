# TipEasy - Base Mini App

Effortless Crypto Tipping Across Your Favorite Platforms

## Features

- **One-Click & Recurring Tipping**: Instant and automated fan support
- **Cross-Platform Integration**: Tip from anywhere users engage with content
- **Creator Analytics Dashboard**: Insights into tipping activity and supporter trends
- **Donation Pools & Social Sharing**: Community-driven support and viral growth
- **Gasless Transactions**: Seamless experience via meta-transactions

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (Ethereum L2) with OnchainKit
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Icons**: Lucide React

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.local.example .env.local
   ```
   Add your OnchainKit API key to `.env.local`

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Main homepage
│   ├── providers.tsx      # MiniKitProvider setup
│   ├── loading.tsx        # Loading UI
│   ├── error.tsx          # Error boundary
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
│   ├── AppShell.tsx       # Main app layout
│   ├── TipButton.tsx      # Tipping functionality
│   ├── CreatorCard.tsx    # Creator profile cards
│   ├── AnalyticsChart.tsx # Analytics visualization
│   └── ProfileHeader.tsx  # Profile header component
├── lib/                   # Utilities and types
│   ├── types.ts           # TypeScript definitions
│   ├── utils.ts           # Helper functions
│   └── constants.ts       # App constants
└── public/                # Static assets
```

## Design System

### Colors
- **Primary**: `hsl(240, 90%, 65%)` - Main brand color
- **Accent**: `hsl(180, 85%, 55%)` - Secondary accent
- **Neon Blue**: `hsl(200, 100%, 60%)` - Interactive elements
- **Neon Cyan**: `hsl(180, 100%, 50%)` - Highlights
- **Neon Purple**: `hsl(280, 100%, 70%)` - Special actions

### Components
- **Glass Cards**: Translucent containers with backdrop blur
- **Neon Effects**: Glowing borders and text animations
- **Gradient Buttons**: Multi-color gradient backgrounds
- **Floating Elements**: Animated background decorations

## Base Mini App Integration

This app is built as a Base Mini App using:

- **MiniKitProvider**: Handles wallet connections and Base chain integration
- **OnchainKit Components**: Identity and wallet components
- **Base Chain**: Ethereum L2 for fast, low-cost transactions
- **Farcaster Integration**: Social platform embedding support

## Development

### Adding New Features

1. **Create Types**: Add TypeScript interfaces in `lib/types.ts`
2. **Build Components**: Create reusable components in `components/`
3. **Add Pages**: Use Next.js App Router in `app/` directory
4. **Style with Tailwind**: Use the custom design system classes

### Testing

```bash
npm run build    # Test production build
npm run lint     # Check code quality
```

## Deployment

This app is optimized for deployment on Vercel or similar platforms that support Next.js 15.

1. **Build the app**:
   ```bash
   npm run build
   ```

2. **Deploy to your platform of choice**

3. **Set environment variables** in your deployment platform

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details
