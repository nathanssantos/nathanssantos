import { Button, Container, Flex, Text, useColorMode } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { Fade } from 'react-awesome-reveal';

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
