import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Projects = ({ isDarkMode }) => {
    return (
        <div>
            <div className={`p-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                <h1 className="text-2xl font-bold mb-4">
                    <Typewriter
                        words={['Professional Experience']}
                        loop={1}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h1>
                <ul className="space-y-2">
                    <li>
                        <a href="TBA" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">Akaunt</a>
                        <span className="ml-2 text-gray-500">- Financial management system</span>
                    </li>
                    <li>
                        <a href="TBA" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">Smart Garbage</a>
                        <span className="ml-2 text-gray-500">- IoT-based waste management solution</span>
                    </li>

                    {/* Add more professional projects as needed */}
                </ul>
            </div>
            <div className={`p-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                <h1 className="text-2xl font-bold mb-4">
                    <Typewriter
                        words={['Personal Endeavors']}
                        loop={1}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h1>
                <ul className="space-y-2">
                    <li>
                        <a href="https://github.com/bishnuf66/event-management-system" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">Event Management System</a>
                        <span className="ml-2 text-gray-500">- System for organizing events</span>
                    </li>
                    <li>
                        <a href="https://github.com/bishnuf66/recipe-web-app" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">Recipe Web App</a>
                        <span className="ml-2 text-gray-500">- Application for sharing and discovering recipes</span>
                    </li>
                    <li>
                        <a href="https://github.com/bishnuf66/meropasal3" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">Mero Pasal</a>
                        <span className="ml-2 text-gray-500">- E-commerce platform for local market</span>
                    </li>
                    {/* Add more personal projects as needed */}
                </ul>
            </div>
        </div>
    );
};

export default Projects;
