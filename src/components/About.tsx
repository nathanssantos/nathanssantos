import { Avatar, Container, Flex, Text, useColorMode } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React, { useRef, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import { useStore } from 'src/hooks';
import SectionHeader from './SectionHeader';

const About = () => {
  const { t } = useTranslation('about');
  const { colorMode } = useColorMode();
  const avatarRef = useRef(null);
  const { uiStore } = useStore();

  const { toggle } = uiStore.scrollIcon;

  useEffect(() => {
    if (!avatarRef.current) return;

    const avatarElement = avatarRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => toggle(entry.isIntersecting));
      },
      {
        root: null,
        threshold: 0,
      },
    );

    observer.observe(avatarElement);

    return () => {
      observer.observe(avatarElement);
    };
  }, []);

  return (
    <Flex id='about'>
      <Container
        w='full'
        maxW='container.xl'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        px={{ base: 4, md: 24 }}
        pt={24}
        pb={48}
        gap={8}
        fontSize={{ base: 'xs', md: 'sm' }}
      >
        <Fade cascade triggerOnce duration={200}>
          <SectionHeader>{t('title')}</SectionHeader>
          <Flex gap={8} direction={{ base: 'column', md: 'row' }}>
            <Avatar
              w='12.5rem'
              h='12.5rem'
              src='/images/me.jpg'
              filter='grayscale(100%) contrast(1.25)'
              alignSelf={{ base: 'center', md: 'flex-start' }}
              ref={avatarRef}
            />
            <Flex direction='column' gap={4}>
              <Text>{t('description')}</Text>
              <Text>{t('list-title')}:</Text>
              <Flex as='ul' direction='column' wrap='wrap' maxH='8.5rem' maxW='22rem' gap={1}>
                <Flex
                  as='li'
                  gap={1}
                  align='center'
                  _before={{
                    content: `"▹"`,
                    color: colorMode === 'dark' ? 'teal.500' : 'blue.500',
                  }}
                >
                  JavaScript (ES6+)
                </Flex>
                <Flex
                  as='li'
                  gap={1}
                  align='center'
                  _before={{
                    content: `"▹"`,
                    color: colorMode === 'dark' ? 'teal.500' : 'blue.500',
                  }}
                >
                  TypeScript
                </Flex>
                <Flex
                  as='li'
                  gap={1}
                  align='center'
                  _before={{
                    content: `"▹"`,
                    color: colorMode === 'dark' ? 'teal.500' : 'blue.500',
                  }}
                >
                  React.js
                </Flex>
                <Flex
                  as='li'
                  gap={1}
                  align='center'
                  _before={{
                    content: `"▹"`,
                    color: colorMode === 'dark' ? 'teal.500' : 'blue.500',
                  }}
                >
                  React Native
                </Flex>
                <Flex
                  as='li'
                  gap={1}
                  align='center'
                  _before={{
                    content: `"▹"`,
                    color: colorMode === 'dark' ? 'teal.500' : 'blue.500',
                  }}
                >
                  Next.js
                </Flex>
                <Flex
                  as='li'
                  gap={1}
                  align='center'
                  _before={{
                    content: `"▹"`,
                    color: colorMode === 'dark' ? 'teal.500' : 'blue.500',
                  }}
                >
                  Svelte
                </Flex>
                <Flex
                  as='li'
                  gap={1}
                  align='center'
                  _before={{
                    content: `"▹"`,
                    color: colorMode === 'dark' ? 'teal.500' : 'blue.500',
                  }}
                >
                  Electron.js
                </Flex>
                <Flex
                  as='li'
                  gap={1}
                  align='center'
                  _before={{
                    content: `"▹"`,
                    color: colorMode === 'dark' ? 'teal.500' : 'blue.500',
                  }}
                >
                  Node.js
                </Flex>
                <Flex
                  as='li'
                  gap={1}
                  align='center'
                  _before={{
                    content: `"▹"`,
                    color: colorMode === 'dark' ? 'teal.500' : 'blue.500',
                  }}
                >
                  Jest
                </Flex>
                <Flex
                  as='li'
                  gap={1}
                  align='center'
                  _before={{
                    content: `"▹"`,
                    color: colorMode === 'dark' ? 'teal.500' : 'blue.500',
                  }}
                >
                  Cypress
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Fade>
      </Container>
    </Flex>
  );
};

export default About;
