import React from 'react';
import './request.css';

const Request = () => {
    return (
        <div className="custom-form-wrapper">
            <div className="custom-form-container">
                <input type="text" className="custom-input" placeholder="Full Name" required />
                <input type="tel" className="custom-input" placeholder="Contact Number" required />
                <input type="email" className="custom-input" placeholder="Email" required />
                <input type="text" className="custom-input" placeholder="Recipe Name" required />
                <textarea className="custom-textarea" rows="4" placeholder="Recipe Description" required></textarea>
                <input type="text" className="custom-input" placeholder="Cuisine" required />
                <input type="file" className="custom-input" accept="image/*" placeholder="Cover Photo" />
                <button type="submit" className="custom-button">Submit</button>
            </div>
        </div>
    );
};

export default Request;
