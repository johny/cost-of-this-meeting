import React from 'react';

import MeetingMeter from './components/MeetingMeter';

import './App.css';

const App = () => {
  return(
    <div className="app">
      <h1 className="app__title">Meeting Meter</h1>
      <div className="app_content">
        <MeetingMeter />
      </div>
    </div>
  );
}

export default App;
