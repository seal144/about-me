import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: 'rgb(var(--color-primary))',
      secondary: 'rgb(var(--color-secondary))',
      background: 'rgb(var(--color-background))',
      foreground: 'rgb(var(--color-foreground))',
    },
    screens: {
      sm: '480px',
      md: '600px',
      lg: '960px',
      xl: '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '4rem',
        lg: '8rem',
      },
    },
    dropShadow: {
      s: '3px 3px 3px rgba(0, 0, 0, .3)',
      l: '5px 5px 5px rgba(0, 0, 0, .3)',
    },
  },
  plugins: [],
};
export default config;
