import React, { Component } from 'react';

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
          <span className="counter__currency">€</span>
        </div>
    );
  }

}

export default Counter;