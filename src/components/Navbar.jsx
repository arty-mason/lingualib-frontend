import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Popover from "./Popover";
import langChoices from "../services/lang-choices";
///Importing supported language list

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
          <Button color="inherit" component={Link} to="/courses">
            Courses
          </Button>
          <Button color="inherit" component={Link} to="/pricing">
            Pricing
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/review">
            Reviews
          </Button>
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
          <Button color="inherit">
            <Popover>
              {langChoices.map((lang) => {
                ///Iterating through language array using .map function
                return (
                  <Button key={lang.id}>
                    {/* Rendering each language in a button, using id as a key */}
                    {lang.name}
                    {/* Rendering the language name in each button */}
                  </Button>
                );
              })}
            </Popover>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
