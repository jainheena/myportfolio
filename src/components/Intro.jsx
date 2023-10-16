import React from 'react'
import './Intro.css'
import myimg from '../assets/bgpic.png'

function Intro() {
  return (
    <section className='intro'>
          <div className='intro-text'>
            <span className='hello'>Hello,</span><br />
            <span className='fIntro'>I'm <span className="typing">Heena jain</span><br />Frontend Developer</span>
            <p className='intropara'>I am a recent Computer Science Graduate and interested in Frontend Development.</p>
          </div>
          <div className='image'>
          <img src={myimg} alt="" style={{width:"500px",height:"500px"}} />
          </div>
          <div className="line"></div>
    </section> 
  )
}

export default Intro