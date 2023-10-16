import React from 'react'
import './Education.css'

function Education() {
  return (
    <section className='education'>
      <div className="eline"></div>
      <h1 className="edu">Education</h1>
      <div className="cardss">
        <div className="cardd">
          <h1>Btech</h1>
          <ul className="keyPoints">
            <li>Computer Science Engineering</li>
            <li>Guru Jambheshwar University of Science and Technology,Hisar</li>
            <li>2019-2023</li>
            <li><b>Cgpa : </b>6.89</li>
          </ul>
        </div>
        <div className="cardd">
          <h1>Class 12</h1>
          <ul className="keyPoints">
            <li>Non.Medical</li>
            <li>Government Girls Senior Secondary School,Kalanwali(Sirsa,Haryana)</li>
            <li>2018-2019</li>
            <li>85.6%</li>
          </ul>
        </div>
        <div className="cardd">
          <h1>Class 10</h1>
          <ul className="keyPoints">
            <li>General</li>
            <li>Bishna Mal Jain Sarswati Vidya Mandir School,Kalanwali(Sirsa,Haryana)</li>
            <li>2016-2017</li>
            <li>83.6%</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Education