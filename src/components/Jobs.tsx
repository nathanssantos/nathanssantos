import {
  Container,
  Flex,
  Icon,
  IconButton,
  Image,
  Tag,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { Fade } from 'react-awesome-reveal';
import { RiExternalLinkLine } from 'react-icons/ri';
import { jobs } from 'src/constants';
import SectionHeader from './SectionHeader';

const Jobs = () => {
  const { t } = useTranslation('jobs');
  const { colorMode } = useColorMode();

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
                direction={{ base: 'column', md: 'row' }}
                py={{ base: 12, md: 8 }}
                px={{ base: 8, md: 16 }}
                gap={16}
                align='flex-start'
                bg={
                  colorMode === 'dark' ? 'rgba(42, 42, 42, 0.75)' : 'rgba(230, 230, 230, 0.75)'
                }
                backdropFilter='blur(0.313rem)'
                borderRadius='md'
                role='group'
                transition='0.2s'
                _hover={{
                  shadow: 'xl',
                  transform: 'translateY(-0.25rem)',
                }}
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
                  <Text
                    mb={6}
                    fontSize='xl'
                    fontWeight='bold'
                    transition='0.2s'
                    _groupHover={{ color: colorMode === 'dark' ? 'teal.500' : 'blue.500' }}
                  >
                    {item.name}
                  </Text>
                  <Text mb={2}>{t(`list.${item.key}.description-1`)}</Text>
                  <Text
                    mb={6}
                    transition='0.2s'
                    _groupHover={{ color: colorMode === 'dark' ? 'teal.500' : 'blue.500' }}
                  >
                    {t(`list.${item.key}.description-2`)}
                  </Text>
                  <Flex align='center' justify='space-between' w='full'>
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
                    <IconButton
                      as='a'
                      href={item.url}
                      target='_blank'
                      aria-label='Homepage Link'
                      variant='ghost'
                      icon={<Icon as={RiExternalLinkLine} fontSize='xl' />}
                      _groupHover={{ color: colorMode === 'dark' ? 'teal.500' : 'blue.500' }}
                    />
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
