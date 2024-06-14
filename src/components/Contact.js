// src/components/Contact.js
import React from 'react';

const Contact = () => {
    return (
        <div className="p-4 text-white">
            <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
            <p className="mb-4">
                Feel free to reach out for collaborations, inquiries, or just to connect. Let's discuss how we can bring your next project to life!
            </p>

            {/* Social Links */}
            <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
                <div className="flex space-x-4">
                    <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                        Twitter
                    </a>
                    <a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                        Facebook
                    </a>
                    <a href="https://linkedin.com/example" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                        LinkedIn
                    </a>
                    {/* Add more social links as needed */}
                </div>
            </div>

            {/* Contact Information */}
            <div>
                <h2 className="text-lg font-semibold mb-2">Contact Information</h2>
                <p>Email: contact@example.com</p>
                <p>Phone: +1234567890</p>
                <p>Address: 123 Street, City, Country</p>
            </div>
        </div>
    );
};

export default Contact;
