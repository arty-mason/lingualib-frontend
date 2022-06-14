import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import LanguageSharpIcon from "@mui/icons-material/LanguageSharp";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { sm: "none", xs: "block" } }}
          >
            <MenuIcon />
            <Typography variant="h6" component="div" marginLeft={1}>
              Menu
            </Typography>
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            width: "100%",
          }}
        >
          <Button color="inherit" component={Link} to="/home">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/pricing">
            Pricing
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About us
          </Button>
          <Button color="inherit" component={Link} to="/review">
            Reviews
          </Button>
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
          <Button color="inherit">
            <LanguageSharpIcon />
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
