import React, { Component } from "react";

class Horloge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    // console.log("composant monté");
    // setInterval(() => console.log("tick"), 1000);

    this.time = setInterval(() => this.setState({ date: new Date() }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.time);
  }
  render() {
    // console.log("composant affiché");
    return (
      <>
        <h1> HORLOGE : {new Date().toLocaleTimeString()} </h1>
      </>
    );
  }
}

export default Horloge;
