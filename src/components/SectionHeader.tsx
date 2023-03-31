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
      fontSize={{ base: '1.75rem', lg: '4rem' }}
      color={colorMode === 'dark' ? 'teal.500' : 'blue.500'}
      sx={{ writingMode: 'vertical-lr' }}
      transform='rotate(180deg)'
      textTransform='uppercase'
      fontFamily='Roboto Mono'
    >
      {children}
    </Flex>
  );
};

export default SectionHeader;
