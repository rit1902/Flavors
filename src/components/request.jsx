import React, { useState } from 'react';
import './request.css';

const Request = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        contactNumber: '',
        email: '',
        recipeName: '',
        recipeDescription: '',
        cuisine: '',
        coverPhoto: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData();
        for (const key in formData) {
            if (formData[key] !== null && formData[key] !== '') {
                form.append(key, formData[key]);
            }
        }

        try {
            const response = await fetch('http://localhost:8080/api/requests/create', {
                method: 'POST',
                body: form,
            });

            if (response.ok) {
                alert('Request submitted successfully!');
                setFormData({
                    fullName: '',
                    contactNumber: '',
                    email: '',
                    recipeName: '',
                    recipeDescription: '',
                    cuisine: '',
                    coverPhoto: null,
                });
            } else {
                alert('Failed to submit request');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while submitting the request');
        }
    };

    return (
        <div className="custom-form-wrapper">
            <form className="custom-form-container" onSubmit={handleSubmit}>
                <h1>Request Recipe</h1>
                <input
                    type="text"
                    name="fullName"
                    className="custom-input"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="tel"
                    name="contactNumber"
                    className="custom-input"
                    placeholder="Contact Number"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    className="custom-input"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="recipeName"
                    className="custom-input"
                    placeholder="Recipe Name"
                    value={formData.recipeName}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="recipeDescription"
                    className="custom-textarea"
                    rows="4"
                    placeholder="Recipe Description"
                    value={formData.recipeDescription}
                    onChange={handleChange}
                    required
                ></textarea>
                <input
                    type="text"
                    name="cuisine"
                    className="custom-input"
                    placeholder="Cuisine"
                    value={formData.cuisine}
                    onChange={handleChange}
                    required
                />
                <input
                    type="file"
                    name="coverPhoto"
                    className="custom-input"
                    accept="image/*"
                    onChange={handleChange}
                />
                <button type="submit" className="custom-button">Submit</button>
            </form>
        </div>
    );
};

export default Request;
