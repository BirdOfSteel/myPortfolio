import { useState, useEffect } from 'react'
import './App.css';
import { motion } from 'motion/react'
import Hero from './components/Hero'


function App() {
  return (
    <>
      <Hero />
      <div id='projectsDiv'>
        <div id="projectsHeadingDiv">
          <h2>Projects</h2>
          <div id="projectsHeadingDivUnderline"/>
        </div>

      </div>
    </>
  )
}

export default App
