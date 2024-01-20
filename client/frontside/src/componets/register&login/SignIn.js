import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './regAndLogin.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setEmail, setLoggedIn } from '../actions/authActions'

const SignIn = () => {
    const navigate=useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        // Add your sign-in logic here
        dispatch(setEmail(email));
        dispatch(setLoggedIn(true));
        console.log('Signing in with:', email, password);
    };

    return (
        <div className='main-signin'>
            <div className='signin'  style={{ boxShadow: '0 0 10px 2px rgba(0, 0, 0, 0.1)' }}>
                <h2>Sign In</h2>
                <form>
                    <label style={{ width: '200px' }}>
                        Email:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}   style={{ width: '100%',boxShadow: '0 0 10px 2px rgba(0, 0, 0, 0.1)'  }}
                        />
                    </label>
                    <br />
                    <label style={{ width: '200px' }}>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}   style={{ width: '100%',boxShadow: '0 0 10px 2px rgba(0, 0, 0, 0.1)'  }}
                        />
                    </label>
                    <br />
                    <button type="button" onClick={handleSignIn}>
                        Sign In
                    </button>
                    <button type="button" onClick={()=>navigate('/tajhotels/register')}>
                         Create Account
                    </button>
                </form>

                <p>Welcome To Taj Hotesl Web Appliaction</p>

            </div>

        </div>
    );
};

export default SignIn;
