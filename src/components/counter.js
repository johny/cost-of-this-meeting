import React, { Component } from 'react';

import moment from 'moment';
import leftPad from 'left-pad';
import throttle from 'lodash/throttle';

const INTERVAL = 130;

const counterPropTypes = {
  baseValue: React.PropTypes.number,
  multiplier: React.PropTypes.number
}

class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      startTime: null,
      elapsedTime: 0
    }

    this.updateTitle = throttle(this.updateTitle, 1000);

  }

  componentDidMount() {
    this.startCounting();
    document.body.classList.add('is-counting')
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    document.body.classList.remove('is-counting')
  }

  startCounting() {
    this.setState({
      startTime: Date.now(),
    });
    this.interval = setInterval(this.update.bind(this), INTERVAL);
  }

  update() {
    const { startTime } = this.state;
    const timeNow = Date.now();

    const elapsedTime = timeNow - startTime

    const cost = (elapsedTime * this.props.baseValue * this.props.multiplier) / (60 * 60 * 1000);

    this.setState(({total}) => ({
      elapsedTime: elapsedTime,
      total: cost
    }));

    this.updateTitle();
  }

  updateTitle() {
    const newTitle = `${this.getFormattedCost()} € - Cost of this meeting`;
    document.title = newTitle;
  }

  getFormattedCost() {
    return parseFloat(Math.round(this.state.total * 100) / 100).toFixed(2)
  }

  getFormattedDuration() {
    const d = moment.duration(this.state.elapsedTime);
    return `${leftPad(d.hours(), 2, '0')}:${leftPad(d.minutes(), 2, '0')}:${leftPad(d.seconds(), 2, '0')}`;
  }

  getFormattedStartTime() {
    return moment(this.state.startTime).format('MMMM Do YYYY, h:mm:ss a');
  }

  render() {
    return (
      <div className="counter">
        <div className="counter__display">
          <span className="counter__value">{this.getFormattedCost()}</span>
          <span className="counter__currency">€</span>
        </div>
        <div className="counter__meta">
          <span className="counter__start">Meeting started on {this.getFormattedStartTime()}</span>
          <span className="counter__separator">/</span>
          <span className="counter__duration">Elapsed time: {this.getFormattedDuration()}</span>
        </div>
      </div>
    );
  }
}

Counter.propTypes = counterPropTypes;

export default Counter;