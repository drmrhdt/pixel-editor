import React from "react";
import Canvas from "./components/Canvas";
import Toolbox from "./components/Toolbox";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Canvas />
      <Toolbox />
    </div>
  );
}

export default App;
