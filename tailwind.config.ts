import type { Config } from 'tailwindcss';

const colors = {
  primary: 'rgb(var(--color-primary))',
  secondary: 'rgb(var(--color-secondary))',
  background: 'rgb(var(--color-background))',
  foreground: 'rgb(var(--color-foreground))',
};

export type Colors = keyof typeof colors;

// NOTE: below values are related to padding classes in aboutMeSection.tsx. If you want to change it you you need to also manually change padding classes in aboutMeSection.tsx to align with the app container. I tried to use the template string (``) in aboutMeSection.tsx and calculate the values automatically, but it is not always working.
const containerPadding = {
  DEFAULT: '1rem',
  sm: '2rem',
  lg: '4rem',
  xl: '8rem',
};

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors,
    screens: {
      sm: '480px',
      md: '600px',
      lg: '960px',
      xl: '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true,
      padding: containerPadding,
    },
    extend: {
      dropShadow: {
        s: '0 3px 4px rgba(0, 0, 0, .25)',
        l: '0 5px 6px rgba(0, 0, 0, .25)',
      },
      borderWidth: {
        DEFAULT: '3px',
        sm: '2px',
        lg: '6px',
      },
      spacing: {
        sectionMargin: '40px',
      },
    },
  },
  plugins: [],
};
export default config;
