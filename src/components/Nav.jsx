import React from 'react'
import logo from '../assets/logo.png'

export default function Nav(){
    return(
        <nav className='nav'>
            <img src={logo} className='logo' />
            <p>my travel journal.</p>
        </nav>

    )

}