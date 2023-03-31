import { Container, Flex, Text, useColorMode } from '@chakra-ui/react';
import { observer } from 'mobx-react';
import { useTranslation } from 'next-i18next';
import { useEffect, useRef } from 'react';
import { Fade } from 'react-awesome-reveal';
import { useStore } from 'src/hooks';

const Hero = () => {
  const { t } = useTranslation('hero');
  const { colorMode } = useColorMode();
  const { uiStore } = useStore();
  const nameRef = useRef(null);

  const { logo } = uiStore;

  useEffect(() => {
    if (!nameRef.current) return;

    const nameElement = nameRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => logo.toggle(entry.isIntersecting));
      },
      {
        root: null,
        threshold: 0,
      },
    );

    observer.observe(nameElement);

    return () => {
      observer.unobserve(nameElement);
    };
  }, []);

  return (
    <Flex position='relative' height='calc(100vh - 4.25rem)'>
      <Container
        w='full'
        maxW='container.xl'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        px={{ base: '3.625rem', lg: '8.25rem' }}
        pt={8}
        pb={48}
      >
        <Flex flexDirection='column' justifyContent='center'>
          <Fade cascade triggerOnce duration={200} delay={1600}>
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
                ref={nameRef}
                fontSize={{ base: '5xl', md: '7xl' }}
                fontWeight='black'
                lineHeight={1}
                background={
                  colorMode === 'dark'
                    ? 'linear-gradient( 120deg, var(--chakra-colors-teal-500) 20%, var(--chakra-colors-blue-500) 60%)'
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
              fontWeight='black'
              lineHeight={1}
              mb={{ base: 3, md: 6 }}
              ml='-0.05rem'
            >
              {t('conclusion')}.
            </Text>
            <Text fontSize={{ base: 'sm', md: 'md' }}>{t('description')}</Text>
            <Text fontSize={{ base: 'sm', md: 'md' }}>
              {t('description-2')}{' '}
              <Text
                as='a'
                href='https://w16.dev/'
                target='_blank'
                color={colorMode === 'dark' ? 'teal.500' : 'blue.500'}
                cursor='pointer'
                position='relative'
                _after={{
                  content: `""`,
                  position: 'absolute',
                  bottom: '-0.15rem',
                  transform: 'translateX(-50%)',
                  left: '50%',
                  h: '0.063rem',
                  w: 0,
                  bg: `linear-gradient(to right, transparent, ${
                    colorMode === 'dark' ? '#64ffda' : '#5374fa'
                  }, transparent)`,
                  transition: 'all 0.2s ease-in-out 0s',
                }}
                sx={{
                  '&:hover': {
                    '&::after': {
                      width: '100%',
                    },
                  },
                }}
              >
                {t('company')}.
              </Text>
            </Text>
          </Fade>
        </Flex>
      </Container>
    </Flex>
  );
};

export default observer(Hero);
