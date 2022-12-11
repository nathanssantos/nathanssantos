import { Avatar, Container, Flex, Image, Tag, Text, useColorMode } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React, { useRef } from 'react';
import { Fade } from 'react-awesome-reveal';
import { jobs } from 'src/constants';
import { useStore } from 'src/hooks';
import SectionHeader from './SectionHeader';

const Jobs = () => {
  const { t } = useTranslation('jobs');
  const { colorMode } = useColorMode();
  const avatarRef = useRef(null);
  const { uiStore } = useStore();

  const { toggle } = uiStore.scrollIcon;

  return (
    <Flex id='jobs' fontFamily='Roboto Mono'>
      <Container
        w='full'
        maxW='container.xl'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        px={{ base: 6, md: 24 }}
        pt={24}
        pb={48}
        gap={8}
        fontSize='xs'
      >
        <Fade cascade triggerOnce duration={200}>
          <SectionHeader>{t('title')}</SectionHeader>
        </Fade>
        <Flex gap={8} direction='column'>
          <Fade cascade triggerOnce duration={200}>
            {jobs.map((item) => (
              <Flex
                key={item.key}
                shadow='xl'
                direction={{ base: 'column', md: 'row' }}
                py={{ base: 12, md: 8 }}
                px={{ base: 8, md: 16 }}
                gap={16}
                align='flex-start'
                bg={
                  colorMode === 'dark' ? 'rgba(42, 42, 42, 0.75)' : 'rgba(240, 240, 240, 0.75)'
                }
                backdropFilter='blur(0.313rem)'
                borderRadius='md'
              >
                <Flex
                  w={{ base: 28, md: 32 }}
                  minW={{ base: 28, md: 32 }}
                  alignSelf={{ base: 'center' }}
                >
                  <Image
                    alt={`${item.name} logo`}
                    src={item.logo}
                    h='100%'
                    w='100%'
                    objectFit='contain'
                  />
                </Flex>
                <Flex direction='column'>
                  <Text mb={6} fontSize='xl' fontWeight='bold'>
                    {item.name}
                  </Text>
                  <Text mb={2}>{t(`list.${item.key}.description-1`)}</Text>
                  <Text mb={6}>{t(`list.${item.key}.description-2`)}</Text>
                  <Flex gap={2}>
                    {item.tags.map((tag) => (
                      <Tag
                        key={tag}
                        bg={colorMode === 'dark' ? 'teal.500' : 'blue.500'}
                        color={colorMode === 'dark' ? '#222' : '#fff'}
                        size='sm'
                      >
                        {tag}
                      </Tag>
                    ))}
                  </Flex>
                </Flex>
              </Flex>
            ))}
          </Fade>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Jobs;
