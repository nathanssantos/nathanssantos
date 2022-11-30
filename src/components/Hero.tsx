import {
  Box,
  BoxProps,
  chakra,
  Container,
  Flex,
  Text,
  useColorMode,
  shouldForwardProp,
} from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
import { observer } from 'mobx-react';
import { useTranslation } from 'next-i18next';
import { useEffect, useRef } from 'react';
import { Fade } from 'react-awesome-reveal';
import { useStore } from 'src/hooks';

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Hero = () => {
  const { t } = useTranslation('hero');
  const { colorMode } = useColorMode();
  const { uiStore } = useStore();
  const nameRef = useRef(null);

  const { logo, scrollIcon } = uiStore;

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
      observer.observe(nameElement);
    };
  }, []);

  return (
    <Flex position='relative' height='calc(100vh - 4.813rem)'>
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
            {t('description')}{' '}
            <Text
              as='a'
              color={colorMode === 'dark' ? 'teal.500' : 'blue.500'}
              cursor='pointer'
            >
              {t('company')}.
            </Text>
          </Text>
          <Flex
            position='absolute'
            left='50%'
            transform='translateX(-50%)'
            bottom={8}
            width='1.25rem'
            height='1.875rem'
            boxShadow={`inset 0 0 0 0.063rem ${colorMode === 'dark' ? '#cbcbcb' : '#8b8b8b'}`}
            borderRadius='1.563rem'
            transition='0.25s'
            opacity={scrollIcon.isOpen ? 1 : 0}
          >
            <ChakraBox
              position='absolute'
              left='50%'
              transform='translateX(-50%)'
              display='flex'
              width='1'
              height='2'
              bg={colorMode === 'dark' ? '#cbcbcb' : '#8b8b8b'}
              borderRadius='1.563rem'
              animate={{
                top: ['0.35rem', '0.55rem', '0.35rem'],
              }}
              // @ts-ignore
              transition={{
                duration: 1,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'loop',
              }}
            />
          </Flex>
        </Fade>
      </Container>
    </Flex>
  );
};

export default observer(Hero);
