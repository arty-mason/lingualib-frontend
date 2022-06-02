import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuBookSharpIcon from "@mui/icons-material/MenuBookSharp";
import { theme } from "./palette";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" backgroundColor={theme.palette.primary.main}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            // sx={{ display: { md: "none", xs: "flex" } }}
          >
            <MenuIcon />
            <Typography variant="h6" component="div" marginLeft={1}>
              Menu
            </Typography>
          </IconButton>
          <Typography
            variant="h6"
            d
            component="div"
            marginRight={4}
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            Welcome to LinguaLib - the best online learning platform for
            students and teachers alike!
            <MenuBookSharpIcon sx={{ ml: 1 }} />
          </Typography>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
