import type { MetadataRoute } from 'next';

import site from '../constants/site';

const robots = (): MetadataRoute.Robots => ({
  rules: { userAgent: '*', allow: '/' },
  sitemap: `${site.url}/sitemap.xml`,
  host: site.url,
});

export default robots;
