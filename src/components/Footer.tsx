import { useTranslation } from 'next-i18next';
import type { FC } from 'react';

const Footer: FC = () => {
  const { t } = useTranslation('footer');

  return (
    <footer>
      <p>{t('description')}</p>
    </footer>
  );
};

export default Footer;
