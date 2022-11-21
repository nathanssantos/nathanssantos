import { Container, Flex, Text, useColorMode } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

const Hero = () => {
  const { t } = useTranslation('hero');
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
        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          fontWeight={500}
          fontFamily='Roboto Mono'
          color={colorMode === 'dark' ? 'teal.500' : 'blue.500'}
          mb={{ base: 1, md: 2 }}
        >
          {t('salutation')}
        </Text>
        <Flex ml='-0.15rem' mb={2}>
          <Text
            fontSize={{ base: '5xl', md: '7xl' }}
            fontWeight='bold'
            lineHeight={1}
            background={
              colorMode === 'dark'
                ? 'linear-gradient( 120deg, var(--chakra-colors-teal-500) 10%, var(--chakra-colors-blue-500) 50%)'
                : 'linear-gradient( 120deg, var(--chakra-colors-blue-500) 50%, var(--chakra-colors-teal-500) 90%)'
            }
            sx={{
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {t('name')}.
          </Text>
        </Flex>
        <Text
          fontSize={{ base: '2xl', md: '5xl' }}
          fontWeight='bold'
          lineHeight={1}
          mb={{ base: 3, md: 6 }}
          ml='-0.05rem'
        >
          {t('conclusion')}.
        </Text>
        <Text fontSize={{ base: 'sm', md: 'md' }} maxW={{ base: '25.5rem', md: '29rem' }}>
          {t('description')} <Text as='span'>{t('company')}.</Text>
        </Text>
      </Container>
    </Flex>
  );
};

export default Hero;
