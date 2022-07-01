import React from "react";
import { Box, Card, Grid, Paper, Typography } from "@mui/material";
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
        <Grid marginLeft={1}>
          <Paper
            elevation={15}
            sx={{
              height: "100vh",
              width: "99vw",
            }}
          >
            <Box width="55vw">
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  marginBottom: "10px",
                }}
              >
                Getting started
              </Typography>
              <Typography variant="h5" component="h6">
                Here's a quick video demonstration of the learning platform so
                you could realize its potential!
              </Typography>
            </Box>
            <Card>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/MEOn5GX_-hU"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Card>
          </Paper>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
