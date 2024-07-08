import React, { useState } from 'react';
import axios from 'axios';

const UserProfileForm = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [about, setAbout] = useState('');
    const [profilePic, setProfilePic] = useState(null);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    const handleProfilePicChange = (e) => {
        const file = e.target.files[0];
        setProfilePic(file);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Create a FormData-like object manually
        const formData = {
            name,
            address,
            phone,
            about,
            profilePic
        };

        try {
            const response = await axios.post('http://localhost:3005/user/profile', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log('Profile updated:', response.data);

            setName('');
            setAddress('');
            setPhone('');
            setAbout('');
            setProfilePic(null);
            setSuccessMessage('Profile updated successfully!');
            setError(null);
        } catch (error) {
            console.error('Error updating profile:', error);
            setError('Failed to update profile. Please try again.');
            setSuccessMessage('');
        }
    };

    return (
        <div className="max-w-lg mx-auto mt-8 bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">User Profile</h2>
            <form onSubmit={handleSubmit}>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                {successMessage && <p className="text-green-500 text-sm mb-4">{successMessage}</p>}
                <div className="flex items-center justify-center mb-4">
                    <label htmlFor="profilePic" className="cursor-pointer">
                        <img
                            src={profilePic ? URL.createObjectURL(profilePic) : '/default-profile-pic.png'}
                            alt="Profile"
                            className="h-24 w-24 rounded-full border-2 border-gray-300"
                        />
                        <input
                            type="file"
                            id="profilePic"
                            name="profilePic"
                            className="hidden"
                            accept=".jpg,.jpeg,.png"
                            onChange={handleProfilePicChange}
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block text-lg font-medium text-gray-700">Address</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-lg font-medium text-gray-700">Phone</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="about" className="block text-lg font-medium text-gray-700">About Yourself</label>
                    <textarea
                        id="about"
                        name="about"
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                        className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        rows="3"
                    />
                </div>
                <div className="mt-4">
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Update Profile
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UserProfileForm;
