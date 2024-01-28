import { useState } from "react";
import "./App.css";
import MapVgi from "./components/MapVgi";
import NavBarOne from "./components/NavBarOne";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

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
      {/* <Route path='/about' element={<Footer/>} /> */}

    </Routes>
    <Footer />
    </>
  );
}

export default App;
