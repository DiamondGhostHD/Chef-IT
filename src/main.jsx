import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Home from './routes/Home';
import Navbar from './components/navbar';
import './styles/index.css';

function App() {
  return (
      <Router>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
          </Routes>
      </Router>
  );
}

const root = createRoot(document.getElementById('root'));

root.render(<App />);
