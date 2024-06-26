import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar/navbar";
import LandingPage from './Components/LandingPage/landingpage';
import './App.css';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
