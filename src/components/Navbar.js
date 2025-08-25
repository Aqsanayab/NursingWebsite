


// Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) { // Adjust this value based on when you want the background to appear
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="logo">
                <strong>J&D</strong> {/* Replace this with your logo image if available */}
            </div>
            <ul className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
                <li className="dropdown">
                    Careers
                    <ul className="dropdown-content">
                        {/* <li><Link to="/application2">LPN</Link></li>  {}
                        <li><Link to="/authorization2">RN</Link></li>  {}
                      
                        <li>CNA</li>
                        <li>HHA</li> */}
                         <li><Link to="/application2">LPN</Link></li> {/* Correct route */}
                        <li><Link to="/authorization">RN</Link></li>  {/* Correct route */}
                        <li><Link to="/brochureback">CNA</Link></li>  {/* Add route if necessary */}
                        <li><Link to="/brochurefront">HHA</Link></li>  {/* Add route if necessary */}
                        <li><Link to="/employee">Employee</Link></li>  {/* Add route if necessary */}
                        <li><Link to="/handbook">Book</Link></li>  {/* Add route if necessary */}
                        <li><Link to="/hipaa">HIPAA</Link></li>  {/* Add route if necessary */}
                        <li><Link to="/job">Job</Link></li>  {/* Add route if necessary */}
                        <li><Link to="/nurse">Nurse</Link></li>  {/* Add route if necessary */}
                        <li><Link to="/registered">Registered</Link></li>  {/* Add route if necessary */}
                        <li><Link to="/verification">Verification</Link></li>  {/* Add route if necessary */}
                    </ul>
                </li>
                <li>About Us</li>
                <li>Why Choose Us</li>
                <li>Contact Us</li>
            </ul>
            <button className="get-in-touch">GET IN TOUCH</button>
            <div className="menu-icon" onClick={toggleMenu}>
                {menuOpen ? '✖' : '☰'} {/* Unicode characters for menu and close icons */}
            </div>
        </nav>
    );
};

export default Navbar;
