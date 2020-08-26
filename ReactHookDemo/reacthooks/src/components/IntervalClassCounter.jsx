import React, { Component } from "react";

export class IntervalClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    this.interval = setInterval(this.tick, 1);
  }
  tick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  componentWillMount() {
    clearInterval(this.interval);
  }

  render() {
    return <div>{this.state.count}</div>;
  }
}

export default IntervalClassCounter;
