import './home.css';
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
    const [text] = useTypewriter({
        words: ['Web Developer.', 'Data Analyst.', 'Python Developer.'],
        loop: Infinity,
    });
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = `${process.env.PUBLIC_URL}/Resume.pdf`;
        link.download = 'Abhinav_Giri_Resume.pdf';
        link.click();
    }
    return (
        <div className="container">
            <div className="left-data">
                <p className='welcome'>WELCOME TO MY WORLD</p>
                <h1 className='details'>Hi, I'm <span className='name'>Abhinav Giri</span></h1>
                <h1 className='details'><span className='name'>a</span> <span>{text}</span><span className='name'><Cursor /></span></h1>
                <p></p>
            </div>
            <div className="right-data">
                <button class="neon-button" onClick={handleDownload}>DOWNLOAD CV</button>

            </div>
        </div>
    );
};
export default Home;

