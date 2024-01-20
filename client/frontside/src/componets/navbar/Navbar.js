



// navbar code for this applications

import React from 'react'
import './navbar.css'

const Navbar = () => {
    return (
        <div className='main-navbar'>
            <div className='navbar'>
                <div className='logo'>
                    <h1>Tajs</h1>
                </div>
            </div>

            <div className='register-and-login'>
                <div>
                    <button>Account</button>
                </div>

                <div>
                    <button>Login</button>
                </div>

            </div>


        </div>
    )
}

export default Navbar



