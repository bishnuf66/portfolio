// src/components/Home.js
import React from 'react';

const Home = () => {
    const handelclick = () => {
        console.log('clicked');

    }
    return (
        <div className='p-4 text-white'>
            <h1 className="text-2xl font-bold mb-4">Welcome to My Portfolio!</h1>
            <p className='text-white'>
                Hello and welcome! I'm Bishnu, a passionate Fullstack Web Developer with a knack for creating robust, scalable web applications. Here, you'll find a showcase of my journey, projects I've built, and technologies I'm proficient in.

                <h1 className="text-2xl font-bold mb-4">  What You'll Discover:</h1>
                Professional Projects: Explore a collection of projects I've crafted from ideation to deployment, leveraging technologies such as React, Node.js, and MongoDB.
                Skills & Expertise: Dive into my proficiency in frontend development (HTML/CSS, JavaScript, React), backend development (Node.js, Express), database management (SQL, NoSQL), and more.
                Passion for Problem-Solving: I thrive on solving complex problems and delivering intuitive solutions that enhance user experiences and drive business growth.</p>
        </div>
    );
};

export default Home;
