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
  },
  plugins: [],
};
export default config;
