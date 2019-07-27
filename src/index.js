import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { Graph } from "./components/drawgraphs";

function App() {
  return (
    <div className="App">
      <Graph />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
