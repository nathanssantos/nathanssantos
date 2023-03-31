import {
  Button,
  Container,
  Flex,
  Grid,
  Icon,
  IconButton,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { Fade } from 'react-awesome-reveal';
import { RiExternalLinkLine, RiGithubLine, RiStarLine } from 'react-icons/ri';
import SectionHeader from './SectionHeader';

type ProjectsProps = {
  projects: Repository[];
};

const Projects = ({ projects }: ProjectsProps) => {
  const { t } = useTranslation(['projects', 'common']);
  const { colorMode } = useColorMode();

  return (
    <Flex id='projects' fontFamily='Roboto Mono'>
      <Container
        w='full'
        maxW='container.xl'
        display='flex'
        alignItems='flex-start'
        pl={2}
        pr={{ base: '3.625rem', lg: '8.25rem' }}
        pt={24}
        pb={48}
        fontSize='xs'
      >
        <Flex align='flex-start' gap={{ base: 3.5, lg: 7 }}>
          <Flex pb='4.25rem' position='sticky' top='5rem'>
            <SectionHeader>{t('title')}</SectionHeader>
          </Flex>
          <Flex direction='column'>
            <Grid gap={6} gridTemplateColumns={{ lg: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)' }}>
              <Fade cascade triggerOnce duration={200}>
                {projects.map((item) => (
                  <Flex
                    key={item.id}
                    direction='column'
                    p={8}
                    bg={
                      colorMode === 'dark'
                        ? 'rgba(42, 42, 42, 0.75)'
                        : 'rgba(230, 230, 230, 0.75)'
                    }
                    backdropFilter='blur(0.313rem)'
                    borderRadius='md'
                    h='full'
                    role='group'
                    transition='0.2s'
                    _hover={{
                      shadow: 'xl',
                      transform: 'translateY(-0.25rem)',
                    }}
                  >
                    <Flex
                      align='flex-start'
                      justify='space-between'
                      mb={6}
                      gap={2}
                      _groupHover={{ color: colorMode === 'dark' ? 'teal.500' : 'blue.500' }}
                    >
                      <Text fontSize='lg' fontWeight='bold' transition='0.2s'>
                        {item.name}
                      </Text>
                      {!!item.stargazers_count && (
                        <Flex align='center' gap={2} fontSize='md' transition='0.2s'>
                          <Icon as={RiStarLine} fontSize='xl' />
                          {item.stargazers_count}
                        </Flex>
                      )}
                    </Flex>
                    <Flex flex={1}>
                      <Text mb={8}>{t(`list.${item.name}.description`)}</Text>
                    </Flex>
                    <Flex align='center' justify='space-between' gap={2}>
                      <Text
                        fontSize='sm'
                        fontWeight='bold'
                        transition='0.2s'
                        _groupHover={{ color: colorMode === 'dark' ? 'teal.500' : 'blue.500' }}
                      >
                        {item.language}
                      </Text>
                      <Flex gap={2}>
                        {!!item.homepage?.length && (
                          <IconButton
                            as='a'
                            href={item.homepage}
                            target='_blank'
                            aria-label='Homepage Link'
                            variant='ghost'
                            size='sm'
                            icon={<Icon as={RiExternalLinkLine} fontSize='xl' />}
                            _groupHover={{
                              color: colorMode === 'dark' ? 'teal.500' : 'blue.500',
                            }}
                          />
                        )}
                        <IconButton
                          as='a'
                          href={`https://github.com/nathanssantos/${item.name}`}
                          target='_blank'
                          aria-label='Github Link'
                          variant='ghost'
                          size='sm'
                          icon={<Icon as={RiGithubLine} fontSize='xl' />}
                          _groupHover={{
                            color: colorMode === 'dark' ? 'teal.500' : 'blue.500',
                          }}
                        />
                      </Flex>
                    </Flex>
                  </Flex>
                ))}
              </Fade>
            </Grid>
            <Flex alignSelf='center' mt={8}>
              <Fade cascade triggerOnce duration={200}>
                <Button
                  as='a'
                  target='_blank'
                  href='https://github.com/nathanssantos?tab=repositories'
                  variant='outline'
                  color={colorMode === 'dark' ? 'teal.500' : 'blue.500'}
                  borderColor={colorMode === 'dark' ? 'teal.500' : 'blue.500'}
                >
                  {t('view-more', { ns: 'common' })}
                </Button>
              </Fade>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Projects;
