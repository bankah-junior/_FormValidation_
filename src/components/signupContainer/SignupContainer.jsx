import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const SignupContainer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== '' && email.trim() !== '' && password.trim() !== '') {
      
      alert('Registered Successfully!!')
      history.push('/home');  // Redirecting to home page
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container px-4 w-100-20 md:w-100-50">
          <h1 className='text-2xl md:text-4xl font-bold mb-4'>Register</h1>
          <br/>

          <label for="name"><b>Name</b></label>
          <input
          className="md:p-4 p-2 mb-8"
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          />
          <p className="input__message hidden">Error / Success</p>

          <label for="psw"><b>Email</b></label>
          <input
          className="md:p-4 p-2 mb-8"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          />
          <p className="input__message hidden">Error / Success</p>

          <div className="w-full flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-100-60 flex flex-col">
              <label for="psw"><b>Password</b></label>
              <input
              className="md:p-4 p-2 mb-8"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              />
              <p className="input__message hidden">Error / Success</p>
            </div>

            <div className="w-full md:w-100-60 flex flex-col">
              <label for="psw"><b>Confirm Password</b></label>
              <input
              className="md:p-4 p-2 mb-8"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              />
              <p className="input__message hidden">Error / Success</p>
            </div>
          </div>

          <hr/>
          <p>By creating an account you agree to our <a href="#home">Terms & Privacy</a>.</p>
          <br />
          <p>Already having an account? <Link to="/login">Login</Link> Now.</p>
          <br />

          <button type="submit" className="registerbtn py-4 px-8">Register</button>
        </div>
      </form>
    </div>
  );
};

export default SignupContainer;
