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
        
          <div className='projectDiv'>
            <img 
              src={'/weatherAppScreenshot.PNG'}
              className='projectImage'  
            />
            <div className='projectImageOverlay'/>
            <p className='projectDivText'>
              Weather app that utilises data from Open-Meteo and OpenWeather APIs.
              <br/>
              <br/>
              Weather data is presented as hourly and daily, with a menu in the top left for unit conversion.
              The background changes colour depending on the time of day.             
              <br/>
              <br/>
              Written in React and TypeScript.
            </p>
          </div>
          <div className='projectDiv'>
            <img 
              src={'/calculatorAppScreenshot.png'}
              className='projectImage'  
            />
            <div className='projectImageOverlay'/>
            <p className='projectDivText'>
              Works by collecting the inputs as a string, then allowing JavaScript to carry out the calculation.
              The app includes checks to prevent symbols like roots from being used one after the other.
              At the top is a style menu that can be hidden by clicking the attached button.      
              <br/>
              <br/>
              Written in React.
            </p>
          </div>
          <div className='projectDiv'>
            <img 
              src={'/triviaAppScreenshot.PNG'}
              className='projectImage'  
            />
            <div className='projectImageOverlay'/>
            <p className='projectDivText'>
              One of my first projects! A simple trivia app that makes use of the the OpenTriviaDB API.
              Works as you expect it would, but the start menu also lists a few dropdown menus to customise
              gameplay options.

              Written in JavaScript.
            </p>
          </div>
        
        </div>
      </div>
    </>
  )
}

export default App
