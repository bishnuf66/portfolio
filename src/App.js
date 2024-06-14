import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar';
import Design from "./components/Design";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="w-full h-screen bg-black-gradient bg-no-repeat bg-center bg-cover relative overflow-hidden">
        <div className="w-full top-0 text-white px-10 py-4">
          <Header />
        </div>

        <div className="flex flex-row px-10">
          <div className="w-1/4  text-white p-4 flex ">
            <Sidebar />
          </div>
          <div className="flex justify-center items-center p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
      <div className="w-full h-screen  top-0 left-0">
        <Design />
      </div>
    </Router>
  );
}

export default App;
