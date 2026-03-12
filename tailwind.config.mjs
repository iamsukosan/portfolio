/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: {
          base: '#020917',
          s1: '#071428',
          s2: '#0d1f3c',
          s3: '#112244',
        },
        accent: {
          green: '#39ff14',
          soft: '#00ff88',
        },
        border: {
          default: 'rgba(255,255,255,0.07)',
          hover: 'rgba(57,255,20,0.25)',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        'dot-pulse': 'dotPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.15', transform: 'scale(1)' },
          '50%': { opacity: '0.3', transform: 'scale(1.08)' },
        },
        dotPulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.8)' },
        },
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(rgba(57,255,20,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(57,255,20,0.03) 1px, transparent 1px)`,
        'hero-glow': 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(57,255,20,0.12) 0%, transparent 70%)',
        'card-glow': 'radial-gradient(ellipse 100% 100% at 50% 0%, rgba(57,255,20,0.06) 0%, transparent 60%)',
      },
      backgroundSize: {
        'grid': '48px 48px',
      },
      boxShadow: {
        'card': '0 0 0 1px rgba(255,255,255,0.07), 0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 0 0 1px rgba(57,255,20,0.25), 0 8px 40px rgba(0,0,0,0.5), 0 0 40px rgba(57,255,20,0.06)',
        'btn-primary': '0 0 20px rgba(57,255,20,0.3)',
        'btn-primary-hover': '0 0 32px rgba(57,255,20,0.5)',
        'glow-green': '0 0 60px rgba(57,255,20,0.15)',
      },
      typography: {
        invert: {
          css: {
            '--tw-prose-body': 'rgba(255,255,255,0.75)',
            '--tw-prose-headings': '#ffffff',
            '--tw-prose-links': '#39ff14',
            '--tw-prose-bold': '#ffffff',
            '--tw-prose-counters': 'rgba(255,255,255,0.55)',
            '--tw-prose-bullets': 'rgba(57,255,20,0.6)',
            '--tw-prose-hr': 'rgba(255,255,255,0.07)',
            '--tw-prose-quotes': 'rgba(255,255,255,0.75)',
            '--tw-prose-quote-borders': 'rgba(57,255,20,0.4)',
            '--tw-prose-captions': 'rgba(255,255,255,0.4)',
            '--tw-prose-code': '#39ff14',
            '--tw-prose-pre-code': 'rgba(255,255,255,0.85)',
            '--tw-prose-pre-bg': '#071428',
            '--tw-prose-th-borders': 'rgba(255,255,255,0.07)',
            '--tw-prose-td-borders': 'rgba(255,255,255,0.04)',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
