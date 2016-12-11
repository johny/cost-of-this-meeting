import React from 'react';
import { Link } from 'react-router';

const Home = () => (
    <div className='home-view'>
      <h1>Meeting$ Met€r</h1>
      <Link to='/meeting' className='start-meeting'>Start your meeting counting</Link>
    </div>
);

export default Home;