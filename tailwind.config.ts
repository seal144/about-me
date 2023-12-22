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
  },
  plugins: [],
};
export default config;
