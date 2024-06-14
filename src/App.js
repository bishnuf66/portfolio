import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact'; // Import Contact component
import Sidebar from './components/Sidebar';
import Design from "./components/Design";
import Header from "./components/Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <div className={`w-full h-screen ${isDarkMode ? 'bg-black-gradient' : 'bg-white-gradient'}`}>
        <div className={`w-full top-0 px-10 py-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
          <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>

        <div className="flex flex-row px-10">
          <div className={`w-1/4 p-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            <Sidebar isDarkMode={isDarkMode} />
          </div>
          <div className="flex justify-center items-center p-4">
            <Routes>
              <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
              <Route path="/projects" element={<Projects isDarkMode={isDarkMode} />} />
              {/* Pass isDarkMode prop to Contact component */}
              <Route path="/contact" element={<Contact isDarkMode={isDarkMode} />} />
            </Routes>
          </div>
        </div>
      </div>
      <div className="w-full h-screen">
        <Design isDarkMode={isDarkMode} />
      </div>
    </Router>
  );
}

export default App;
