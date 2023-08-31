import { React } from 'react';
import { ThemeChanger } from '../../components';
import { Link } from 'react-router-dom';


const Signup = () => {

  return (
    <div>
      <ThemeChanger />

      <h1>Register</h1>
      <Link to="/home">Go Home</Link>

    </div>
  );

}

export default Signup