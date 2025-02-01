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
            <p className='terminalYellowText'>"LINK HERE IN BLUE"</p>
          </div>
          <div className='terminalTextDiv'>
            <p className='terminalWhiteText'> {'>'} Amir.cv</p>
            <p className='terminalYellowText'>"LINK HERE IN BLUE"</p>
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

            <div>
              <p className='terminalYellowText'>["HTML & CSS", "JavaScript", "React", "TypeScript", "git"]</p>
              { isTypeWriterBarVisible &&
                <div id="terminalTextDivTypeWriterBar"/>
              }
            </div>
          </div>
        </div>
      </div>
    )
}