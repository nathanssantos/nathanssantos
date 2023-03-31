import { Avatar, Container, Flex, Text, useColorMode } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useRef } from 'react';
import { Fade } from 'react-awesome-reveal';
import SectionHeader from './SectionHeader';

const About = () => {
  const { t } = useTranslation('about');
  const { colorMode } = useColorMode();
  const avatarRef = useRef(null);

  return (
    <Flex id='about'>
      <Container
        w='full'
        maxW='container.xl'
        display='flex'
        pl={2}
        pr={{ base: '3.625rem', lg: '8.25rem' }}
        pt={24}
        pb={48}
        gap={{ base: 2, lg: 7 }}
        fontSize={{ base: 'xs', lg: 'sm' }}
      >
        <Flex align='flex-start' gap={{ base: 3.5, lg: 7 }}>
          <Flex position='sticky' top='5rem'>
            <SectionHeader>{t('title')}</SectionHeader>
          </Flex>
          <Flex gap={4} direction='column'>
            <Fade cascade triggerOnce duration={200}>
              <Avatar
                w='100%'
                h='100%'
                maxW='10rem'
                src='/images/me.jpg'
                filter='grayscale(100%) contrast(1.25)'
                borderRadius={0}
                // alignSelf={{ base: 'center', md: 'flex-start' }}
                ref={avatarRef}
              />
              <Flex direction='column' gap={4}>
                <Text>{t('description')}</Text>
                <Text>{t('list-title')}:</Text>
                <Flex
                  as='ul'
                  direction='column'
                  wrap='wrap'
                  maxH={{ base: '7rem', lg: '8.5rem' }}
                  maxW='22rem'
                  gap={1}
                >
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
                  <Flex
                    as='li'
                    gap={1}
                    align='center'
                    _before={{
                      content: `"▹"`,
                      color: colorMode === 'dark' ? 'teal.500' : 'blue.500',
                    }}
                  >
                    Ruby
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
                    Rails
                  </Flex>
                </Flex>
              </Flex>
            </Fade>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default About;
