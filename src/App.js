import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact'; // Import Contact component
import Sidebar from './components/Sidebar';
import Design from "./components/Design";
import Header from "./components/Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>

      <div className={` container transition-all duration-700 ease-in-out w-full min-h-screen ${isDarkMode ? 'bg-black' : 'bg-white'}`}>

        <Design isDarkMode={isDarkMode} />


        <div className={` w-full top-0 p-0  sm:px-10 sm:py-4 ${isDarkMode ? 'text-white' : 'text-black'} `}>
          <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>

        <div className="flex flex-row px-0 py-2  sm:px-10">
          <div className={`w-1/4 p-0 sm:py-4 sm:p-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            <Sidebar isDarkMode={isDarkMode} />
          </div>
          <div className="flex justify-center items-center p-4">
            <Routes>
              <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
              <Route path="/projects" element={<Projects isDarkMode={isDarkMode} />} />
              <Route path="/contact" element={<Contact isDarkMode={isDarkMode} />} />
            </Routes>
          </div>
        </div>
      </div>
      <div>

      </div>

    </Router>
  );
}

export default App;
