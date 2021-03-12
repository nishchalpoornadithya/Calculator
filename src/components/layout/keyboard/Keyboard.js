import React from "react";
import "./Keyboard.css";
import Button from "../../../shared-components/button/Button";

class Keyboard extends React.Component {
  constructor(props) {
    super(props);
  }

  handleButtonPress = (btn) => {
    this.props.btnPressed(btn);
  };

  render() {
    return (
      <div className="keyboard">
        <Button
          label={"("}
          btnPressed={this.handleButtonPress.bind(this, "(")}
        ></Button>
        <Button
          label={"9"}
          btnPressed={this.handleButtonPress.bind(this, "9")}
        ></Button>
        <Button
          label={"8"}
          btnPressed={this.handleButtonPress.bind(this, "8")}
        ></Button>
        <Button
          label={"7"}
          btnPressed={this.handleButtonPress.bind(this, "7")}
        ></Button>
        <Button
          label={"+"}
          btnPressed={this.handleButtonPress.bind(this, "+")}
        ></Button>
        <Button
          label={")"}
          btnPressed={this.handleButtonPress.bind(this, ")")}
        ></Button>
        <Button
          label={"6"}
          btnPressed={this.handleButtonPress.bind(this, "6")}
        ></Button>
        <Button
          label={"5"}
          btnPressed={this.handleButtonPress.bind(this, "5")}
        ></Button>
        <Button
          label={"4"}
          btnPressed={this.handleButtonPress.bind(this, "4")}
        ></Button>
        <Button
          label={"-"}
          btnPressed={this.handleButtonPress.bind(this, "-")}
        ></Button>
        <Button
          label={"%"}
          btnPressed={this.handleButtonPress.bind(this, "%")}
        ></Button>
        <Button
          label={"3"}
          btnPressed={this.handleButtonPress.bind(this, "3")}
        ></Button>
        <Button
          label={"2"}
          btnPressed={this.handleButtonPress.bind(this, "2")}
        ></Button>
        <Button
          label={"1"}
          btnPressed={this.handleButtonPress.bind(this, "1")}
        ></Button>
        <Button
          label={"/"}
          btnPressed={this.handleButtonPress.bind(this, "/")}
        ></Button>
        <Button
          label={"C"}
          btnPressed={this.handleButtonPress.bind(this, "C")}
        ></Button>
        <Button
          label={"."}
          btnPressed={this.handleButtonPress.bind(this, ".")}
        ></Button>
        <Button
          label={"0"}
          btnPressed={this.handleButtonPress.bind(this, "0")}
        ></Button>
        <Button
          label={"="}
          btnPressed={this.handleButtonPress.bind(this, "=")}
        ></Button>
        <Button
          label={"*"}
          btnPressed={this.handleButtonPress.bind(this, "*")}
        ></Button>
      </div>
    );
  }
}

export default Keyboard;
