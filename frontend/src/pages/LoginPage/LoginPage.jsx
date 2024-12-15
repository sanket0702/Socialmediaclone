import React from 'react';
import {Routes,Route} from 'react-router-dom'
import './LoginPage.css';

import Login from '../../components/Login/LoginForm/LoginForm';
import Register from '../../components/Login/RegisterForm/RegisterForm';

const LoginPage = () => {
  return (
    <div className='login'>
      <Routes>
          {/* Define routes for Login and Register components */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
    </div>
  );
};

export default LoginPage;
