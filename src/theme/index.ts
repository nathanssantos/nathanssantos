import { extendTheme } from '@chakra-ui/react';

import Button from './button';
import colors from './colors';
import fonts from './fonts';
import global from './global';
import Tag from './tag';
import Tooltip from './tooltip';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  styles: {
    global,
  },
  colors,
  fonts,
  components: {
    Button,
    Tag,
    Tooltip,
  },
});

export default theme;
