/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(240, 90%, 65%)',
        accent: 'hsl(180, 85%, 55%)',
        bg: 'hsl(220, 25%, 98%)',
        surface: 'hsl(0, 0%, 100%)',
        'text-primary': 'hsl(220, 15%, 25%)',
        'text-secondary': 'hsl(220, 15%, 45%)',
        // Dark theme colors for space UI
        'space-bg': 'hsl(240, 30%, 8%)',
        'space-surface': 'hsl(240, 20%, 12%)',
        'neon-blue': 'hsl(200, 100%, 60%)',
        'neon-cyan': 'hsl(180, 100%, 50%)',
        'neon-purple': 'hsl(280, 100%, 70%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'sm': '6px',
        'md': '10px',
        'lg': '16px',
        'xl': '24px',
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'lg': '20px',
        'xl': '32px',
      },
      boxShadow: {
        'card': '0 4px 12px hsla(220, 15%, 15%, 0.10)',
        'elevation1': '0 1px 3px hsla(220, 15%, 15%, 0.08)',
        'neon': '0 0 20px currentColor',
        'neon-lg': '0 0 40px currentColor',
      },
      animation: {
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'pulse-neon': {
          '0%': { boxShadow: '0 0 5px currentColor' },
          '100%': { boxShadow: '0 0 20px currentColor, 0 0 30px currentColor' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow': {
          '0%': { textShadow: '0 0 5px currentColor' },
          '100%': { textShadow: '0 0 20px currentColor, 0 0 30px currentColor' },
        },
      },
    },
  },
  plugins: [],
};
