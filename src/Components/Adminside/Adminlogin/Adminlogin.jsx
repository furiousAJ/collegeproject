import axios from 'axios';
import React, { useState } from 'react';
import './adminlogin.scss'
import { useNavigate } from 'react-router-dom';

const Adminlogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/adminAuth/admin', {
        username,
        password,
      });

      console.log('Login successful', response.data);
      // Handle successful login (e.g., store token in state or localStorage)
      navigate('/admin');
    } catch (error) {
      console.error('Login failed', error.response.data);
      // Set the error message based on the error status
      if (error.response.status === 401) {
        setErrorMessage('Didnt recognize you.');
      } else {
        setErrorMessage(error.response.data.message);
      }
    }
  };


  return (
    <div className='adminuserpostion'>
      <div className="adminusercontainer">
        <div className="adminuserform-section">
          <div className="adminuserform-wrapper">
            <div className="adminuserlogo-container">
              <img src={require('./admin.jpg')} alt="Logo" />
            </div>
            <h2>who are you? Reveal yourself!</h2>
            <p> To access your Entity.</p>
            <div className="adminuserinput-container">
              <div className="adminuserform-group">
                <label htmlFor="email">Username</label>
                <input
                  type="username"
                  id="username"
                  autoComplete="off"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="adminuserform-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button className="adminuserlogin-btn" onClick={handleLogin}>
              Log In
            </button>
          </div>
        </div>
        {errorMessage && <p className="adminerror-message">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Adminlogin;







