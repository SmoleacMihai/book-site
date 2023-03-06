const MuiButton = {
  defaultProps: {
    disableElevation: true,
    variant: 'contained',
    color: 'secondary',
  },
  styleOverrides: {
    root: {
      textTransform: 'none',
      fontSize: 19,
      fontWeight: 700,
      paddingInline: 56,
      borderRadius: 0,
      border: "1px solid #FFCA42",
      ":hover": {
        backgroundColor:"white",
        outline:"1px solid #FFCA42"
      }
    }
  },
  variants: [
    {
      props: {
        size: 'big',
      },
      style: {
        paddingInline: 96,
      },
    },

  ],
};

export default MuiButton;