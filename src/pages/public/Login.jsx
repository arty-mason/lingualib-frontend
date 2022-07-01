import React from "react";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import GoogleIcon from "@mui/icons-material/Google";

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 400,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "teal" };
  const btnStyle = { margin: "8px 0px" };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography
            component="h2"
            variant="h4"
            sx={{
              paddingTop: "15px",
              maginBottom: "15px",
            }}
          >
            Authorize at LinguaLib
          </Typography>
        </Grid>
        <TextField
          label="Username"
          placeholder="Enter username"
          fullWidth
          required
          sx={{
            marginBottom: "10px",
            marginTop: "10px",
          }}
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
          autocomplete="off"
        />
        <FormControlLabel control={<Checkbox />} label="Remember me" />
        <Button
          type="submit"
          color="primary"
          fullWidth
          variant="contained"
          style={btnStyle}
          // onclick={}
        >
          SIGN IN
        </Button>
        <Button>
          <GoogleIcon
            sx={{
              color: "#bd4313",
            }}
          />
          <Typography marginLeft="10px" color="#bd4313">
            Sign in with Google
          </Typography>
        </Button>
        <Box
          sx={{
            marginTop: "200px",
          }}
        >
          <Typography margin="10px 0px">
            <Link href="#">Forgot your password?</Link>
          </Typography>
          <Typography margin="10px 0px">
            Do you have an account?
            <Link href="#" marginLeft="5px">
              Sign Up
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Login;
