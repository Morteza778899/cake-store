import { createTheme } from "@mui/material";

const themeColor = createTheme({
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
    fontFamily: "Parastoo",
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
        fontFamily: "Parastoo",
        underline: "none",
      },
    },
  },
});
