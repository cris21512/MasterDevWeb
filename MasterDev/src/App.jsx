import { useState } from 'react'
import './App.css'
import Header from './Views/Header/Header'
import About from './Views/About/About'
import ToolsAndFramework from './Views/ToolsAndFreamwork/ToolsAndFreamwork'
import Projects from './Views/Projects/Projects'
import Certificados from './Views/Certificados/Certificados'

function App() {
  return (
    <>
    <Header />
    <About />
    <ToolsAndFramework />
    <Projects />
    <Certificados />
    </>
  )
}

export default App
