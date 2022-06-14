import React from "react";
import { Box, Typography } from "@mui/material";
import MenuBookSharpIcon from "@mui/icons-material/MenuBookSharp";
import styled from "@emotion/styled";

const Span = styled("span")({
  display: { sm: "none", md: "block" },
});

const Home = () => {
  return (
    <Box>
      <Box height="100vh" width="100vw">
        <Typography
          variant="h6"
          component="div"
          paddingTop={4}
          sx={{
            flexGrow: 1,
            textAlign: "center",
          }}
        >
          Welcome to LinguaLib&nbsp;
          {/* Inserting span & spacebar to separate the desktop & mobile version of the header text*/}
          <Span>
            - the best online learning platform for students and teachers alike
          </Span>
          !
          <MenuBookSharpIcon sx={{ ml: 1 }} />
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
