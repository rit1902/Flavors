import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaMeta } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import './LoginSignup.css';

const LoginSignup = () => {
    const navigate = useNavigate();

    const [signUpData, setSignUpData] = useState({
        username: '',
        emailId: '',
        password: '',
        mobileNumber: ''
    });

    const [signInData, setSignInData] = useState({
        emailId: '',
        password: ''
    });

    const [signUpError, setSignUpError] = useState('');
    const [signInError, setSignInError] = useState('');

    useEffect(() => {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');

        const handleSignUpClick = () => container.classList.add("new-right-panel-active");
        const handleSignInClick = () => container.classList.remove("new-right-panel-active");

        if (signUpButton && signInButton && container) {
            signUpButton.addEventListener('click', handleSignUpClick);
            signInButton.addEventListener('click', handleSignInClick);

            // Cleanup event listeners on unmount
            return () => {
                signUpButton.removeEventListener('click', handleSignUpClick);
                signInButton.removeEventListener('click', handleSignInClick);
            };
        }
    }, []);

    const handleSignUpChange = (e) => {
        const { name, value } = e.target;
        setSignUpData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSignInChange = (e) => {
        const { name, value } = e.target;
        setSignInData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSignUp = () => {
        const { username, emailId, password, mobileNumber } = signUpData;
        if (!username || !emailId || !password || !mobileNumber) {
            setSignUpError('All fields are required');
            return;
        }

        axios.post('http://localhost:8080/api/flavors/create', signUpData)
            .then(response => {
                console.log('Account created:', response.data);
                navigate('/home'); // Navigate to homepage on successful signup
            })
            .catch(error => {
                console.error("There was an error creating the account!", error);
                const errorMessage = error.response?.data || 'Error creating account';
                setSignUpError(errorMessage);
            });
    };

    const handleSignIn = () => {
        const { emailId, password } = signInData;
        if (!emailId || !password) {
            setSignInError('Both email and password are required');
            return;
        }

        axios.post('http://localhost:8080/api/flavors/login', signInData)
            .then(response => {
                console.log('Signed in:', response.data);
                navigate('/homepage'); // Navigate to homepage on successful login
            })
            .catch(error => {
                console.error("There was an error signing in!", error);
                const errorMessage = error.response?.data || 'Invalid email or password';
                setSignInError(errorMessage);
            });
    };

    return (
        <div className="new-backgroundimage">
            <div>
                <h2 className="new-title">FLAVÖRS</h2>
                <div className="new-container" id="container">
                    <div className="new-form-container new-sign-up-container">
                        <form onSubmit={(e) => { e.preventDefault(); handleSignUp(); }}>
                            <h1>Create Account</h1>
                            <div className="new-social-container">
                                <FcGoogle className="new-socialicon"/>
                                <FaFacebook className="new-socialicon"/>
                                <FaMeta className="new-socialicon"/>
                            </div>
                            <input type="text" placeholder="Name" name="username" value={signUpData.username} onChange={handleSignUpChange} />
                            <input type="email" placeholder="Email" name="emailId" value={signUpData.emailId} onChange={handleSignUpChange} />
                            <input type="password" placeholder="Password" name="password" value={signUpData.password} onChange={handleSignUpChange} />
                            <input type="text" placeholder="Mobile Number" name="mobileNumber" value={signUpData.mobileNumber} onChange={handleSignUpChange} />
                            {signUpError && <p className="new-error">{signUpError}</p>}
                            <button type="submit">Sign Up</button>
                        </form>
                    </div>
                    <div className="new-form-container new-sign-in-container">
                        <form onSubmit={(e) => { e.preventDefault(); handleSignIn(); }}>
                            <h1>Sign in</h1>
                            <div className="new-social-container">
                                <FcGoogle className="new-socialicon"/>
                                <FaFacebook className="new-socialicon"/>
                                <FaMeta className="new-socialicon"/>
                            </div>
                            <input type="email" placeholder="Email" name="emailId" value={signInData.emailId} onChange={handleSignInChange} />
                            <input type="password" placeholder="Password" name="password" value={signInData.password} onChange={handleSignInChange} />
                            {signInError && <p className="new-error">{signInError}</p>}
                            <br />
                            <button type="submit">Sign In</button>
                            <br />
                            <Link to='/adminlogin'><button type="submit">Admin Login</button></Link>
                        </form>
                    </div>
                    <div className="new-overlay-container">
                        <div className="new-overlay">
                            <div className="new-overlay-panel new-overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <button className="new-ghost" id="signIn">Sign In</button>
                            </div>
                            <div className="new-overlay-panel new-overlay-right">
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button className="new-ghost" id="signUp">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;
