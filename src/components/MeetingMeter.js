import React, { Component } from 'react';

import Counter from './Counter';

class MeetingMeter extends Component {
  constructor(props) {
    
    super(props)

    this.state = {
      counting: false,
      people: 8,
      value: 60
    }

    this.startCounting = this.startCounting.bind(this);
  }

  startCounting() {
    this.setState({
      counting: true
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
    return <Counter value={this.state.value} multiplier={this.state.people} />
  }

  renderOptions() {
    return (
      <div className="meeting__options">
        There are
        <input type="number" min="2" max="20" step="1" className="meeting__option" defaultValue={this.state.people} />
        people sitting in this meeting,
        <br />
        each billing
        <input type="number" min="10" max="200" className="meeting__option" defaultValue={this.state.value} />
        EUR per hour.
      </div>
    );
  }
    
  render() {
    return (
      <div className="meeting">
        {this.renderOptions()}
        {this.state.counting ? this.renderCounter() : this.renderButton()}
      </div>
    );
  }

}

export default MeetingMeter;