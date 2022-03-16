import React ,{useState, useEffect} from 'react';
import { Route, Routes} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/index";
import About from "./pages/about";
import Menu from "./pages/menu";
import Dropdown from "./components/Dropdown";

function App() {
  const [isOpen, setIsOpen] =useState(false);
  const toggle = () =>{
    setIsOpen(!isOpen);
  };
useEffect(()=> {
  const hideMenu =() =>{
    if(window.innerWidth > 768 && isOpen){
      setIsOpen(false);
      console.log("i resize");
    }

  }
  window.addEventListener('resize', hideMenu)
  return() =>{
    window.removeEventListener('resize', hideMenu);
  }
}); 

  return (
    <>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/menu" element={<Menu/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
