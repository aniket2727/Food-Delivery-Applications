import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './regAndLogin.css';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    const navigate=useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
            toast.error('All fields are required');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error('Invalid email address');
            return;
        }

        // Password validation (minimum 6 characters)
        if (formData.password.length < 6) {
            toast.error('Password must be at least 6 characters');
            return;
        }

        // Password confirmation
        if (formData.password !== formData.confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }

        // Additional email and password validation can be added here

        // Successful sign-up
        toast.success('Sign-up successful!');
    };

    return (
        <div className='main-signin'>
            <div className='signin' style={{ boxShadow: '0 0 10px 2px rgba(0, 0, 0, 0.1)' }}>
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <label style={{ width: '200px' }}>
                        Name:
                        <input type="text" name="name" value={formData.name} onChange={handleChange} style={{ width: '100%', boxShadow: '0 0 10px 2px rgba(0, 0, 0, 0.1)' }} />
                    </label>
                    <br />
                    <label style={{ width: '200px' }}>
                        Email:
                        <input type="email" name="email" value={formData.email} onChange={handleChange} style={{ width: '100%', boxShadow: '0 0 10px 2px rgba(0, 0, 0, 0.1)' }} />
                    </label>
                    <br />
                    <label style={{ width: '200px' }}>
                        Password:
                        <input type="password" name="password" value={formData.password} onChange={handleChange} style={{ width: '100%', boxShadow: '0 0 10px 2px rgba(0, 0, 0, 0.1)' }} />
                    </label>
                    <br />
                    <label style={{ width: '200px' }}>
                        Confirm Password:
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            style={{ width: '100%', boxShadow: '0 0 10px 2px rgba(0, 0, 0, 0.1)' }}
                        />
                    </label>
                    <br />
                    <button type="submit">Sign Up</button>
                    <button onClick={()=>navigate('/tajhotels/login')}>Login</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
