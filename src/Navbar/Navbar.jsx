import React from 'react'
import './navbar.css'
import ToLightMode from '../assets/LightMode.svg'
import ToDarkMode from '../assets/DarkMode.svg'

function Navbar({ toggleAppearance, dataTheme }) {
    return (
        <header>
            <div className='navbar'>
                <div className='navbar-title'>
                    <div className='project-logo'>

                    </div>
                    <h1 className='project-name'>Project Pilot</h1>
                </div>
                <div className='navbar-actions'>
                    <div className='navbar-item'>SIGNUP</div>
                    <button className='theme-switcher' onClick={toggleAppearance}>
                        <img src={dataTheme == 'dark' ? ToLightMode : ToDarkMode} />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Navbar