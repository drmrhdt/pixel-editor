import React from "react";
import Canvas from "./components/Canvas";
import Toolbox from "./components/Toolbox";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.app__box}>
        <h1 className={styles.app__title}>Zen Drawing App</h1>
        <Toolbox className={styles.app__toolbox} />
      </div>
      <Canvas />
    </div>
  );
}

export default App;
