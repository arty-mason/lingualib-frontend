import { theme } from "./config/palette";
import { ThemeProvider } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";

import NavBar from "./components/Navbar";
import RequireAuth from "./components/RequireAuth";

import Home from "./pages/public/Home";
import About from "./pages/public/About";
import Login from "./pages/public/Login";
import Review from "./pages/public/Review";
import Pricing from "./pages/public/Pricing";
import UserHomePage from "./pages/app/UserHomePage";
import UserProfile from "./pages/app/UserProfile";
import Courses from "./pages/public/Courses";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="about" element={<About />} />
        <Route path="review" element={<Review />} />
        <Route path="login" element={<Login />} />

        <Route
          path="app/home"
          element={
            <RequireAuth>
              <UserHomePage />
            </RequireAuth>
          }
        />
        <Route
          path="app/profile"
          element={
            <RequireAuth>
              <UserProfile />
            </RequireAuth>
          }
        />
        <Route path="*" element={<Navigate to="home" replace={true} />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
