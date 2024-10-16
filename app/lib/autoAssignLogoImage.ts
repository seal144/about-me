import { ImageInterface } from '@/app/lib/definitions';

const logosList = [
  'firebase',
  'javascript',
  'next',
  'pinia',
  'postgresql',
  'radixui',
  'react',
  'tailwindcss',
  'typescript',
  'vite',
  'vue',
  'vuetify',
  'materialui',
  'apollographql',
  'tanstackquery',
  'wagmi',
  'gatsby',
  'styled-components',
  'sanity',
  'netlify',
  'zustand',
];

const autoAssignLogoImage = (label: string): ImageInterface | undefined => {
  const formattedLabel = label.split('.')[0].replace(' ', '').toLowerCase();

  const logo = logosList.find((logo) => formattedLabel === logo);

  return logo ? { src: `/logo/${logo}.png`, alt: `${logo} logo` } : undefined;
};

export default autoAssignLogoImage;
