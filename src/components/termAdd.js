import React from "react";

import styled from "styled-components";

const NumBox = styled.input`
  font-size: 20px;
  height: 30px;
  width: 30px;
  margin: 1px;
  text-align: center;
  border-radius: 4px;
`;

const PowerBox = styled(NumBox)`
  font-size: 13px;
  border-radius: 2px;
  height: 15px;
  width: 15px;
  position: relative;
  bottom: 10px;
`;

const AddButton = styled.button`
  position: relative;
  left: 40px;
  border-radius: 5px;
  &:hover {
    background-color: #003d99;
    color: white;
    transition-duration: 0.6s;
  }
`;

class objTerm {
  constructor(co, base, power) {
    this.co = co;
    this.base = base;
    this.power = power;
  }

  getTerm(n) {
    var m;
    switch (this.base) {
      case "x":
        switch (this.power) {
          case "x":
            m = n ** n;
            break;

          default:
            m = n ** this.power;
            break;
        }
        break;

      default:
        switch (this.power) {
          case "x":
            m = this.base ** n;
            break;

          default:
            m = this.base ** this.power;
            break;
        }
        break;
    }
    return this.co * m;
  }
}

export function Term({ add }) {
  const [co, setCo] = React.useState("");
  const [power, setPower] = React.useState("");
  const [base, setBase] = React.useState("");

  function onBaseChange(evt) {
    setBase(evt.target.value);
  }

  function onCoChange(evt) {
    setCo(evt.target.value);
  }
  function onPowerChange(evt) {
    setPower(evt.target.value);
  }

  function createTerm() {
    var create = true;
    var newCo;
    if (co === "") {
      newCo = 1;
    } else {
      newCo = Number(co);
    }
    if (Number.isNaN(newCo)) {
      create = false;
    }
    if (base === "x" || !Number.isNaN(Number(base))) {
      var newBase;
      if (base === "x") {
        newBase = base;
      } else {
        newBase = Number(base);
      }
    } else {
      create = false;
    }
    if (power === "x" || !Number.isNaN(Number(power))) {
      var newPower;
      if (power === "x") {
        newPower = power;
      } else {
        newPower = Number(power);
      }
    } else {
      create = false;
    }

    if (create) {
      const n = new objTerm(newCo, newBase, newPower);
      add(n);
    }
  }

  return (
    <>
      <NumBox size="1" value={co} onChange={onCoChange} />
      <NumBox size="1" value={base} onChange={onBaseChange} />
      <PowerBox size="1" value={power} onChange={onPowerChange} />
      <AddButton onClick={createTerm}>Add term</AddButton>
    </>
  );
}
