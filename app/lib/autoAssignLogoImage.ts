import { ImageInterface } from '@/app/lib/definitions';

const logosList = [
  'firebase',
  'javascript',
  'next',
  'pinia',
  'postgresql',
  'react',
  'tailwind',
  'typescript',
  'vite',
  'vue',
  'vuetify',
];

const autoAssignLogoImage = (label: string): ImageInterface | undefined => {
  const formattedLabel = label.split('.')[0].replace(' ', '').toLowerCase();

  const logo = logosList.find((logo) => formattedLabel === logo);

  return logo ? { src: `/logo/${logo}.png`, alt: `${logo} logo` } : undefined;
};

export default autoAssignLogoImage;
