import React from 'react'
import './About.css'

function About() {
  return (
    <section className='about'>
      <h1 className='abt' >About Me</h1>
      <div className="abtMe">
        <h3 className='heading'>Hello! I'm Heena, a recent computer science graduate <br /> with a passion for web development</h3>
        <ul className='animated-content'>
          <li className='list'>I'm genuinely passionate about the intersection of technology and creativity. I love how
            web development allows me to bring ideas to life and create user-friendly digital experiences.</li>
          <li className='list'>I enjoy the thrill of solving complex problems, and
            I believe that every challenge is an opportunity to learn and grow</li>
          <li className='list'>In the coming years, I aim to work on meaningful projects that have a positive impact on users' lives.
            I'm excited about the potential for innovation and growth in the ever-evolving tech landscape.</li>
          <li className='list'>
          I am an avid dancer, finding a harmonious balance between the world of technology and the art of movement.
          Dance serves as a source of both personal expression and discipline in my life.
          </li>
          <li className='list'>
          I'm looking forward to connecting with fellow enthusiasts in the field. Feel free to reach out or explore
          more about my skills and education in the sections below.
          </li>
        </ul>
      </div>
    </section>
  )
}

export default About