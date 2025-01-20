import './App.css';
import { BrowserRouter, Routes, Route, Link, useNavigate} from 'react-router-dom';
import * as React from 'react';
import './ScrollingText.js';
import ScrollingText from './ScrollingText.js';

function Navbar() { 
  return (
    <nav>
        <p>
          <Link to="/hub"> Hub </Link>
          <Link to="/projects"> Projects </Link>
          <Link to="/about"> About </Link>
        </p>
    </nav>
  );
}

function Home() {
  let navigate = useNavigate();

  return (
    <div className="vaporwave-text" style={{'font-size': 50, 'text-align': 'center'}}>
      <br></br>
      <br></br>
      <ScrollingText 
        text="welcome" 
        speed={20}
      />
      <p> 
      <br></br>
        | <br></br>
        | <br></br>
        ˇ <br></br>
        <button 
          type='button' 
          className="vaporwave-button"
          onClick={() => {
            navigate('/hub')
          }}
        >
          click
        </button>
      </p>
    </div>
  );
}

function Hub() {
  return (
    <div className="Vapor">
      <h1>Hub</h1>
    </div>
  );
}

function Projects() {
  return(
    <div>
      <h1>Projects</h1>
    </div>
  );
}

function About() {
  return(
    <div>
      <h1>About</h1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>

          <Route path="/" element={
            <div>
              <Home />
            </div>
          } />

          <Route path="/hub" element={
            <div>
              <Navbar />
              <Hub />
            </div>
          } />

          <Route path="/projects" element={
            <div>
              <Navbar />
              <Projects />
            </div>
          } />

          <Route path="/about" element={
            <div>
              <Navbar />
              <About />
            </div>
          } />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
