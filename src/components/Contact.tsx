import { Avatar, Button, Container, Flex, Text, useColorMode } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React, { useRef, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import { useStore } from 'src/hooks';
import SectionHeader from './SectionHeader';

const Contact = () => {
  const { t } = useTranslation('contact');
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
    <Flex id='contact'>
      <Container
        w='full'
        maxW='container.xl'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        px={{ base: 4, md: 24 }}
        pt={24}
        pb={24}
        gap={8}
      >
        <Fade cascade triggerOnce duration={200}>
          <SectionHeader center>{t('title')}</SectionHeader>
          <Flex direction='column' align='center' justify='center' gap={12}>
            <Flex direction='column'>
              <Text textAlign='center' fontSize={{ base: 'sm', md: 'md' }}>
                {t('description')}
              </Text>
              <Text textAlign='center' fontSize={{ base: 'sm', md: 'md' }}>
                {t('description-2')}
              </Text>
            </Flex>
            <Button
              as='a'
              href='mailto:nathansilvasantos@gmail.com'
              variant='outline'
              color={colorMode === 'dark' ? 'teal.500' : 'blue.500'}
              borderColor={colorMode === 'dark' ? 'teal.500' : 'blue.500'}
            >
              {t('button-label')}
            </Button>
          </Flex>
        </Fade>
      </Container>
    </Flex>
  );
};

export default Contact;
