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
                        <a href="https://mspacademy.co/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">MSP ACADEMY</a>
                        <span className="ml-2">- MSP Academy is a platform designed to connect Creators, who need academic projects completed, with Doers, who complete these projects.</span>
                    </li>
                    <li>
                        <a href="https://shofydrop.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">Shofydrop</a>
                        <span className="ml-2">- Multi-Vendor E-Commerce Website.</span>
                    </li>
                    <li>
                        <a href="https://kagosida.org.np/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">KAGOSIDA</a>
                        <span className="ml-2">- Website to stay updated with the latest gold and silver rates.</span>
                    </li>

                    <li>
                        <a href="https://akauntplus.shreeminfotech.com.np/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">Akaunt</a>
                        <span className="ml-2">- Inventory And Financial Management System.</span>
                    </li>
                    <li>
                        <a href="https://tg-way.tech/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">TG-WAY</a>
                        <span className="ml-2">- Simple and Elegant static website.</span>
                    </li>
                    <li>
                        <a href="TBA" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">Smart Everest Fitness</a>
                        <span className="ml-2 ">- E-commerce Web app for gym and health suppliments.</span>
                    </li>
                    <li>
                        <a href="TBA" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">Smart Garbage</a>
                        <span className="ml-2 ">- IoT-based waste management solution.</span>
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
                        <a href="https://meme-generator-chi-indol.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">Meme Generator</a>
                        <span className="ml-2 ">- Web Application for  creating and sharing memes</span>
                    </li>

                    <li>
                        <a href="https://github.com/bishnuf66/event-management-system" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">Event Management System</a>
                        <span className="ml-2 ">- System for organizing events</span>
                    </li>
                    <li>
                        <a href="https://github.com/bishnuf66/recipe-web-app" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">Recipe Web App</a>
                        <span className="ml-2 ">- Application for sharing and discovering recipes</span>
                    </li>
                    <li>
                        <a href="https://github.com/bishnuf66/meropasal3" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">Mero Pasal</a>
                        <span className="ml-2 ">- E-commerce platform for local market</span>
                    </li>
                    {/* Add more personal projects as needed */}
                </ul>
            </div>
        </div>
    );
};

export default Projects;
