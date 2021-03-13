import React, { useEffect, useState } from 'react'
import '../assets/Nav.css';
import logo from '../assets/img/logo.png';

function Nav() {
    const [show, handleShow] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener('scroll')
        }
    }, [])
    return (
        <div>
            <nav className={`nav ${show && 'nav__black'}`}>
                <img className='nav__logo' src={logo} alt='Netflix Logo' />
            </nav>
        </div>
    )
}

export default Nav
