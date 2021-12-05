import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto",
    fontSize: 16,
  },
  palette: {
    primary: {
      main: "#8e51b2",
      light: "#a184a6",
    },
    secondary: {
      main: "#13296d",
    },
  },
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          height: "3px",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: "15px",
        },
      },
    },
  },
});

export default theme;
