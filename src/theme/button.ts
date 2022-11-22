import { StyleFunctionProps } from '@chakra-ui/react';

const button = {
  defaultProps: {
    fontWeight: 400,
  },
  variants: {
    ghost: ({ colorMode }: StyleFunctionProps) => ({
      _hover: {
        bg: colorMode === 'dark' ? 'var(--chakra-colors-whiteAlpha-200)' : 'gray.200',
      },
    }),
  },
};

export default button;
