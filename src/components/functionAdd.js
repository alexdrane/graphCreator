import React from "react";
import { Term } from "./termAdd";
import styled from "styled-components";
import { WriteFunction } from "./writeFunction";

const Button = styled.button`
  border-radius: 5px;
  margin: 0 0 10px 0;
  &:hover {
    background-color: #003d99;
    color: white;
    transition-duration: 0.6s;
  }
`;

class func {
  constructor(termsList) {
    this.termsList = termsList;
  }
  getTerm = n => {
    var total = 0;
    for (var i = 0; i < this.termsList.length; i++) {
      total += this.termsList[i].getTerm(n);
    }
    return total;
  };
}

export class FunctionAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      terms: [],
      new: false
    };
  }

  addTerm = newTerm => {
    var i;
    for (i = 0; i < this.state.terms.length; i++) {
      if (
        this.state.terms[i].power === newTerm.power &&
        this.state.terms[i].base === newTerm.base
      ) {
        newTerm.co += this.state.terms[i].co;
      }
    }
    this.setState(prevState => ({
      terms: [
        ...prevState.terms.filter(
          t => !(t.power === newTerm.power && t.base === newTerm.base)
        ),
        newTerm
      ]
    }));
    this.setState({ new: false });
  };

  onClick = () => {
    this.setState({ new: true });
  };

  CreateFunc = () => {
    const newFunc = new func(this.state.terms);
    this.props.onComplete(newFunc);
  };

  render() {
    return (
      <div>
        <div>
          <WriteFunction terms={this.state.terms} />
        </div>
        <div>
          {this.state.new ? (
            <Term add={this.addTerm} />
          ) : (
            <Button onClick={this.onClick}>Add new term</Button>
          )}
        </div>
        {this.state.terms.length > 0 ? (
          <Button onClick={this.CreateFunc}>Create function</Button>
        ) : null}
      </div>
    );
  }
}
