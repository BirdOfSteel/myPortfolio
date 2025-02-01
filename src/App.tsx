import { useState, useEffect } from 'react'
import './App.css';
import { motion, MotionConfig, useScroll, useTransform } from 'motion/react'
import Hero from './components/Hero'
import { easeIn } from 'motion';

function App() {
  const { scrollYProgress } = useScroll();

  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ['#5a5d7a', '#747fe0']
  )

  return (
    <>
      <motion.div 
        style={{
          scaleX: scrollYProgress,
          originX: 0,
          background: background,
          width: '100%',
          height: '10px',
          position: 'fixed',
          top: 0,
          zIndex: 1
        }}
      />
      
      <Hero />
      <div id='projectsDiv'>
        <div id="projectsHeadingDiv">
          <h2>Projects</h2>
          <div id="projectsHeadingDivUnderline"/>
        

          <MotionConfig
            transition={{
              duration: 1
            }}
          >

            <motion.div className='projectDiv'
              initial={{
                y: '-10px',
                opacity: 0
              }}
              whileInView={{
                y: '0px',
                opacity: 1
              }}
            >
              <img 
                src={'/weatherAppScreenshot.PNG'}
                className='projectImage'  
                />
              <div className='projectImageOverlay'/>
              <div className='projectDescriptionDiv'>
                <motion.h1
                  initial={{
                    y: '-5px',
                    opacity: 0
                  }}
                  whileInView={{
                    y: '0px',
                    opacity: 1
                  }}
                  transition={{
                    ease: easeIn,
                    duration: 0.5
                  }}
                >
                  Weather app
                </motion.h1>
                <motion.p className='projectDivText'
                  initial={{
                    y: '20px',
                    opacity: 0
                  }}
                  whileInView={{
                    y: '0px',
                    opacity: 1
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5
                  }}
                >
                  Weather app that utilises data from Open-Meteo and OpenWeather APIs.
                  Weather data is presented as hourly and daily, with a menu in the top left for unit conversion.
                  Background changes colour depending on the time of day.             
                  <br/>
                  <br/>
                  Written in React and TypeScript.
                </motion.p>

                <div className='projectDivButtonsDiv'> 
                  <button className='projectLiveDemoButton'>
                    Live Demo
                  </button>
                  <button className='projectSourceCodeButton'>
                    Source Code
                  </button>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className='projectDiv'
              initial={{
                y: '-10px',
                opacity: 0
              }}
              whileInView={{
                y: '0px',
                opacity: 1
              }}  
            >
              <img 
                src={'/calculatorAppScreenshot.png'}
                className='projectImage'  
                />
              <div className='projectImageOverlay'/>
              <div className='projectDescriptionDiv'>
                <h1>Calculator</h1>
                <motion.p 
                  className='projectDivText'
                  initial={{
                    y: '20px',
                    opacity: 0
                  }}
                  whileInView={{
                    y: '0px',
                    opacity: 1
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5
                  }}
                >
                  Performs mostly simple calculations, but allows for roots and powers.
                  Uses 'if' statements to prevent certain symbols from being used consecutively.
                  <br/>
                  <br/>
                  Dropdown menu at the top for a selection of styles.      
                  <br/>
                  <br/>
                  Written in React.
                </motion.p>
                
                <div className='projectDivButtonsDiv'> 
                  <button className='projectLiveDemoButton'>
                    Live Demo
                  </button>
                  <button className='projectSourceCodeButton'>
                    Source Code
                  </button>
                </div>
              </div>
            </motion.div>
            <motion.div className='projectDiv'
              initial={{
                y: '-10px',
                opacity: 0
              }}
              whileInView={{
                y: '0px',
                opacity: 1
              }}
            >
              <img 
                src={'/triviaAppScreenshot.PNG'}
                className='projectImage'  
                />
              <div className='projectImageOverlay'/>

              <div className='projectDescriptionDiv'>
                <h1>Trivia</h1>
                <motion.p className='projectDivText'
                  initial={{
                    y: '20px',
                    opacity: 0
                  }}
                  whileInView={{
                    y: '0px',
                    opacity: 1
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5
                  }}
                >
                  One of my first projects! A simple trivia app that makes use of the the OpenTriviaDB API.
                  Works as you expect it would, but the start menu also lists a few dropdown menus to customise
                  gameplay options.
                  <br/>
                  <br/>
                  Written in React.
                </motion.p>

                <div className='projectDivButtonsDiv'> 
                  <button className='projectLiveDemoButton'>
                    Live Demo
                  </button>
                  <button className='projectSourceCodeButton'>
                    Source Code
                  </button>
                </div>
              </div>
            </motion.div>

          </MotionConfig>
        
        </div>
      </div>
    </>
  )
}

export default App
