import { Container, Flex, Text, useColorMode } from '@chakra-ui/react';
import { ReactElement } from 'react';

type SectionHeaderProps = {
  children: ReactElement | ReactElement[] | string;
  center?: boolean;
};

const SectionHeader = ({ children, center = false }: SectionHeaderProps) => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      align='center'
      gap={4}
      fontWeight={500}
      fontSize={{ base: 'xl', md: '2xl' }}
      fontFamily='Roboto Mono'
      color={colorMode === 'dark' ? 'teal.500' : 'blue.500'}
      _after={{
        content: `""`,
        h: '0.063rem',
        flex: 1,
        mt: 1,
        bg: `linear-gradient(to right, transparent, ${
          colorMode === 'dark' ? '#cbcbcb' : '#8b8b8b'
        })`,
      }}
      _before={
        center
          ? {
              content: `""`,
              h: '0.063rem',
              flex: 1,
              mt: 1,
              bg: `linear-gradient(to left, transparent, ${
                colorMode === 'dark' ? '#cbcbcb' : '#8b8b8b'
              })`,
            }
          : undefined
      }
    >
      {children}
    </Flex>
  );
};

export default SectionHeader;
