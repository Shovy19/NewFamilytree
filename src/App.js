import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import Welcome from "./pages/Welcome";
import About from "./pages/About";
import Family from "./pages/Family";

//import Welcome from "./pages/Welcome";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} /> 
          <Route path="home" element={<Home />} /> 
          <Route path="about" element={<About />} /> 
          <Route path="family" element={<Family />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;