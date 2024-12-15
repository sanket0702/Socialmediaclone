import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Loginform.css';
import Facebook from '../../../svg/facebook.svg';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="login">
      <div className="loginWrap">
        <div className="login-header">
          <img src={Facebook} alt="Facebook logo" />
        </div>
        <div className="login-form">
          <h4>Login to Facebook</h4>
          <div className="login-form-wrap">
            <form>
              <input type="text" placeholder="Email or phone" />
              <input type="password" placeholder="Password" />
              <button type="submit">Log In</button>
            </form>
          </div>
        </div>
        <div className="register-wrap">
          <p>
            Don't have an account?{' '}
            <button onClick={() => navigate('/login/register')} className="link-button">
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
