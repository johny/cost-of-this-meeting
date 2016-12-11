import React, { Component } from 'react';
import { Router, Route, hashHistory, Link } from 'react-router';

import './App.css';

class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 0
    }
  }

  componentDidMount() {
    this.startCounting();
  }

  startCounting() {
    this.setState({
      interval: setInterval(this.update.bind(this), 100)
    });
  }

  update() {
    this.setState(({value}) => ({
      value: value + this.props.price * this.props.multiplier / 36000
    }));
  }

  render() {
    return (
      <div className='counter'>
        <span className='counter__value'>{parseFloat(Math.round(this.state.value * 1000) / 1000).toFixed(3)}</span>
        <span className="counter_currency">€</span>
      </div>
    );
  }
}

const Meeting = () => (
    <div className='meeting'>
      <h1>Your meeting counter for 6 people x 50€</h1>
      <Counter price={50} multiplier={3} />
    </div>
);

const Home = () => (
    <div className='home-view'>
      <h1>Welcome to Meeting Mete€r app</h1>
      <Link to='/meeting'>Start counting</Link>
    </div>
);


class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app__header">
          <h1 className="app__title">Meetings Met€r</h1>
        </div>
        <div className="app__content">
          <Router history={hashHistory}>
            <Route path='/' component={Home} />
            <Route path='/meeting' component={Meeting} />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
