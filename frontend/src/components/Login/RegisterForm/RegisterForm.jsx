import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterForm.css';
import Facebook from '../../../svg/facebook.svg';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    day: '',
    month: '',
    year: '',
    gender: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="register">
      <div className="registerWrap">
        <div className="register-header">
          <img src={Facebook} alt="Facebook logo" />
        </div>
        <div className="register-form">
          <h4>Create New Account</h4>
          <form onSubmit={handleSubmit}>
            <div className="NameInput">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            </div>

            {/* Date of Birth Selection */}
            <div className="dob-section">
              <label>Date of Birth:</label>
              <div className="dob-select">
                <select name="day" value={formData.day} onChange={handleChange} required>
                  <option value="">Day</option>
                  {[...Array(31)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>

                <select name="month" value={formData.month} onChange={handleChange} required>
                  <option value="">Month</option>
                  {[
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December',
                  ].map((month, index) => (
                    <option key={index} value={month}>
                      {month}
                    </option>
                  ))}
                </select>

                <select name="year" value={formData.year} onChange={handleChange} required>
                  <option value="">Year</option>
                  {[...Array(100)].map((_, i) => {
                    const year = new Date().getFullYear() - i;
                    return (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            {/* Gender Selection */}
            <div className="gender-section">
              <label>Gender:</label>
              <div className="gender-options">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    onChange={handleChange}
                    required
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={handleChange}
                    required
                  />
                  Female
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Not Disclose"
                    onChange={handleChange}
                    required
                  />
                  Not Disclose
                </label>
              </div>
            </div>

            {/* Email and Password */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <button type="submit">Sign Up</button>
          </form>

          <div className="already-account">
            <p>
              Already have an account?{' '}
              <button onClick={() => navigate('/login')} className="link-button">
                Log In
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
