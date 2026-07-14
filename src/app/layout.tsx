import type { Metadata } from 'next';
import { ReactNode } from 'react';

import Providers from './providers';
import './globals.css';

const description =
  'Software Engineer with 7+ years building web, mobile and desktop products with React, Node.js, TypeScript and AI. Portfolio of Nathan S. Santos — projects, open source and experience.';

export const metadata: Metadata = {
  metadataBase: new URL('https://nathanssantos.vercel.app'),
  title: 'Nathan S. Santos',
  description,
  authors: [{ name: 'Nathan S. Santos' }],
  openGraph: {
    type: 'website',
    title: 'Nathan S. Santos',
    description,
    url: 'https://nathanssantos.vercel.app/',
    images: ['/images/me.jpg'],
  },
  twitter: {
    card: 'summary',
    title: 'Nathan S. Santos',
    description,
    images: ['/images/me.jpg'],
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang='en'>
    <body>
      <Providers>{children}</Providers>
    </body>
  </html>
);

export default RootLayout;
