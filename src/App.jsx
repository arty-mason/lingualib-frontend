import { theme } from "./config/palette";
import { ThemeProvider } from "@mui/material";
import { Routes, Route, Link, Navigate } from "react-router-dom";

import NavBar from "./components/Navbar";
import RequireAuth from "./components/RequireAuth";

import Home from "./pages/public/Home";
import About from "./pages/public/About";
import Login from "./pages/public/Login";
import Review from "./pages/public/Review";
import Pricing from "./pages/public/Pricing";
import UserHomePage from "./pages/app/Home";
import UserProfile from "./pages/app/Profile";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="review" element={<Review />} />
        <Route path="pricing" element={<Pricing />} />
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
