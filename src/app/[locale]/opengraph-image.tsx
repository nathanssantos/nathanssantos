import { ImageResponse } from 'next/og';
import { getTranslations } from 'next-intl/server';

import site from '../../constants/site';
import { routing } from '../../i18n/routing';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = site.name;

export const generateStaticParams = () => routing.locales.map((locale) => ({ locale }));

type OgImageProps = { params: Promise<{ locale: string }> };

const OpengraphImage = async ({ params }: OgImageProps) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '90px',
        backgroundColor: '#222222',
        fontFamily: 'monospace',
      }}
    >
      <div style={{ display: 'flex', fontSize: 40, color: '#64ffda' }}>
        {site.url.replace('https://', '')}
      </div>
      <div
        style={{
          display: 'flex',
          marginTop: 24,
          fontSize: 96,
          fontWeight: 800,
          color: 'transparent',
          backgroundImage: 'linear-gradient(120deg, #64ffda 20%, #5374fa 70%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
        }}
      >
        {site.name}
      </div>
      <div style={{ display: 'flex', marginTop: 16, fontSize: 44, color: '#f0f0f0' }}>
        {t('title').split('—')[1]?.trim() ?? t('title')}
      </div>
    </div>,
    size,
  );
};

export default OpengraphImage;
