import React from 'react'
import './navbar.css'
import ToLightMode from '../assets/LightMode.svg'
import ToDarkMode from '../assets/DarkMode.svg'

function Navbar({ handleAuthDisplay }) {
    return (
        <header>
            <div className='navbar'>
                <div className='navbar-title'>
                    <div className='project-logo'>

                    </div>
                    <h1 className='project-name'>Project Pilot</h1>
                </div>
                <div className='navbar-actions'>
                    <div className='navbar-item' onClick={()=>handleAuthDisplay()}>LOGIN / SIGNUP</div>
                </div>
            </div>
        </header>
    )
}

export default Navbar