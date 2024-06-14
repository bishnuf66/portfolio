import React from 'react';

const Projects = ({ isDarkMode }) => {
    return (
        <div>
            <div className={`p-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                <h1 className="text-2xl font-bold mb-4">Professional Experience</h1>
                <ul className="space-y-2">
                    <li>
                        <a href="https://example.com/project1" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">Akaunt</a>
                    </li>
                    <li>
                        <a href="https://example.com/project2" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">Smart Garbage</a>
                    </li>
                    <li>
                        <a href="https://example.com/project3" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">Project 3</a>
                    </li>
                    {/* Add more projects as needed */}
                </ul>
            </div>
            <div className={`p-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                <h1 className="text-2xl font-bold mb-4">Personal Endeavors</h1>
                <ul className="space-y-2">
                    <li>
                        <a href="https://example.com/project1" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">Event Management System</a>
                    </li>
                    <li>
                        <a href="https://example.com/project2" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">Recipe Web App</a>
                    </li>
                    <li>
                        <a href="https://example.com/project3" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">Hamro Pasal</a>
                    </li>
                    {/* Add more projects as needed */}
                </ul>
            </div>

        </div>
    );
};

export default Projects;
