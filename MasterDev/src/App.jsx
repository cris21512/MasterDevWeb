import { useState } from 'react'
import './App.css'

import Navbar from './Views/Navbar/Navbar';
import About from './Views/About/About';
import Home from './Views/Home/Home';
import ToolsAndFramework from './Views/ToolsAndFreamwork/ToolsAndFreamwork';
import Projects from './Views/Projects/Projects';
import Certificados from './Views/Certificados/Certificados';
import Footer from './Views/Footer/Footer';
import Preloader from './Components/Preloader/Preloader';
import CursorTrail from './Components/Cursor/CursorTrail';

function App() {
  return (
    <>
    <Navbar />
    <CursorTrail />
    <Preloader />
    <Home />
    <About />
    <ToolsAndFramework />
    <Projects />
    <Certificados />
    <Footer />
    </>
  )
}

export default App
