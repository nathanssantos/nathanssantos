import type { MetadataRoute } from 'next';

import site from '../constants/site';

const manifest = (): MetadataRoute.Manifest => ({
  name: site.name,
  short_name: 'Nathan',
  description: 'Portfolio of Nathan S. Santos — Software Engineer.',
  start_url: '/',
  display: 'standalone',
  background_color: '#222222',
  theme_color: '#222222',
  icons: [
    { src: '/icon', sizes: '512x512', type: 'image/png', purpose: 'any' },
    { src: '/apple-icon', sizes: '180x180', type: 'image/png' },
  ],
});

export default manifest;
