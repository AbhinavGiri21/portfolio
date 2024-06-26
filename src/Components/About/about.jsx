import './about.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    const [activeSection, setActiveSection] = useState('technical');

    const toggleSection = (sectionId) => {
        setActiveSection(sectionId);
    };

    return (
        <div className="about">
            <div className="content">
                <h2>About Me</h2>
                <p className='me'>Hello! I'm Abhinav Giri, a passionate and dedicated 3rd year B.Tech Computer Science and Engineering student at UPES, specializing in full-stack AI. With a strong foundation in machine learning and a keen interest in web development, I thrive on tackling complex problems and developing innovative solutions. <br /><br />Currently serving as Associate Technical Head at UPES-CSI, I'm deeply committed to leveraging technology to solve real-world problems and drive innovation.

                    My journey in technology spans across diverse interests, from developing robust web applications with Flask and React to exploring the intricacies of machine learning and data analysis. I thrive on challenges that require creativity and problem-solving, aiming to make meaningful contributions in every project I undertake.</p>
                <div className="social-icons">
                    <p>Connect with me on:</p>
                    <a className="github" href="https://github.com/AbhinavGiri21" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="2x" className="icon" />
                    </a>
                    <a className="linkedln" href="https://www.linkedin.com/in/abhinav-giri-644707256/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" className="icon" />
                    </a>
                </div>
            </div>
            <div className="skills">
                <h2>Skills & Education</h2>
                <div className="section">
                    <button className={`section-btn ${activeSection === 'technical' ? 'active' : ''}`} onClick={() => toggleSection('technical')}>
                        Technical
                    </button>
                    <button className={`section-btn ${activeSection === 'language' ? 'active' : ''}`} onClick={() => toggleSection('language')}>
                        Languages
                    </button>
                    <button className={`section-btn ${activeSection === 'education' ? 'active' : ''}`} onClick={() => toggleSection('education')}>
                        Education
                    </button>
                    <div className={`section-content ${activeSection === 'technical' ? 'active' : ''}`} id="technicalSection">
                        <h3>Technical</h3>
                        <ul>
                            <li><b>Data Analysis & Machine Learning</b></li>
                            <li>Analysing large data and building Prediction Models using Machine Learning and Deep Learning Algorithms.</li>
                            <br />
                            <li><b>Database Management</b></li>
                            <li>Storing and managing data efficiently in SQL and NoSQL databases, and running queries to retrieve data.</li>
                            <br />
                            <li><b>Object Oriented Programming</b></li>
                            <li>Object oriented programming and applying data structures and algorithms in different programming languages.</li>
                        </ul>
                    </div>

                    <div className={`section-content ${activeSection === 'language' ? 'active' : ''}`} id="languageSection">
                        <h3>Languages</h3>
                        <ul>
                            <li><b>Data Analysis & Machine Learning</b></li>
                            <li>Analysing large data and building Prediction Models using Machine Learning and Deep Learning Algorithms.</li>
                            <br />
                            <li><b>Database Management</b></li>
                            <li>Storing and managing data efficiently in SQL and NoSQL databases, and running queries to retrieve data.</li>
                            <br />
                            <li><b>Object Oriented Programming</b></li>
                            <li>Object oriented programming and applying data structures and algorithms in different programming languages.</li>
                        </ul>
                    </div>

                    <div className={`section-content ${activeSection === 'education' ? 'active' : ''}`} id="educationSection">
                        <h3>Education</h3>
                        <ul>
                            <li><b>Data Analysis & Machine Learning</b></li>
                            <li>Analysing large data and building Prediction Models using Machine Learning and Deep Learning Algorithms.</li>
                            <br />
                            <li><b>Database Management</b></li>
                            <li>Storing and managing data efficiently in SQL and NoSQL databases, and running queries to retrieve data.</li>
                            <br />
                            <li><b>Object Oriented Programming</b></li>
                            <li>Object oriented programming and applying data structures and algorithms in different programming languages.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
