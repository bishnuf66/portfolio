// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="w-1/4  text-white p-4" >
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
