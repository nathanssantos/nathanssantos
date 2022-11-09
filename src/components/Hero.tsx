import { Container, Flex, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React from 'react';

const Hero = () => {
  const { t } = useTranslation('hero');

  return (
    <Flex height='calc(100vh - 4rem)'>
      <Container
        w='full'
        maxW='container.xl'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        pt={8}
        pb={48}
      >
        <Text fontSize='lg' fontWeight='semibold'>
          {t('salutation')}
        </Text>
        <Text
          fontSize='7xl'
          fontWeight='bold'
          lineHeight={1}
          // backgroundClip='text'
          // background='linear-gradient( 94.23deg, var(--chakra-colors-teal-500) 12.41%, var(--chakra-colors-blue-500) 32.55%, var(--chakra-colors-blue-500) 89.95%)'
          // sx={{ '-webkit-background-clip': 'text', '-webkit-text-fill-color': 'transparent' }}
        >
          {t('name')}.
        </Text>
        <Text fontSize='5xl' fontWeight='semibold' lineHeight={1} mb={8}>
          {t('conclusion')}.
        </Text>
        <Text fontWeight='thin' maxW='27rem'>
          {t('description')} <Text as='span'>{t('company')}.</Text>
        </Text>
      </Container>
    </Flex>
  );
};

export default Hero;
