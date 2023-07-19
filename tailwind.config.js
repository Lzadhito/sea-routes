import colors from 'tailwindcss/colors';
import { COLORS } from './src/components/ui/constants';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    colors: {
      ...colors,
      primary: COLORS.primary,
    },
    extend: {},
  },
  plugins: [],
};
