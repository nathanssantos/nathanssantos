import { Flex, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

const Footer = () => {
  const { t } = useTranslation('footer');

  return (
    <Flex as='footer' align='center' justify='center' py={16}>
      <Text as='p' fontSize='sm'>
        {t('description')}
      </Text>
    </Flex>
  );
};

export default Footer;
