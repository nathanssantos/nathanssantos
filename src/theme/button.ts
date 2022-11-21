const button = {
  defaultProps: {
    variant: 'primary',
    fontWeight: 400,
  },
  sizes: {
    md: {
      fontSize: '0.813rem',
      lineHeight: '1.25rem',
      px: 4,
      py: '0.625rem',
      h: 'initial',
    },
  },
  variants: {
    primary: {
      borderRadius: '0.25rem',
      bg: 'blue.500',
      color: '#fff',
      _hover: {
        bg: 'blue.600',
      },
      _active: {
        bg: 'blue.400',
        color: '#fff',
      },
      _disabled: {
        opacity: 1,
        bg: 'gray.300',
        color: 'gray.600',
        pointerEvents: 'none',
      },
      _loading: {
        bg: 'blue.50',
        color: 'blue.500',
      },
    },
    menu: {
      borderRadius: '0.25rem',
      bg: 'blue.500',
      color: '#fff',
      _hover: {
        bg: 'blue.600',
      },
      _active: {
        bg: 'blue.400',
        color: '#fff',
      },
      _disabled: {
        opacity: 1,
        bg: 'gray.300',
        color: 'gray.600',
        pointerEvents: 'none',
      },
      _loading: {
        bg: 'blue.50',
        color: 'blue.500',
      },
    },
  },
};

export default button;
