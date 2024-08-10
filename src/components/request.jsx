import React, { useState } from 'react';
import axios from 'axios';
import './request.css';

const Request = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: files ? files[0] : value
    }));
    console.log(`Updated field ${name}:`, files ? files[0] : value); // Debugging line
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formDataToSend = new FormData();

    Object.keys(formData).forEach(key => {
      if (formData[key]) {
        formDataToSend.append(key, formData[key]);
      }
    });

    console.log('FormData to send:', formDataToSend); // Debugging line

    try {
      const response = await axios.post('http://localhost:8080/api/requests/create', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Request submitted:', response.data);
      setSubmitted(true);
      setFormData({});
      setError(null);
      alert('Request submitted successfully!');
    } catch (error) {
      if (error.response) {
        console.error('Server Error:', error.response.data);
        setError(`Server Error: ${error.response.data.message || 'Please try again.'}`);
      } else if (error.request) {
        console.error('No Response:', error.request);
        setError('No response received from the server. Please check your network connection.');
      } else {
        console.error('Error:', error.message);
        setError(`Error: ${error.message}`);
      }
    }
  };

  return (
    <div className="request-form">
      <h1>Submit Your Request</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input type="text" name="fullName" onChange={handleChange} />
        </label>
        <label>
          Contact Number:
          <input type="text" name="contactNumber" onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" onChange={handleChange} />
        </label>
        <label>
          City:
          <input type="text" name="city" onChange={handleChange} />
        </label>
        <label>
          Recipe Name:
          <input type="text" name="recipeName" onChange={handleChange} />
        </label>
        <label>
          Recipe Description:
          <textarea name="recipeDescription" onChange={handleChange}></textarea>
        </label>
        <label>
          Cuisine:
          <input type="text" name="cuisine" onChange={handleChange} />
        </label>
        <label>
          Exists with Us:
          <input type="text" name="existsWithUs" onChange={handleChange} />
        </label>
        <label>
          Experience:
          <input type="text" name="experience" onChange={handleChange} />
        </label>
        <label>
          Signup for Notices:
          <input type="text" name="signupForNotices" onChange={handleChange} />
        </label>
        <label>
          Cover Photo:
          <input type="file" name="coverPhoto" onChange={handleChange} />
        </label>
        <label>
          Food Label:
          <input type="file" name="foodLabel" onChange={handleChange} />
        </label>
        <button type="submit">Submit Request</button>
      </form>
      {/* {submitted && <p>Your request has been submitted successfully!</p>}
      {error && <p className="error">{error}</p>} */}
    </div>
  );
};

export default Request;
