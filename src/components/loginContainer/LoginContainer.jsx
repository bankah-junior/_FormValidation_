import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const LoginContainer = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (email.trim() !== '' && password.trim() !== '') {
        
        alert('Login Successfully!!')
        history.push('/home');  // Redirecting to home page
      }
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="container px-4 w-100-20 md:w-100-50">
            <h1 className='text-2xl md:text-4xl font-bold mb-4'>Login</h1>
            <br/>
  
            <label for="psw"><b>Email</b></label>
            <input
            className="md:p-4 p-2 mb-8"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
            <p className="input__message hidden"></p>
  
            <label for="psw"><b>Password</b></label>
            <input
            className="md:p-4 p-2 mb-8"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
            <p className="input__message hidden"></p>
  
            <hr/>
            <p>Forget password? <Link to="#login">Reset Password</Link>.</p>
            <br />
            <p>Don't have an account? <Link to="/signup">Register</Link> Now.</p>
            <br />
  
            <button type="submit" class="registerbtn py-4 px-8">Login</button>
          </div>
        </form>
      </div>
    );
}

export default LoginContainer