import React from 'react';
import './App.css';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import SocialLinks from './components/SocialLinks';
import Resume from './components/Resume';

function App() {
  return (
    <div className="main-content">
      <div className="app">
        <h1 className="title">Aarti Wamane Portfolio</h1>
        <About />
        <Education />
        <Projects />
        <Resume /> {/* ✅ This was missing */}
        <SocialLinks />
      </div>
    </div>
  );
}

export default App;
