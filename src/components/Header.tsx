import {
  Button,
  Flex,
  Icon,
  IconButton,
  Menu as ChakraMenu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Tooltip,
  useColorMode,
} from '@chakra-ui/react';
import { observer } from 'mobx-react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { RiMoonLine, RiSunLine, RiTranslate } from 'react-icons/ri';
import { useStore } from 'src/hooks';
import { Drawer, Menu } from '.';

const Header = () => {
  const { t } = useTranslation('header');
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();
  const { uiStore } = useStore();

  const { isOpen } = uiStore.logo;

  const handleToggleLanguage = () => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: router.locale === 'pt' ? 'en' : 'pt' });
  };

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Flex
      as='header'
      position='sticky'
      top={0}
      align='center'
      justify='space-between'
      p={4}
      gap={2}
      bg={colorMode === 'dark' ? 'rgba(34, 34, 34, 0.75)' : 'rgba(240, 240, 240, 0.75)'}
      backdropFilter='blur(0.313rem)'
      zIndex={1}
    >
      <Flex align='center'>
        <Flex align='center'>
          <Flex
            ml={isOpen ? 0 : '-2.625rem'}
            mr={isOpen ? 6 : 0}
            opacity={isOpen ? 1 : 0}
            overflow='hidden'
            transition='.2s ease-in-out'
            cursor='pointer'
            onClick={scrollTop}
          >
            <Text
              fontSize='4xl'
              fontWeight='bold'
              lineHeight={1}
              background={
                colorMode === 'dark'
                  ? 'linear-gradient( 120deg, var(--chakra-colors-teal-500) 30%, var(--chakra-colors-blue-500) 60%)'
                  : 'linear-gradient( 120deg, var(--chakra-colors-blue-500) 40%, var(--chakra-colors-teal-500) 80%)'
              }
              sx={{
                backgroundClip: 'text',
                textFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              N
            </Text>
          </Flex>
          <Flex display={{ md: 'none' }}>
            <Drawer />
          </Flex>
        </Flex>
        <Flex display={{ base: 'none', md: 'flex' }}>
          <Menu />
        </Flex>
      </Flex>
      <Flex align='center' gap={2}>
        <Fade cascade triggerOnce duration={200} delay={1200}>
          <Tooltip hasArrow label={t('change-language')} offset={[0, 16]}>
            <Button
              variant='ghost'
              leftIcon={<Icon as={RiTranslate} w={4} h={4} />}
              size='sm'
              fontWeight={400}
              color={colorMode === 'dark' ? 'teal.500' : 'blue.500'}
              overflow='hidden'
              alignItems='flex-start'
              role='group'
              onClick={handleToggleLanguage}
            >
              <Flex
                direction='column'
                transform={`translateY(${router?.locale === 'pt' ? '-50%' : '0'})`}
                transition='0.2s ease'
                _groupHover={{
                  transform: `translateY(${router?.locale === 'en' ? '-50%' : '0'})`,
                }}
              >
                <Flex h={8} align='center'>
                  EN
                </Flex>
                <Flex h={8} align='center'>
                  PT
                </Flex>
              </Flex>
            </Button>
          </Tooltip>
          <Tooltip
            hasArrow
            label={colorMode === 'light' ? t('turn-off-the-light') : t('turn-on-the-light')}
            offset={[0, 16]}
          >
            <IconButton
              variant='ghost'
              aria-label={
                colorMode === 'light' ? t('turn-off-the-light') : t('turn-on-the-light')
              }
              size='sm'
              color={colorMode === 'dark' ? 'teal.500' : 'blue.500'}
              icon={
                colorMode === 'light' ? (
                  <Icon as={RiMoonLine} w={4} h={4} />
                ) : (
                  <Icon as={RiSunLine} w={4} h={4} />
                )
              }
              onClick={toggleColorMode}
            />
          </Tooltip>
        </Fade>
      </Flex>
    </Flex>
  );
};

export default observer(Header);
