import React, { Component } from 'react';

class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      startTime: null
    }
  }

  componentDidMount() {
    this.startCounting();
  }

  startCounting() {
    this.setState({
      startTime: Date.now(),
      interval: setInterval(this.update.bind(this), 100)
    });
  }

  update() {
    this.setState(({value}) => ({
      value: value + this.props.value * this.props.multiplier / 36000
    }));
  }

  getDuration() {
    return '00:00:00'
  }

  render() {
    return (
      <div className="counter">
        <div className="counter__display">
          <span className="counter__value">{parseFloat(Math.round(this.state.value * 100) / 100).toFixed(2)}</span>
          <span className="counter__currency">€</span>
        </div>
        <div className="counter__meta">
          <span className="counter__start">Started at: {this.state.startTime}</span>
          <span className="counter__separator">/</span>
          <span className="counter__duration">Duration: {this.getDuration()}</span>
        </div>
      </div>
    );
  }

}

export default Counter;