import { Box, Button, Flex, useColorMode } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { Fade } from 'react-awesome-reveal';

type MenuProps = {
  vertical?: boolean;
};

const Menu = ({ vertical = false }: MenuProps) => {
  const { t } = useTranslation('header');
  const { colorMode } = useColorMode();

  const menu = [
    {
      id: 'about',
      label: t('about'),
    },
    {
      id: 'experience',
      label: t('experience'),
    },
    {
      id: 'projects',
      label: t('projects'),
    },
    {
      id: 'contact',
      label: t('contact'),
    },
  ];

  return (
    <Box as='nav' fontFamily='Roboto Mono'>
      <Flex as='ul' direction={vertical ? 'column' : 'row'} listStyleType='none' gap={2}>
        <Fade cascade triggerOnce duration={200} delay={500}>
          {menu.map(({ id, label }) => (
            <li key={id}>
              <Button
                as='a'
                href={`#${id}`}
                size='sm'
                variant='ghost'
                fontWeight={500}
                color={colorMode === 'dark' ? 'teal.500' : 'blue.500'}
              >
                {label}
              </Button>
            </li>
          ))}
          {/* <li>
            <Button
              size='sm'
              variant='ghost'
              fontWeight={500}
              color={colorMode === 'dark' ? 'teal.500' : 'blue.500'}
            >
              {t('resume')}
            </Button>
          </li> */}
        </Fade>
      </Flex>
    </Box>
  );
};

export default Menu;
