import {
  Button,
  Flex,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tooltip,
  useColorMode,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { RiTranslate, RiMoonLine, RiSunLine } from 'react-icons/ri';

const Header = () => {
  const { t } = useTranslation('header');
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();

  const handleChangeLanguage = (locale: 'en' | 'pt') => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale });
  };

  return (
    <Flex as='header' align='center' justify='space-between' p={4} gap={2}>
      <nav>
        <Flex as='ul' listStyleType='none' gap={2}>
          <li>
            <Button size='sm' variant='ghost'>
              {t('about')}
            </Button>
          </li>
          <li>
            <Button size='sm' variant='ghost'>
              {t('experience')}
            </Button>
          </li>
          <li>
            <Button size='sm' variant='ghost'>
              {t('projects')}
            </Button>
          </li>
          <li>
            <Button size='sm' variant='ghost'>
              {t('contact')}
            </Button>
          </li>
          <li>
            <Button size='sm' variant='outline'>
              {t('resume')}
            </Button>
          </li>
        </Flex>
      </nav>

      <Flex align='center' gap={2}>
        <Menu>
          <Tooltip hasArrow label={t('select-language')} offset={[0, 16]}>
            <MenuButton
              as={Button}
              variant='ghost'
              leftIcon={<Icon as={RiTranslate} />}
              size='sm'
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
        </Menu>
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
            icon={colorMode === 'light' ? <Icon as={RiMoonLine} /> : <Icon as={RiSunLine} />}
            onClick={toggleColorMode}
          />
        </Tooltip>
      </Flex>
    </Flex>
  );
};

export default Header;
