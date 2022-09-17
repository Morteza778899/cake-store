import { createTheme, responsiveFontSizes } from "@mui/material";

var themeColor = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#202c45",
    },
    secondary: {
      main: "#f2184f",
    },
    customwhite: {
      main: "#ffffff",
    },
  },
  typography: {
    fontFamily: "IranYekan",
    allVariants: {
      direction: "rtl",
    },
    subtitle2: {
      fontSize: 12,
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& p": {
            textAlign: "right",
          },
        },
      },
    },
  },
});
themeColor = responsiveFontSizes(themeColor)
export const theme = createTheme(themeColor, {
  components: {
    MuiStack: {
      defaultProps: {
        direction: "row",
      },
    },
    MuiIconButton: {
      defaultProps: {
        color: "customwhite",
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          "&:hover": {
            color: theme.palette.primary.dark,
            background: "none",
          },
        }),
      },
    },
    MuiLink: {
      defaultProps: {
        fontFamily: "IranYekan",
        underline: "none",
      },
    },
  },
});
