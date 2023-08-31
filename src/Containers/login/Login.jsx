import React from 'react';
import { ThemeChanger } from '../../components';
import { Link } from 'react-router-dom';

const Login = () => {

  return (
    <div>
      <ThemeChanger />

      <h1>Login Page</h1>
      <Link to="/signup">Register Now.</Link>
        
    </div>
  )
}

export default Login