import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';

import Home from './views/home';
import Meeting from './views/meeting';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router history={hashHistory}>
          <Route path='/' component={Home} />
          <Route path='/meeting' component={Meeting} />
        </Router>
      </div>
    );
  }
}

export default App;
