import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="p-4 bg-gray-100">
        <p>
          <Link to="/hub" className="hover:text-blue-600">Hub - </Link>
          <Link to="/projects" className="hover:text-blue-600">Projects - </Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
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
        ˇ 
      </p>
      <Link to="/hub"className="Main-button">click</Link>
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
