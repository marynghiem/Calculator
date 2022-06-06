import "./App.css";
import { Calculator } from "./components/Calculator.tsx";
import React from "react";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";

function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

export default App;
