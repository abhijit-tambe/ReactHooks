import React, { Component } from "react";

export class ClassMouse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    };
  }

  update = (ev) => {
    this.setState({
      x: ev.clientX,
      y: ev.clientY,
    });
  };

  componentDidMount() {
    window.addEventListener("mousemove", this.update);
  }
  render() {
    return (
      <div>
        x : {this.state.x} , y : {this.state.y}
      </div>
    );
  }
}

export default ClassMouse;
