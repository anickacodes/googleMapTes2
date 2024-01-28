import { useState } from "react";
import "./App.css";
import MapVgi from "./components/MapVgi";
import NavBarOne from "./components/NavBarOne";
import About from "./components/About";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  

const container = {
  margin: '1rem',
  textAlign: 'center'
}

  return (
    <>
    <NavBarOne />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/map' element={<MapVgi/>} />
      <Route path='/about' element={<About/>} />

    </Routes>
    </>
  );
}

export default App;
