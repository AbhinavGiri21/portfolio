import './about.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    const [activeSection, setActiveSection] = useState('expertise');

    const toggleSection = (sectionId) => {
        setActiveSection(sectionId);
    };

    return (
        <div className="about">
            <div className="content">
                <h2>About Me</h2>
                <p className='me'>Hello! I'm Abhinav Giri, a passionate and dedicated 3rd year B.Tech Computer Science and Engineering student at UPES, specializing in Full Stack AI. With a strong foundation in machine learning and a keen interest in web development, I thrive on tackling complex problems and developing innovative solutions. <br /><br />Currently serving as Associate Technical Head at UPES-CSI, I'm deeply committed to leveraging technology to solve real-world problems and drive innovation.

                    My journey in technology spans across diverse interests, from developing robust web applications with Flask and React to exploring the intricacies of machine learning and data analysis. I thrive on challenges that require creativity and problem-solving, aiming to make meaningful contributions in every project I undertake.</p>
                <div className="social-icons">
                    <p>Follow me on:</p>
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
                    <button className={`section-btn ${activeSection === 'expertise' ? 'active' : ''}`} onClick={() => toggleSection('expertise')}>
                        Expertise
                    </button>
                    <button className={`section-btn ${activeSection === 'technical' ? 'active' : ''}`} onClick={() => toggleSection('technical')}>
                        Technical
                    </button>
                    <button className={`section-btn ${activeSection === 'education' ? 'active' : ''}`} onClick={() => toggleSection('education')}>
                        Education
                    </button>

                    <div className={`section-content ${activeSection === 'expertise' ? 'active' : ''}`} id="expertiseSection">
                        <ul>
                            <li><b>Programming Languages</b></li>
                            <li>Python, C++, C, HTML, CSS, JavaScript</li>
                            <br />
                            <li><b>Data Visualization</b></li>
                            <li>Microsoft Power BI, Excel
                            </li>
                            <br />
                            <li><b>Libraries</b></li>
                            <li>React, NumPy, Pandas, Matplotlib, Seaborn</li><br />
                            <li><b>Developing Tools</b></li>
                            <li>GitHub, VS Code, Jupyter Notebook</li>
                        </ul>
                    </div>
                    <div className={`section-content ${activeSection === 'technical' ? 'active' : ''}`} id="technicalSection">
                        <ul>
                            <li><b>Data Analysis & Machine Learning</b></li>
                            <li>Analyzing large datasets and building prediction models using machine learning algorithms.</li>
                            <br />
                            <li><b>Database Management</b></li>
                            <li>Efficiently storing and managing data in SQL databases, and executing queries to retrieve information.</li>
                            <br />
                            <li><b>Object Oriented Programming</b></li>
                            <li>Object oriented programming and applying data structures and algorithms in different programming languages.</li>
                        </ul>
                    </div>

                    <div className={`section-content ${activeSection === 'education' ? 'active' : ''}`} id="educationSection">
                        <ul>
                            <li><b>Bachelor of Technology (2022-2026)</b></li>
                            <li>Computer Science and Engineering</li>
                            <li>UPES</li>
                            <li>CGPA-7.88</li>
                            <br />
                            <li><b>Secondary School (2022)</b></li>
                            <li>The Tonsbridge School, Dehradun</li>
                            <li>Percentage-81.4%</li>
                            <br />
                            <li><b>High School (2020)</b></li>
                            <li>Shemford Doon, Dehradun</li>
                            <li>Percentage-97.2%</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
