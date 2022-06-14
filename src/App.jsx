import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import { theme } from "./config/palette";
import { ThemeProvider } from "@mui/material";
import { Routes, Route, Link, Navigate } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Navigate to="home" replace={true} />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
