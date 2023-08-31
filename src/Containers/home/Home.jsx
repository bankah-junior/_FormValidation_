import React from 'react'
import { ThemeChanger } from '../../components';
import { Link } from 'react-router-dom';
// import { nameArray, emailArray, passwordArray } from '../../constants/constants';

const Home = () => {
  
    return (
      <>
        <ThemeChanger />
        <h1>Welcome User</h1>
        <Link to="/login">Log out</Link>
      </>
    );
}

export default Home