import './App.css';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

const tabs = [
  "Hub",
  "Projects",
  "About"
];

function drawNavBox(name, onClick) {
  return (
    <button 
      onClick={onClick}
      className="hover:text-blue-600 px-3 py-1 mx-1"
    >
      {name}
    </button>
  );
}

function Navbar() { 
  const navigate = useNavigate();

  const boxes = [];
  for (let item of tabs) {
    boxes.push(drawNavBox(item, () => navigate(`/${item}`)));
  }

  return (
    <nav className="Navbar">
        <p>
          {boxes}
        </p>
    </nav>
  );
}

function Home() {
  return (
    <div className="App-header">
      <p>Welcome</p>
      <p> 
        | <br></br>
        | <br></br>
        ˇ <br></br>
        <Link to="/hub"className="Main-button">click</Link>
      </p>
    </div>
  );
}

function Hub() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Hub</h1>
    </div>
  );
}

function Projects() {
  return(
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
    </div>
  );
}

function About() {
  return(
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">About</h1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
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
