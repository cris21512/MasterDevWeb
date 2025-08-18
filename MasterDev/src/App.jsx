import { useState } from 'react'
import './App.css'

import Header from './Views/Header/Header';
import About from './Views/About/About';
import ToolsAndFramework from './Views/ToolsAndFreamwork/ToolsAndFreamwork';
import Projects from './Views/Projects/Projects';
import Certificados from './Views/Certificados/Certificados';
import Footer from './Views/Footer/Footer';
import Preloader from './Components/Preloader/Preloader';
import CursorTrail from './Components/Cursor/CursorTrail';

function App() {
  return (
    <>
    <CursorTrail />
    <Header />
    <About />
    <ToolsAndFramework />
    <Projects />
    <Certificados />
    <Footer />
    </>
  )
}

export default App
