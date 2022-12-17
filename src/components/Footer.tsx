import { Flex, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { Fade } from 'react-awesome-reveal';

const Footer = () => {
  const { t } = useTranslation('footer');

  return (
    <Flex as='footer' align='center' justify='center' py={16} px={4}>
      <Fade triggerOnce duration={200}>
        <Text as='p' fontSize='xs' fontFamily='Roboto Mono' textAlign='center'>
          {t('description')}
        </Text>
      </Fade>
    </Flex>
  );
};

export default Footer;
