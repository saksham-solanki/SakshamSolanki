import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.mdx',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0A0A0B',
          secondary: '#141416',
          tertiary: '#1C1C1F',
          hover: '#2A2A2E',
        },
        text: {
          primary: '#FAFAFA',
          secondary: '#E5E5E7',
          tertiary: '#71717A',
        },
        accent: {
          DEFAULT: '#00E5A0',
          hover: '#33FFBE',
          dark: '#00B37D',
        },
        warning: '#FF6B35',
        info: '#3B82F6',
        border: {
          DEFAULT: '#2A2A2E',
          accent: '#00E5A0',
        },
      },
      fontFamily: {
        display: ['var(--font-satoshi)', 'system-ui', 'sans-serif'],
        body: ['var(--font-satoshi)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      fontSize: {
        'hero': ['clamp(3.5rem, 5vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '900' }],
        'h1': ['clamp(2.5rem, 4vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h2': ['clamp(1.75rem, 3vw, 2rem)', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h3': ['clamp(1.375rem, 2vw, 1.5rem)', { lineHeight: '1.3', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.65' }],
        'caption': ['0.8125rem', { lineHeight: '1.4', letterSpacing: '0.05em', fontWeight: '500' }],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '48px',
        '2xl': '80px',
        '3xl': '120px',
      },
      borderRadius: {
        'btn': '8px',
        'card': '12px',
        'badge': '6px',
      },
      maxWidth: {
        'container': '1200px',
      },
      animation: {
        spotlight: 'spotlight 2s ease .75s 1 forwards',
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        spotlight: {
          '0%': {
            opacity: '0',
            transform: 'translate(-72%, -62%) scale(0.5)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate(-50%, -40%) scale(1)',
          },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
