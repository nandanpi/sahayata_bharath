import React from "react";
import Navbar from "./components/navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home.jsx";
import Lsche from "./components/lsche.jsx";
import Nsche from "./components/nsche.jsx";
import About from "./components/about.jsx";
function App() {
  return(
  <> 
    
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/lsche" element={<Lsche />}/>
      <Route exact path="/nsche" element={<Nsche />}/>
      <Route exact path="/about" element={<About />}/>
    </Routes>
  </>
  )
}

export default App;
