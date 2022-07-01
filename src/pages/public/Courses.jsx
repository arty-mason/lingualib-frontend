import React from "react";
import coursesList from "../../services/courses-list";
import { Box, Paper, Typography } from "@mui/material";
import styled from "@emotion/styled";

const TextField = styled(Typography)({
  marginBottom: "5px",
  marginTop: "5px",
  textAlign: "start",
});

const Courses = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        "& > :not(style)": {
          m: 3,
          width: 500,
          height: 400,
        },
      }}
    >
      {coursesList.map((course) => {
        return (
          <Box key={course.id}>
            <Paper elevation={3}>
              <TextField variant="h3" component="h1">
                {course.name}
              </TextField>
              <img
                src={course.coursePhoto}
                alt="Course"
                width="400"
                height="400"
              />
              <TextField variant="h4" component="h2">
                Length: {course.length}
              </TextField>
              <TextField variant="h5" component="h3">
                {course.description}
              </TextField>
              <img
                src={course.materialsImg}
                alt="Course"
                width="400"
                height="400"
              />
              <TextField>Tutor: {course.tutors}</TextField>
              <img
                src={course.tutorPhoto}
                alt="Course"
                width="400"
                height="300"
              />
            </Paper>
          </Box>
        );
      })}
    </Box>
  );
};

export default Courses;
