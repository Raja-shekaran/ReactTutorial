import React from "react";

export default class CarClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "red" };
    console.log("Constructor Called!");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps Called!");
    return null; // No state change
  }

  componentDidMount() {
    console.log("componentDidMount Called!");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate Called!");
    return true; // Allow re-render
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate Called!");
    return null; // No special snapshot
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate Called!");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount Called!");
  }

  changeColor = () => {
    this.setState({ color: "blue" });
  };

  render() {
    console.log("Render Called!");
    return (
      <div>
        <h2>Hi, I am a {this.state.color} Car!</h2>
        <button onClick={this.changeColor}>Change Color</button>
      </div>
    );
  }
}
