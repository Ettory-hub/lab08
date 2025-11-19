import React from 'react';
import './App.css';
import Quiz from './components/Quiz';
import AboutPage from './components/AboutPage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <nav className="App-nav">
            <div className="App-title">Simple React Quiz</div>
            <div className="App-links">
              <Link to="/" className="App-link">Quiz</Link>
              <Link to="/about" className="App-link">About</Link>
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<Quiz />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;