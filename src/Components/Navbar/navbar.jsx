import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="nav-container">
            <div className="navbar">
                <div className="left-side">
                    <NavLink to="/">Portfolio</NavLink>
                </div>
                <div className="right-side">
                    <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                        <ul>
                            <li><NavLink to="/" className="link" onClick={toggleMenu}>HOME</NavLink></li>
                            <li><NavLink to="/projects" className="link" onClick={toggleMenu}>PROJECTS</NavLink></li>
                            <li><NavLink to="/contact" className="link" onClick={toggleMenu}>CONTACT</NavLink></li>
                        </ul>
                    </div>
                    <div className="hamburger-menu" onClick={toggleMenu}>
                        {isOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
