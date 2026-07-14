import type { MetadataRoute } from 'next';

import site from '../constants/site';
import { routing } from '../i18n/routing';

const sitemap = (): MetadataRoute.Sitemap => {
  const languages = Object.fromEntries(
    routing.locales.map((locale) => [locale, `${site.url}/${locale}`]),
  );

  return routing.locales.map((locale) => ({
    url: `${site.url}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: locale === routing.defaultLocale ? 1 : 0.8,
    alternates: { languages },
  }));
};

export default sitemap;
