import { Container, Flex, Text, useColorMode } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React from 'react';

const About = () => {
  const { t } = useTranslation('about');
  const { colorMode } = useColorMode();

  return (
    <Flex height='calc(100vh - 4rem)'>
      <Container
        w='full'
        maxW='container.xl'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        px={{ base: 6, md: 24 }}
        pt={8}
        pb={48}
      >
        <Text fontSize={{ base: 'sm', md: 'md' }} maxW={{ base: '25rem', md: '28.5rem' }}>
          {t('description')} <Text as='span'>{t('company')}.</Text>
        </Text>
      </Container>
    </Flex>
  );
};

export default About;
