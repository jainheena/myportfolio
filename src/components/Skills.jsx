import React from 'react'
import './Skills.css'

function Skills() {
  return (
    <section className='skill-container'>
      <div className="sline"></div>
      <div className='skill'>Skills</div>
      <div className="cards">
        <div className="card">
          <h1 className='card-heading'>Frontend Development</h1>
          <ul className='key-points'>
            <li>Proficient in HTML, CSS, and JavaScript for building modern, responsive,
              and user-friendly web applications.</li>
            <li>Experienced in using popular frontend libraries and frameworks, such as React.js,
              to create dynamic and interactive user interfaces.</li>
            <li>Strong understanding of UI/UX design principles, ensuring a seamless user experience.</li>
          </ul>
        </div>
        <div className="card">
          <h1 className='card-heading'>Data Structures and Algorithms (DSA)</h1>
          <ul className='key-points'>
            <li>Skilled in using Python to implement and solve a wide range of data structures and algorithms,
              contributing to efficient and optimized code.</li>
            <li>Problem-solving mindset with the ability to analyze and optimize algorithms for performance and scalability.</li>
            <li>Actively practice DSA through online platforms and coding challenges to continually enhance problem-solving skills</li>
          </ul>
        </div>
        <div className="card">
          <h1 className='card-heading'>Additional</h1>
          <ul className='key-points'>
            <li>Knowledge of front-end build tools and package managers like Webpack and npm.</li>
            <li>Familiarity with web development best practices, including responsive design and cross-browser compatibility.</li>
            <li>Strong understanding of UI/UX design principles, ensuring a seamless user experience.</li>
          </ul>
        </div>
        <div className="card">
          <h1 className='card-heading'>Soft Skills</h1>
          <ul className='key-points'>
            <li>Excellent problem-solving and critical thinking abilities developed through coding and DSA practice.</li>
            <li>Strong communication and collaboration skills for effective teamwork and project development.</li>
            <li>Enthusiastic about staying updated with emerging web development trends and technologies,
              ensuring that my skills remain current and adaptable to industry shifts.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills
