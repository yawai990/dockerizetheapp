import { cardo } from '@/fonts/font';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#803806',
          100: '#70525B',
        },
        secondary: {
          DEFAULT: '#F8CEB2',
          100: '#F9F2E0',
          200: '#FFF1E8',
          300: '#FBEADF',
          400: '#ffebdd',
          light: '#fff7f2',
        },
        white: {
          DEFAULT: '#FFFFFF',
          100: '#DFDFDF',
        },
        black: {
          DEFAULT: '#1C1C1C',
          100: '#8A8A8A',
          200: '#4F5154',
          300: '#414141',
          calendar: '#535353',
        },
        red: {
          DEFAULT: '#D40000C7',
        },
        green: {
          DEFAULT: '#028B20',
        },
        overlay: {
          DEFAULT: '#1f1f1f23',
        },
        grey: {
          DEFAULT: '#4F5154',
          light: '#B5BAC1',
        },
        purple: {
          DEFAULT: '#7A0DBE',
        },
      },
      backgroundImage: {
        'primary-gradient':
          'background: linear-gradient(180deg, #9B4205 0%, rgba(169, 84, 25, 0.9) 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        '100': '0px 1px 4px 0px rgba(251, 234, 223, 1);',
      },
      fontSize: {
        heading: '36px',
        24: '24px',
        btnText: '18px',
        medium: '16px',
        small: '14px',
        xs: '10px',
        toggleText: '10px',
      },
      fontWeight: {
        heading: '600',
        subheading: '550',
        normal: '500',
      },
      fontFamily: {
        primary: ['var(--font-cardo)', 'sans'],
        ariel: ['var(--font-ariel)', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
