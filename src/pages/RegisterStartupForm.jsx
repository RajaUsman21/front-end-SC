import React, { useState } from 'react';
import axios from 'axios';

const StartupRegistrationForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [ceo, setCeo] = useState('');
    const [location, setLocation] = useState('');
    const [website, setWebsite] = useState('');
    const [logo, setLogo] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();

        const startupData = {
            name,
            description,
            // ceo,
            location,
            website,
            // logo
        };

        try {
            const token = localStorage.getItem('token'); 

            const response = await axios.post('http://localhost:3005/startup/register', startupData, { headers: {"Authorization" : `Bearer ${token}`} });


            console.log('Startup registered:', response.data);

            setName('');
            setDescription('');
            // setCeo('');
            setLocation('');
            setWebsite('');
            setLogo('');
        } catch (error) {
            console.error('Error registering startup:', error);
        }
    };

    return (
        <div className="max-w-lg mx-auto mt-8 bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Register Your Startup</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-lg font-medium text-gray-700">Startup Name</label>
                    <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-lg font-medium text-gray-700">Description</label>
                    <textarea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" rows="3" required />
                </div>
                {/* <div className="mb-4">
                    <label htmlFor="ceo" className="block text-lg font-medium text-gray-700">CEO</label>
                    <input type="text" id="ceo" name="ceo" value={ceo} onChange={(e) => setCeo(e.target.value)} className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div> */}
                <div className="mb-4">
                    <label htmlFor="location" className="block text-lg font-medium text-gray-700">Location</label>
                    <input type="text" id="location" name="location" value={location} onChange={(e) => setLocation(e.target.value)} className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="website" className="block text-lg font-medium text-gray-700">Website</label>
                    <input type="text" id="website" name="website" value={website} onChange={(e) => setWebsite(e.target.value)} className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                {/* <div className="mb-4">
                    <label htmlFor="logo" className="block text-lg font-medium text-gray-700">Logo URL</label>
                    <input type="text" id="logo" name="logo" value={logo} onChange={(e) => setLogo(e.target.value)} className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div> */}
                <div className="mt-4">
                    <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Register</button>
                </div>
            </form>
        </div>
    );
};

export default StartupRegistrationForm;
