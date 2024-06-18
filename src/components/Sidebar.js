import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isDarkMode }) => {
    return (
        <div className={`w-1/4  p-0 py-4 sm:p-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            <ul className="space-y-4">
                <li>
                    <Link to="/" className="text-lg hover:underline">Home</Link>
                </li>
                <li>
                    <Link to="/projects" className="text-lg hover:underline">Projects</Link>
                </li>
                <li>
                    <Link to="/contact" className="text-lg hover:underline">Contact</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
