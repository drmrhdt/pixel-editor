import React from "react";
import Canvas from "./components/Canvas";
import Toolbox from "./components/Toolbox";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <Canvas />
      <Toolbox />
    </div>
  );
}

export default App;
