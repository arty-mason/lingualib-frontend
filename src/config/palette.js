import { createTheme } from "@mui/material";
// Importing the createTheme feature from material UI

export const theme = createTheme({
  // K.I.S.S. - Creating a reusable theme palette
  palette: {
    primary: {
      main: "#009688",
      light: "#33ab9f",
      dark: "#00695f",
    },

    secondary: {
      main: "#81d4fa",
      light: "#9adcfb",
      dark: "#5a94af",
    },
  }
})