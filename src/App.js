import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const tabs = [
  "Hub",
  "Projects",
  "About"
];

function drawNavBox(name) {
  return (
    <Link to={`/${name}`}> {name} </Link>
  );
}

function Navbar() { 
  const boxes = [];
  for (let item of tabs) {
    boxes.push(drawNavBox(item));
  }

  return (
    <nav>
        <p>
          {boxes}
        </p>
    </nav>
  );
}

function Home() {
  return (
    <div>
      <p>Welcome</p>
      <p> 
        | <br></br>
        | <br></br>
        ˇ <br></br>
        <Link to="/hub">click</Link>
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
      <div className="scanline">
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
