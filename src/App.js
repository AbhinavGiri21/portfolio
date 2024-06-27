import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar/navbar";
import LandingPage from './Components/LandingPage/landingpage';
import Footer from './Components/Footer/footer';
import Contact from './Components/Contact/contact';
import './App.css';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
