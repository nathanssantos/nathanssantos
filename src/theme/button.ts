const button = {
  baseStyle: {
    fontWeight: 500,
  },
  defaultProps: {
    variant: 'primary',
  },
  sizes: {
    xxs: {
      fontSize: '0.75rem',
      lineHeight: '1.125rem',
      px: 2,
      py: '0.188rem',
      h: 'initial',
    },
    xs: {
      fontSize: '0.813rem',
      lineHeight: '1.25rem',
      px: 4,
      py: '0.375rem',
      h: 'initial',
    },
    sm: {
      fontSize: '0.813rem',
      lineHeight: '1.25rem',
      px: 4,
      py: 2,
      h: 'initial',
    },
    md: {
      fontSize: '0.813rem',
      lineHeight: '1.25rem',
      px: 4,
      py: '0.625rem',
      h: 'initial',
    },
    lg: {
      fontSize: '0.813rem',
      lineHeight: '1.25rem',
      px: 4,
      py: 3,
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
    secondary: {
      borderRadius: '0.25rem',
      bg: 'blue.50',
      color: 'blue.500',
      _hover: {
        bg: 'blue.500',
        color: '#fff',
      },
      _active: {
        bg: 'blue.600',
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
    gray: {
      borderRadius: '0.25rem',
      bg: 'gray.300',
      color: 'gray.1000',
      _hover: {
        bg: 'gray.400',
      },
      _active: {
        bg: 'gray.200',
        color: 'gray.1000',
      },
      _disabled: {
        opacity: 1,
        bg: 'gray.300',
        color: 'gray.600',
        pointerEvents: 'none',
      },
      _loading: {
        bg: 'gray.200',
        color: 'gray.900',
      },
    },
    bordered: {
      borderWidth: 'thin',
      borderColor: 'blue.500',
      borderRadius: '0.25rem',
      bg: 'transparent',
      color: 'blue.500',
      _hover: {
        bg: 'blue.500',
        color: '#fff',
        borderColor: 'blue.500',
      },
      _active: {
        bg: 'blue.600',
        color: '#fff',
        borderColor: 'blue.600',
      },
      _disabled: {
        opacity: 1,
        bg: 'transparent',
        color: 'gray.600',
        borderColor: 'gray.300',
        pointerEvents: 'none',
      },
      _loading: {
        color: 'blue.500',
        borderColor: 'blue.50',
      },
    },
    'bordered-gray': {
      borderWidth: 'thin',
      borderColor: 'gray.800',
      borderRadius: '0.25rem',
      bg: 'transparent',
      color: 'gray.1000',
      _hover: {
        bg: 'gray.900',
        color: '#fff',
        borderColor: 'gray.900',
      },
      _active: {
        bg: 'gray.1000',
        color: '#fff',
        borderColor: 'gray.1000',
      },
      _disabled: {
        opacity: 1,
        color: 'gray.600',
        borderColor: 'gray.300',
        pointerEvents: 'none',
      },
      _loading: {
        color: 'gray.900',
        borderColor: 'gray.300',
      },
    },
    text: {
      borderRadius: '0.25rem',
      bg: 'transparent',
      color: 'blue.500',
      _hover: {
        color: 'blue.600',
      },
      _active: {
        color: 'blue.400',
      },
      _disabled: {
        opacity: 1,
        color: 'gray.600',
        pointerEvents: 'none',
      },
      _loading: {
        color: 'blue.500',
      },
    },
    red: {
      borderRadius: '0.25rem',
      bg: 'red.400',
      color: '#fff',
      _hover: {
        bg: 'red.500',
      },
      _active: {
        bg: 'red.300',
      },
      _disabled: {
        opacity: 1,
        bg: 'gray.300',
        color: 'gray.600',
        pointerEvents: 'none',
      },
      _loading: {
        bg: 'red.100',
        color: 'red.400',
      },
    },
    green: {
      borderRadius: '0.25rem',
      bg: 'green.100',
      color: 'green.500',
      _hover: {
        bg: 'green.300',
        color: '#fff',
      },
      _active: {
        bg: 'green.400',
      },
      _disabled: {
        opacity: 1,
        bg: 'gray.300',
        color: 'gray.600',
        pointerEvents: 'none',
      },
      _loading: {
        bg: 'green.100',
        color: 'green.400',
      },
    },
    'icon-primary': {
      bg: '#fff',
      color: 'blue.500',
      borderRadius: '0.25rem',
      boxShadow: '0 0.25rem 0.5rem -0.125rem rgba(0, 0, 0, 0.08);',
      minWidth: '1.5rem',
      minHeight: '1.5rem',
      _hover: {
        color: '#fff',
        bg: 'blue.500',
      },
      _active: {
        bg: 'blue.400',
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
    'icon-secondary': {
      bg: '#fff',
      color: 'gray.900',
      borderRadius: '0.25rem',
      boxShadow: '0 0.25rem 0.5rem -0.125rem rgba(0, 0, 0, 0.08);',
      minWidth: '1.75rem',
      minHeight: '1.75rem',
      _hover: {
        color: '#fff',
        bg: 'blue.500',
      },
      _active: {
        bg: 'blue.400',
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
    'list-item-action': {
      bg: '#fff',
      color: 'blue.500',
      borderRadius: '0.25rem',
      minWidth: '1.75rem',
      minHeight: '1.75rem',
      _hover: {
        color: '#fff',
        bg: 'blue.500',
      },
      _active: {
        bg: 'blue.400',
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
