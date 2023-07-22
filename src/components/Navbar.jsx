import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <>
        <div className='navbar'>
            <ul className='menu'>
                <li><a href='#'>Main</a></li>
                <li><a href='#'>Projects</a></li>
                <li><a href='#'>Contact</a></li>
                <li><a href='#'>Resume</a></li>
            </ul>
        </div>    
    </>
  )
}

export default Navbar