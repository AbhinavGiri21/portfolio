import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="social-link">
                    <a href="https://www.linkedin.com/in/abhinav-giri-644707256/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} color="white" className='linkedln' />
                    </a>
                    <a href="https://github.com/AbhinavGiri21" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} color="white" className='github' />
                    </a>
                    <a href="mailto:abhinavgiri60@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} size="2x" />
                    </a>
                </div>
                <div className="copyright">
                    &copy; {new Date().getFullYear()} | ALL RIGHTS RESERVED
                </div>
            </div>
        </footer>
    );
};

export default Footer;
