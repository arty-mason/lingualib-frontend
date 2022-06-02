import { createTheme } from "@mui/material";
// Importing the createTheme feature from material UI

export const theme = createTheme({
  // K.I.S.S. - Creating a reusable theme palette
  palette: {
    primary: {
      main: "#3f51b5",
      light: "#5c6bc0",
      dark: "#7986cb",
    },

    secondary: {
      main: "#26a69a",
      light: "#4db6ac",
      dark: "#80cbc4",
    },

    tertiary: {
      main: "#607d8b",
      light: "#78909c",
      dark: "#90a4ae",
    }
  }
})