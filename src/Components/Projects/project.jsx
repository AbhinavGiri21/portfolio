import React from 'react';
import './project.css';
import img from './Images/web.png';
import img1 from './Images/weather.png';
import img2 from './Images/movie.jpg';
const Project = ({ projects }) => {
    return (
        <div className="project">
            {projects.map((project, index) => (
                <div key={index} className="project-container">
                    <div className="upper-data">
                        <img src={project.image || img} alt={project.title} />
                    </div>
                    <div className="lower-data">
                        <h3 className='heading'>{project.title}</h3>
                        <button className='git'>
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Link</a>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

const projects = [
    {
        title: 'Web Scraping',
        image: img,
        githubLink: 'https://github.com/AbhinavGiri21/Web_Scraping.git'
    },
    {
        title: 'Weather App',
        image: img1,
        githubLink: 'https://github.com/AbhinavGiri21/WeatherApp.git'
    },
    {
        title: 'Movie Recommender',
        image: img2,
        githubLink: 'https://github.com/AbhinavGiri21/Movie-Recommendation-System.git'
    },

];

const App = () => {
    return (
        <div className="App">
            <Project projects={projects} />
        </div>
    );
}

export default App;
