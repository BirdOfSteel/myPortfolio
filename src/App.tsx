import './App.css';
import { motion, MotionConfig, useScroll, useTransform, easeIn } from 'motion/react'
import Hero from './components/Hero'

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
                    duration: 0.25,
                    delay: 0.5
                  }}
                >
                  Weather app that utilises data from Open-Meteo and OpenWeather APIs.
                  Data is shown as hourly/daily. The menu in the top left allows for unit conversion.
                  Background changes colour depending on the hour. 100% accessibility friendly.             
                  <br/>
                  <br/>
                  Requires location permission to work.
                </motion.p>

                <div className='projectDivButtonsDiv'> 
                  <a 
                    className='projectLiveDemoButton'
                    href='https://weather-by-amir.netlify.app/'
                  >
                    Live Demo
                  </a>
                  <a 
                    className='projectSourceCodeButton'
                    href='https://github.com/BirdOfSteel/weather-app'
                  >
                    Source Code
                  </a>
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
                    duration: 0.25,
                    delay: 0.5
                  }}
                >
                  Performs mostly simple calculations, but allows for roots and powers.
                  Uses 'if' statements to prevent certain symbols from being used consecutively.
                  Dropdown menu at the top for a selection of styles.
                </motion.p>

                <div className='projectDivButtonsDiv'> 
                  <a 
                    className='projectLiveDemoButton'
                    href='https://calculator-app-amir.netlify.app/'
                  >
                    Live Demo
                  </a>
                  <a 
                    className='projectSourceCodeButton'
                    href='https://github.com/BirdOfSteel/calculator'
                  >
                    Source Code
                  </a>
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
                    duration: 0.25,
                    delay: 0.5
                  }}
                >
                  One of my first projects! A simple trivia app that makes use of the the OpenTriviaDB API.
                  Works as you expect it would, but the start menu also lists a few dropdown menus to customise
                  gameplay options.
                </motion.p>

                <div className='projectDivButtonsDiv'> 
                  <a 
                    className='projectLiveDemoButton'
                    href='https://opentriviadb-api.netlify.app/'
                  >
                    Live Demo
                  </a>
                  <a 
                    className='projectSourceCodeButton'
                    href='https://github.com/BirdOfSteel/Trivia'
                  >
                    Source Code
                  </a>
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
