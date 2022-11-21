import { Box, Button, Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

type MenuProps = {
  vertical?: boolean;
};

const Menu = ({ vertical = false }: MenuProps) => {
  const { t } = useTranslation('header');

  return (
    <Box as='nav' fontFamily='Roboto Mono'>
      <Flex as='ul' direction={vertical ? 'column' : 'row'} listStyleType='none' gap={2}>
        <li>
          <Button size='sm' variant='ghost' fontWeight={500}>
            {t('about')}
          </Button>
        </li>
        <li>
          <Button size='sm' variant='ghost' fontWeight={500}>
            {t('experience')}
          </Button>
        </li>
        <li>
          <Button size='sm' variant='ghost' fontWeight={500}>
            {t('projects')}
          </Button>
        </li>
        <li>
          <Button size='sm' variant='ghost' fontWeight={500}>
            {t('contact')}
          </Button>
        </li>
        <li>
          <Button size='sm' variant='ghost' fontWeight={500}>
            {t('resume')}
          </Button>
        </li>
      </Flex>
    </Box>
  );
};

export default Menu;
