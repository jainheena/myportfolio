import { useState } from 'react';
import React from 'react'
import './Info.css';

$(document).ready(function(){
  $('#icon').click(function(){
    $('ul').toggleClass('show')
  })
})

function Info() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavItemClick = () => {
    // Close the mobile menu when a nav item is clicked
    setMobileMenuOpen(false);
  };
  return (
      <div className='firstDiv'>
        <nav className='navbar'>
          <label htmlFor="" className='logo'> MyPortfolio</label>
            <ul className={isMobileMenuOpen ? 'show' : ''}>
                <li><a className='active' href="#home" onClick={handleNavItemClick}>Home</a></li>
                <li><a href="#about" onClick={handleNavItemClick}>About</a></li>
                <li><a href="#skills" onClick={handleNavItemClick}>Skills</a></li>
                <li><a href="#edu" onClick={handleNavItemClick}>Education</a></li>
                <li><a href="#contact" onClick={handleNavItemClick}>Contact Me</a></li>
            </ul>
            <label id='icon' onClick={toggleMobileMenu}>
            <span>☰</span>
            </label>
        </nav>
    </div>
  )
}

export default Info