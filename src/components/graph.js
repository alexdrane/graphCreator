import React from "react";
import styled from "styled-components";

const Canv = styled.canvas`
  position: relative;
  align-self: center;
  margin: 20px;
`;

export class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.width = "600";
    this.height = "600";
  }
  componentDidMount() {
    this.updateCanvas();
  }
  componentDidUpdate() {
    this.updateCanvas();
  }

  draw = (func, ctx) => {
    ctx.beginPath();
    var y = func.getTerm(-this.width / 2 / 10);
    ctx.moveTo(0, this.height / 2 - y);
    for (var j = -this.width / 2; j < this.width / 2; j++) {
      y = func.getTerm(j / 10);
      if (y === Infinity) {
        ctx.stroke();
        ctx.beginPath();
      } else {
        ctx.lineTo(this.width / 2 + j, this.height / 2 - y);
        ctx.moveTo(this.width / 2 + j, this.height / 2 - y);
      }
    }
    ctx.stroke();
  };

  updateCanvas() {
    const ctx = this.refs.canvas.getContext("2d");
    ctx.clearRect(0, 0, this.width, this.height);
    var w;
    for (var i = 0; i < this.width / 10 + 1; i++) {
      if (i === this.width / 20) {
        w = 2;
      } else {
        w = 1;
      }
      ctx.fillRect(i * 10, 0, w, this.height);
      ctx.fillRect(0, i * 10, this.width, w);

      if (this.props.funcs.length !== 0) {
        ctx.strokeStyle = "Red";
        this.props.funcs.map(func => this.draw(func, ctx));
      }
    }
  }
  render() {
    return (
      <Canv
        ref="canvas"
        width={Number(this.width) + 1}
        height={Number(this.height) + 1}
      />
    );
  }
}
