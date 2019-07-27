import React from "react";
import { WriteFunction } from "./writeFunction";

export function WriteFunctions({ functions }) {
  const funcs = functions.map((func, idx) => (
    <WriteFunction key={idx} terms={func.termsList} />
  ));
  return <div>{funcs}</div>;
}
