import React from "react";
import { FunctionAdd } from "./functionAdd";

import styled from "styled-components";
import { WriteFunctions } from "./writeFunctions";
import { Canvas } from "./graph";

const Button = styled.button`
  position: relative;
  border-radius: 5px;
  margin: 0 0 10px 0;
  &:hover {
    background-color: #003d99;
    color: white;
    transition-duration: 0.6s;
  }
`;

export class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      functions: [],
      new: false
    };
  }

  onClick = () => {
    this.setState({ new: true });
  };

  newFunction = newFunc => {
    this.setState(prevState => ({
      functions: [...prevState.functions, newFunc]
    }));
    this.setState({ new: false });
  };

  render() {
    return (
      <div>
        <h1>Graph maker</h1>
        <WriteFunctions functions={this.state.functions} />
        {this.state.new ? (
          <FunctionAdd onComplete={this.newFunction} />
        ) : (
          <Button onClick={this.onClick}>Add new function</Button>
        )}
        <div>
          <Canvas funcs={this.state.functions} />
        </div>
      </div>
    );
  }
}
