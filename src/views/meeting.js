import React from 'react';

import Counter from '../components/counter';

const Meeting = () => (
    <div className='meeting'>
      <h1>Your meeting counter for 6 people x 50€</h1>
      <Counter price={50} multiplier={3} />
    </div>
);

export default Meeting;