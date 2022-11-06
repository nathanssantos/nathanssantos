const tag = {
  defaultProps: {
    variant: 'primary',
  },
  variants: {
    primary: {
      container: {
        textTransform: 'uppercase',
        fontSize: 'xs',
        color: 'blue.500',
        bg: 'blue.50',
        fontWeight: 'semibold',
      },
      _disabled: {
        cotainer: {
          color: 'gray.600',
          bg: 'gray.50',
        },
      },
    },
  },
};

export default tag;
