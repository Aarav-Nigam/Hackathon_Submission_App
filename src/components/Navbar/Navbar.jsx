import React from 'react'
import logo from '../../assets/AI Planet Logo.png'
function Navbar() {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} className='ms-5 h-50'/>
                </a>
            </div>
        </nav>
    )
}

export default Navbar