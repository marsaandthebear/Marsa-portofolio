import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle';
import { Link } from 'react-scroll'

const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Marsa</div>
                <Toggle/>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType: 'none'}}>

                        <Link spy={true} to='Navbar' smooth="easeInOutQuint" duration={50} activeClass="activeClass">
                        <li>Home</li>
                        </Link>
                        <Link spy={true} to='Skills' smooth="easeInOutQuint" duration={50} activeClass="activeClass">
                        <li>Skills</li>
                        </Link>
                        <Link spy={true} to='project' smooth="easeInOutQuint" duration={50} activeClass="activeClass">
                        <li>Portofolio</li>
                        </Link>
                        <Link spy={true} to='Aboutme' smooth="easeInOutQuint" duration={50} activeClass="activeClass">
                        <li>About me</li>
                        </Link>
                    </ul>
                </div>
                <Link spy={true} to='Contact' smooth="easeInOutQuint" duration={50} activeClass="activeClass">
                <button className="button n-button">
                    Contact me
                </button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;