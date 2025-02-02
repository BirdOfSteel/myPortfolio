import { useState, useEffect } from 'react'

export default function HeroDiv() {
    const [ isTypeWriterBarVisible, setIsTypeWriterBarVisible ] = useState(true);
    const [ typedHeadingText, setTypedHeadingText ] = useState('');
    
    const headingText = "> Amir Aziz";

    useEffect(() => {
    setTimeout(invertIsTypeWriterBarVisible, 1000);

    function invertIsTypeWriterBarVisible() {
        setIsTypeWriterBarVisible(isTypeWriterBarVisible ? false : true); 
    }
    }, [isTypeWriterBarVisible])

    useEffect(() => {
    let i = 0
    
    function typeWriter() {
        if (i < headingText.length) {
        setTypedHeadingText(() => {
            return headingText.slice(0, i)
        }) 
        
        i++;
        setTimeout(typeWriter, 150);
        }
    }

    typeWriter();

    },[])
    
    return (
        <div id="heroDiv">
        <div id="nameHeadingDiv">
          <h1 id="nameHeading">
            {typedHeadingText}
          </h1>
          { isTypeWriterBarVisible &&
            <div 
              id="nameHeadingTypeWriterBar" 
            />
          }
        </div>
        
        <p id="heroDivText">
          Welcome to my portfolio! I work primarily with React, creating beautifully simple and functional websites.
        </p>

        <div id="terminalDiv">
          <div id="terminalHeader">
            <div className='terminalHeaderFakeButton' 
              style={{
                background: '#f96256'
              }}
            />
            <div className='terminalHeaderFakeButton' 
              style={{
                background: '#fdbc3d'
              }}
            />
            <div className='terminalHeaderFakeButton' 
              style={{
                background: '#33c948'
              }}
            />
          </div>


          <div className='terminalTextDiv'>   
            <p className='terminalWhiteText'> {'>'} Amir.currentLocation</p>
            <p className='terminalYellowText'>"London, United Kingdom"</p>
          </div>
          <div className='terminalTextDiv'>   
            <p className='terminalWhiteText'> {'>'} Amir.contactInfo</p>
            <p className='terminalYellowText'>
              [
                "
                <a 
                  className='blueTerminalText'
                  href='mailto:amiraziz2001@gmail.com'
                >
                  AmirAziz2001@Gmail.com
                </a>
                ", 
                "
                <a 
                  className='blueTerminalText'
                  href='https://www.linkedin.com/in/dev-amir/'
                >
                  LinkedIn
                </a>
                ",
                "
                <a 
                  className='blueTerminalText'
                  href='https://github.com/BirdOfSteel?tab=repositories'
                >
                  GitHub
                </a>
                "
              ]
            </p>
          </div>
          <div className='terminalTextDiv'>
            <p className='terminalWhiteText'> {'>'} Amir.cv</p>
            <p className='terminalYellowText'>
              "
                <a className='blueTerminalText'>
                  amir-aziz.pdf
                </a>
              "
            </p>
          </div>
          <div className='terminalTextDiv'>
            <p className='terminalWhiteText'> {'>'} Amir.interests</p>
            <p className='terminalYellowText'>["design, cooking, gaming"]</p>
          </div>       
          <div className='terminalTextDiv'>
            <p className='terminalWhiteText'> {'>'} Education</p>
            <p className='terminalYellowText'>"Self-taught"</p>
          </div>          
          <div className='terminalTextDiv'>
            <p className='terminalWhiteText'> {'>'} Amir.skills</p>
            <p className='terminalYellowText'>
              ["HTML & CSS", "JavaScript", "React", "TypeScript", "git"]
            </p>
          </div>
          <div className='terminalTextDiv' id="terminalTypeWriterBarDiv">
            <p>{'>'} </p>
            <div 
              id="terminalTypeWriterBar"
              style={{
                visibility: isTypeWriterBarVisible ? 'visible' : 'hidden'
              }}  
            />
          </div>
        </div>
      </div>
    )
}