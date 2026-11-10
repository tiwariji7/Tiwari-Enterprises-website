/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#111822',
          900: '#0B0F17',
          800: '#111822',
          700: '#1E293B',
          600: '#334155',
          muted: '#64748B',
        },
        navy: {
          DEFAULT: '#1E293B',
          soft: '#334155',
          deep: '#0F172A',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          subtle: '#F6F6F4',
          muted: '#EDEEEA',
        },
        gold: {
          DEFAULT: '#B38E46',
          light: '#CBA55D',
          dark: '#8F6E2C',
          muted: '#9E7D3B',
          subtle: 'rgba(179, 142, 70, 0.12)',
        },
        paper: {
          DEFAULT: '#FAFAF8',
          warm: '#FFFFFF',
          muted: '#F0F1ED',
        },
        borderMuted: {
          DEFAULT: '#E2E4E8',
          subtle: '#ECEEF2',
          dark: '#CBD5E1',
        },
        brandTeal: '#1F4E5B',
        charcoal: '#151B24',
        deepNavy: '#202C39',
        navySoft: '#293847',
        metallicGold: '#B99A65',
        lightGold: '#D1B783',
        offWhite: '#F5F5F2',
        mutedGrey: '#D8DCE0',
        deepTeal: '#315B66',
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'Outfit', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        site: '1320px',
      },
      letterSpacing: {
        architectural: '0.15em',
        tightest: '-0.03em',
      },
      boxShadow: {
        '2xs': '0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'xs': '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};
