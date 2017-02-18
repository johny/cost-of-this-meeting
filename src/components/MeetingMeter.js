import React, { Component } from 'react';

import Counter from './Counter';

class MeetingMeter extends Component {
  constructor(props) {
    
    super(props)

    this.state = {
      counterMode: false,
      multiplier: 8,
      value: 60
    }

    this.startCounting = this.startCounting.bind(this);

    this.onMultiplierChange = this.onMultiplierChange.bind(this);
    this.onValueChange = this.onValueChange.bind(this);

  }

  onMultiplierChange(e) {
    this.setState({
      multiplier: e.target.value
    });
  }

  onValueChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  startCounting() {
    this.setState({
      counterMode: true
    });
  }

  renderButton() {
    return (
      <div className="meeting__actions">
        <button className="meeting__button" onClick={this.startCounting}>Let's see how much it all costs ➟</button>
      </div>
    )
  }

  renderCounter() {
    return <Counter baseValue={this.state.value} multiplier={this.state.multiplier} />
  }

  renderOptions() {
    return (
      <div className="meeting__options">
        There are
        <input type="number" min="2" max="20" step="1" className="meeting__option" defaultValue={this.state.multiplier} onChange={this.onMultiplierChange} />
        people sitting in this meeting,
        <br />
        each billing
        <input type="number" min="10" max="200" className="meeting__option" defaultValue={this.state.value} onChange={this.onValueChange} />
        EUR per hour.
      </div>
    );
  }
    
  render() {
    return (
      <div className="meeting">
        {this.renderOptions()}
        {this.state.counterMode ? this.renderCounter() : this.renderButton()}
      </div>
    );
  }

}

export default MeetingMeter;