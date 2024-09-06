import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Home from "./Screens/Home";
import About from "./Screens/About";
import Gallery from "./Screens/Gallery";
import Help from "./Screens/Help";
import Contact from "./Screens/Contact";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/help" element={<Help />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/medium" element={<Medium />} /> */}
      </Routes>
    </>
  );
}

export default App;
