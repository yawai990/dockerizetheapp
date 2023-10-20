import { Cardo, Averia_Libre } from 'next/font/google';

// **** add project font

export const titleFont = Cardo({
  weight: '400',
  subsets: ['latin'],
});

export const bodyFont = Averia_Libre({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
});
