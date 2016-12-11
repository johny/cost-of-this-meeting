import React, {Component} from 'react';
import './App.css';

import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header title="Meeting$ met€r" />
      </div>
    );
  }
}

export default App;
