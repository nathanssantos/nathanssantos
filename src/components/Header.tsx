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

  const handleChangeLanguage = (locale: 'en' | 'pt') => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale });
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
          <ChakraMenu>
            <Tooltip hasArrow label={t('select-language')} offset={[0, 16]}>
              <MenuButton
                as={Button}
                variant='ghost'
                leftIcon={<Icon as={RiTranslate} w={4} h={4} />}
                size='sm'
                fontWeight={400}
                color={colorMode === 'dark' ? 'teal.500' : 'blue.500'}
              >
                {router.locale?.toUpperCase()}
              </MenuButton>
            </Tooltip>
            <MenuList
              py={2}
              borderWidth={0}
              minW={0}
              boxShadow='0px 8px 20px -2px rgba(0, 0, 0, 0.08)'
            >
              <MenuItem px={4} fontSize='.75rem' onClick={() => handleChangeLanguage('en')}>
                English
              </MenuItem>
              <MenuItem px={4} fontSize='.75rem' onClick={() => handleChangeLanguage('pt')}>
                Português
              </MenuItem>
            </MenuList>
          </ChakraMenu>
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
