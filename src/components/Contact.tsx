import {
  Button,
  Container,
  Flex,
  Icon,
  IconButton,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { Fade } from 'react-awesome-reveal';
import { RiGithubLine, RiInstagramLine, RiLinkedinLine, RiMailLine } from 'react-icons/ri';

const Contact = () => {
  const { t } = useTranslation('contact');
  const { colorMode } = useColorMode();

  return (
    <Flex id='contact'>
      <Container
        w='full'
        maxW='container.xl'
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        px={{ base: 4, md: 24 }}
        pt={24}
        pb={24}
        gap={8}
      >
        <Fade cascade triggerOnce duration={200}>
          <Flex
            align='center'
            gap={4}
            fontSize={{ base: '2rem', lg: '2.5rem' }}
            color={colorMode === 'dark' ? 'teal.500' : 'blue.500'}
            textTransform='uppercase'
            fontFamily='Roboto Mono'
          >
            {t('title')}
          </Flex>
          <Flex direction='column' align='center' justify='center' gap={12}>
            <Flex direction='column'>
              <Text textAlign='center' fontSize={{ base: 'sm', md: 'md' }}>
                {t('description')}
              </Text>
              <Text textAlign='center' fontSize={{ base: 'sm', md: 'md' }}>
                {t('description-2')}
              </Text>
            </Flex>

            <Flex align='center' gap={4}>
              <IconButton
                as='a'
                aria-label='Github'
                variant='ghost'
                color={colorMode === 'dark' ? 'teal.500' : 'blue.500'}
                href='https://github.com/nathanssantos/'
                target='_blank'
              >
                <Icon as={RiGithubLine} fontSize='1.5rem' />
              </IconButton>
              <IconButton
                as='a'
                aria-label='Instagram'
                variant='ghost'
                color={colorMode === 'dark' ? 'teal.500' : 'blue.500'}
                href='https://www.instagram.com/nathanssantosdev/'
                target='_blank'
              >
                <Icon as={RiInstagramLine} fontSize='1.5rem' />
              </IconButton>
              <IconButton
                as='a'
                aria-label='LinkedIn'
                variant='ghost'
                color={colorMode === 'dark' ? 'teal.500' : 'blue.500'}
                href='https://www.linkedin.com/in/nathan-s-santos-4b2637163/'
                target='_blank'
              >
                <Icon as={RiLinkedinLine} fontSize='1.5rem' />
              </IconButton>
              <IconButton
                as='a'
                aria-label='E-mail'
                variant='ghost'
                color={colorMode === 'dark' ? 'teal.500' : 'blue.500'}
                href='mailto:nathansilvasantos@gmail.com'
              >
                <Icon as={RiMailLine} fontSize='1.5rem' />
              </IconButton>
            </Flex>
            <Button
              as='a'
              href='mailto:nathansilvasantos@gmail.com'
              variant='outline'
              color={colorMode === 'dark' ? 'teal.500' : 'blue.500'}
              borderColor={colorMode === 'dark' ? 'teal.500' : 'blue.500'}
              fontFamily='Roboto Mono'
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
