import { useState } from 'react'
import './App.css'
import Header from './Views/Header/Header'
import About from './Views/About/About'
import ToolsAndFramework from './Views/ToolsAndFreamwork/ToolsAndFreamwork'
import Projects from './Views/Projects/Projects'

function App() {
  return (
    <>
    <Header />
    <About />
    <ToolsAndFramework />
    <Projects />
    </>
  )
}

export default App
