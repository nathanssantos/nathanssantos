import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

const global = (props: StyleFunctionProps) => ({
  html: {
    scrollBehavior: 'smooth',
  },
  body: {
    bg: mode('#eee', '#222')(props),
    fontWeight: 'thin',
  },
});

export default global;
