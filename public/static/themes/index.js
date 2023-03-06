import { createTheme } from "@mui/material/styles";
import MuiButton from "@/public/static/themes/overrides/MuiButton";
// import MuiTextField from "@/public/static/themes/overrides/MuiTextField";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1B3764",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#FFCA42",
      contrastText: "#1B3764",
    },
    gray: {
      main: "#F6F8FC",
      contrastText: "#333333",
      dark: "#eaeaea",
    },
    white: {
      main: "#ffffff",
      contrastText: "#1B3764"
    }
  },
  typography: {
    fontFamily: 'Cardo, sans-serif',
    fontWeightSemibold: 600,
    fontWeight: 400,
    fontSize: 15,
    h1: {
      fontWeight: 700,
      fontSize: 65,
    },
    h2: {
      fontWeight: 700,
      fontSize: 55,
    },
    h3: {
      fontWeight: 700,
      fontSize: 45,
    },
    h4: {
      fontWeight: 700,
      fontSize: 32,
    },
    h5: {
      fontWeight: 700,
      fontSize: 24,
    },
    h6: {
      fontWeight: 700,
      fontSize: 22,
    },
    body1: {
      fontWeight: 400,
      fontSize: 12,
    },
    body2: {
      fontWeight: 400,
      fontSize: 13,
    },
    body3: {
      fontWeight: 400,
      fontSize: 14,
    },
    body4: {
      fontWeight: 400,
      fontSize: 16,
    },
    body5: {
      fontWeight: 400,
      fontSize: 16,
    },
    bodyLight: {
      fontWeight: 300,
      fontSize: 15,
    },
    title: {
      fontWeight: 600,
      fontSize: 15,
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: 14,
    },
    subtitle2: {
      fontWeight: 600,
      fontSize: 13,
    },
    subtitle3: {
      fontWeight: 500,
      fontSize: 15,
    },
    strong: {
      fontWeight: 700,
      fontSize: 15,
    },
  },
  components: {
    MuiButton,
  }
});
export default theme;