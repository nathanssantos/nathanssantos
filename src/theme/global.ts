import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

const global = (props: StyleFunctionProps) => ({
  html: {
    scrollBehavior: 'smooth',
  },
  body: {
    bg: mode('#fefefe', '#222')(props),
    fontFamily: `'Inter', sans-serif`,
  },
});

export default global;
