import React from "react";
import Display from "./display/Display";
import Keyboard from "./keyboard/Keyboard";
import "./Layout.css";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayExpression: "",
    };
  }

  handleClick = (btn) => {
    let expression = "";
    if (btn !== "=")
      expression = btn === "C" ? "" : this.state.displayExpression.concat(btn);
    else {
      try {
        expression = String(eval(this.state.displayExpression));
      } catch (e) {
        expression = "ERROR";
      }
    }
    this.setState({
      displayExpression: expression,
    });
  };

  render() {
    return (
      <div className="layout">
        <Display expression={this.state.displayExpression}></Display>
        <Keyboard btnPressed={(btn) => this.handleClick(btn)}></Keyboard>
      </div>
    );
  }
}

export default Layout;
