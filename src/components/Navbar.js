import React from 'react'
import './navbar.css'
function Navbar() {
  return (
    <div className='container'>
        <div className='logo'>
        <img className="logo" src="../Charzit1.png" alt="img" />
        </div>
        <div className='nav-options'>
            <a href='/' className='nav'>Home</a>
            <a href='/about' className='nav'>About Us</a>
            <a href='/contact' className='nav'>Contact Us </a>
            <a href='/partnerWithUs' className='nav'>Our Products </a>
        </div>
    </div>
  )
}

export default Navbar